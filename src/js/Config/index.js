const documentBody = document.body
const havePointerLock = `pointerLockElement` in document || `mozPointerLockElement` in document || `webkitPointerLockElement` in document

const pauseScreenDOMNode = document.getElementById(`pauseScreen--wrapper`)
const instructionsDOMNode = document.getElementById(`instructions--wrapper`)

const timeDisplacement = 1 / 60

const bgAudio = document.createElement('audio')
const pauseAudio = document.createElement('audio')
const matchStart = document.createElement('audio')
const gunShot = document.createElement('audio')

bgAudio.setAttribute('src', require('file-loader!../../public/audio/theme.m4a'))
bgAudio.playbackRate = 1.5
bgAudio.loop = true
bgAudio.volume = 0.2
bgAudio.pause()

gunShot.setAttribute('src', require('file-loader!../../public/audio/gunShot.mp3'))
gunShot.volume = 0.5

const gunBang = async () => {
  try {
    const result = await gunShot.play()
    return result
  }
  catch (error) {
    throw new Error(error)
  }
}

let controls
let camera
let scene
let renderer
let geometry
let material
let mesh
let time = Date.now()
let sphereShape
let sphereBody
let world
let physicsMaterial
let walls = []
let balls = []
let ballMeshes = []
let boxes = []
let boxMeshes = []
let onRenderFcts = []
let webcamBoxes = []
let webcamMeshes = []
let objHidden = false


export default {
  PAUSE_SCREEN: pauseScreenDOMNode,
  INSTRUCTIONS: instructionsDOMNode,
  CONTROLS: controls,
  CAMERA: camera,
  SCENE: scene,
  RENDERER: renderer,
  GEOMETRY: geometry,
  MATERIAL: material,
  MESH: mesh,
  TIME: time,
  SPHERE_SHAPE: sphereShape,
  SPHERE_BODY: sphereBody,
  WORLD: world,
  PHYSICS_MATERIAL: physicsMaterial,
  WALLS_ARRAY: walls,
  BULLETS_ARRAY: balls,
  BULLETS_MESH_ARRAY: ballMeshes,
  CRATES_ARRAY: boxes,
  CRATES_MESH_ARRAY: boxMeshes,
  DOM_BODY_NODE: documentBody,
  DOM_HAS_POINTER_LOCK: havePointerLock,
  TIME_DISPLACEMENT: timeDisplacement,
  RENDER_FACTS: onRenderFcts,
  BG_MUSIC: bgAudio,
  MATCH_START_SOUND: matchStart,
  GUN_SHOT_SOUND: gunShot,
  GUN_BANG_SOUND: () => gunBang(),
  WEBCAM_BOXES: webcamBoxes,
  WEBCAM_MESHES: webcamMeshes,
  IS_HIDDEN: objHidden
}
