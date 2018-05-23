import path from 'path'

import CONFIG from './Config'
import PointerLockAPISupportCheckHandler from './PointerLockAPISupportCheckHandler'
import PhysicsEngine from './Physics'
import { Shoot } from './Actions'
import DispatchEvents from './Events'
import Animate from './Animate'
import InstanstiateControls from './Controls'
import InstantiateRenderer from './Renderer'
import { GenerateLights, GenerateGroundPlane, GenerateBoxes, GenerateSwingingPanels, CreateMuzzleFlash } from './Objects'


const SceneDefaults = () => {
  CONFIG.CAMERA = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  CONFIG.SCENE = new THREE.Scene()
  CONFIG.SCENE.fog = new THREE.Fog(0xFCFCFC, 0, 95)
}

const GenerateSkyBox = () => {
  const directions  = [
    "posx",
    "negx",
    "posy",
    "negy",
    "posz",
    "negz"
  ]
  const skyGeometry = new THREE.BoxGeometry(150, 150, 150)
  let materialArray = []
  for(let i = 0; i < 6; i++) {
    let src = require(`../public/images/skybox/${directions[i]}.png`)
    materialArray.push(new THREE.MeshBasicMaterial({
      map: THREE.ImageUtils.loadTexture(src),
      side: THREE.BackSide
    }))
  const skyMaterial = new THREE.MeshFaceMaterial(materialArray)
  const skyBox = new THREE.Mesh(skyGeometry, skyMaterial)
  CONFIG.SCENE.add(skyBox)
  }
}

const WebcamAsTextureConfig = () => {
  var THREEx = THREEx || {}
  THREEx.WebcamTexture	= function() {
  				console.assert(THREEx.WebcamTexture.available === true)
  				var video	= document.createElement('video');
  				video.width	= 320;
  				video.height	= 240;
  				video.autoplay	= true;
  				video.loop	= true;
  				// expose video as this.video
  				this.video	= video

  				if( navigator.webkitGetUserMedia ){
  					navigator.webkitGetUserMedia({video:true}, function(stream){
  						video.src	= URL.createObjectURL(stream);
  					}, function(error){
  						alert('Your browser does not support WebRTC or you have it disabled. Cannot use Webcam during gameplay.');
  					});
  				}else if(navigator.mozGetUserMedia){
  					navigator.mozGetUserMedia({video:true}, function(stream){
  						video.src	= URL.createObjectURL(stream);
  					}, function(error){
  						alert('Your browser does not support WebRTC or you have it disabled. Cannot use Webcam during gameplay.');
  					});
  				}else	console.assert(false)


  				// create the texture
  				var texture	= new THREE.Texture( video );
  				// expose texture as this.texture
  				this.texture	= texture

  				/**
  				 * update the object
  				 */
  				this.update	= function(delta, now){
  					if( video.readyState !== video.HAVE_ENOUGH_DATA )	return;
  					texture.needsUpdate	= true;
  				}

  				/**
  				 * destroy the object
  				 */
  				this.destroy	= function(){
  					video.pause()
  				}
  		}
    THREEx.WebcamTexture.available	= navigator.webkitGetUserMedia || navigator.mozGetUserMedia ? true : false;
}

const GenerateWebcamSkyWindow = () => {
  var webcamTexture	= new THREEx.WebcamTexture()
  CONFIG.RENDER_FACTS.push((delta, now) => webcamTexture.update(delta, now))
  var webcamExtents = new CANNON.Vec3(42, 30, 0)
  var webcamShape = new CANNON.Box(webcamExtents)
  var webcamGeo = new THREE.BoxGeometry(webcamExtents.x * 2, webcamExtents.y * 2, webcamExtents.z * 2)
  webcamGeo.applyMatrix( new THREE.Matrix4().makeRotationX(- Math.PI / 3.5))
  for(let i = 0; i < 1; i++) {
    let webcamBody = new CANNON.Body({ mass: 0 })
    webcamBody.addShape(webcamShape)
    let webcamMat	= new THREE.MeshBasicMaterial({ map	: webcamTexture.texture })
    let webcamMesh	= new THREE.Mesh(webcamGeo, webcamMat)
    CONFIG.SCENE.add(webcamMesh)
    CONFIG.WORLD.add(webcamBody)
    webcamBody.position.set(0, 50, 50)
    webcamMesh.position.set(0, 50, 50)
    webcamMesh.castShadow = false
    webcamMesh.receiveShadow = false
    CONFIG.WEBCAM_BOXES.push(webcamBody)
    CONFIG.WEBCAM_MESHES.push(webcamMesh)
  }
}

const CreateCrosshair = () => {
  const crosshairMap = THREE.ImageUtils.loadTexture(require(`../public/images/gun/crosshair.png`))
  const crosshairMat = new THREE.SpriteMaterial({ map: crosshairMap, fog: false })
  const crosshair = new THREE.Sprite(crosshairMat)
  CONFIG.CAMERA.add(crosshair)
  const crosshairPercentX = 50
  const crosshairPercentY = 50
  const crosshairPositionX = (crosshairPercentX / 100) * 2 - 1
  const crosshairPositionY = (crosshairPercentY / 100) * 2 - 1
  crosshair.position.x = crosshairPositionX * CONFIG.CAMERA.aspect
  crosshair.position.y = crosshairPositionY
  crosshair.position.z = -1.5
  crosshair.scale.x = 0.2
  crosshair.scale.y = 0.2
  const manager = new THREE.LoadingManager()
  manager.onProgress = (item,loaded,total) => console.log(item, loaded, total)
}

// const CreateMuzzleFlash = () => {
//   const mFmap = THREE.ImageUtils.loadTexture(require(`../public/images/gun/muzzleFlash.png`))
//   const mFMat = new THREE.SpriteMaterial({ map: mFmap, fog: true })
//   const mF = new THREE.Sprite(mFMat)
//   CONFIG.CAMERA.add(mF)
//   let mFPercentX = 50
//   let mFPercentY = 50
//   let mFPositionX = (mFPercentX / 100) * 2 - 1
//   let mFPositionY = (mFPercentY / 100) * 2 - 1
//   mF.position.x = mFPositionX * CONFIG.CAMERA.aspect
//   mF.position.y = mFPositionY
//   mF.position.z = -1.9
//   mF.scale.x = 1.5
//   mF.scale.y = 1.5
// }

const InitializeSceneDefaults = async () => {
  try {
    const events = await DispatchEvents()
    await SceneDefaults()
    await InstanstiateControls()
    await InstantiateRenderer()
    return events
  }
  catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

const Init = () =>
  PointerLockAPISupportCheckHandler()
    .then(() => WebcamAsTextureConfig())
    .then(() => InitializeSceneDefaults())
    .then(() => CreateMuzzleFlash())
    .then(() => GenerateLights())
    .then(() => GenerateGroundPlane())
    .then(() => GenerateSkyBox())
    .then(() => GenerateWebcamSkyWindow())
    .then(() => GenerateBoxes())
    .then(() => GenerateSwingingPanels())
    .then(() => CreateCrosshair())
    .catch(error => {
      console.log(error)
      return new Error(error)
    })


const ADHDFPS = async () => {
  try {
    await PhysicsEngine()
    await Init()
    await Animate()
  }
  catch(error) {
    console.log(error)
    throw new Error(error)
  }
}

export default ADHDFPS
