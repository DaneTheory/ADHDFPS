import CONFIG from '../Config'


export const GenerateLights = () => {
  const ambientLight = new THREE.AmbientLight(0x111111)
  ambientLight.shadowMapBias = 0
  ambientLight.shadowMapDarkness = 0
  ambientLight.shadowMapWidth = 512
  ambientLight.shadowMapHeight = 512
  const spotLight = new THREE.SpotLight(0xE8E8E8)
  CONFIG.SCENE.add(ambientLight)  // Ambient Light
  spotLight.position.set(50, 50, 250)
  spotLight.target.position.set(0, 0, 0)
  spotLight.castShadow = true
  spotLight.shadowCameraNear = 30
  spotLight.shadowCameraFar = 300
  spotLight.shadowCameraFov = 5
  spotLight.shadowMapBias = 0.1
  spotLight.shadowMapDarkness = 0.1
  spotLight.shadowMapWidth = 512
  spotLight.shadowMapHeight = 512
  // spotLight.shadowCameraVisible = true
  CONFIG.SCENE.add(spotLight)  // Spot Light
}

export const GenerateGroundPlane = () => {
  CONFIG.GEOMETRY = new THREE.PlaneGeometry(200, 200, 50, 50)
  CONFIG.GEOMETRY.applyMatrix(new THREE.Matrix4().makeRotationX( - Math.PI / 2 ))
  CONFIG.MATERIAL = new THREE.MeshLambertMaterial({ color: 0xdddddd })
  CONFIG.MESH = new THREE.Mesh(CONFIG.GEOMETRY, CONFIG.MATERIAL)
  CONFIG.MESH.castShadow = true
  CONFIG.MESH.receiveShadow = true
  CONFIG.SCENE.add(CONFIG.MESH)
}

export const GenerateBoxes = () => {
  const halfExtents = new CANNON.Vec3(1, 1, 1)
  const boxShape = new CANNON.Box(halfExtents)
  const boxGeometry = new THREE.BoxGeometry(halfExtents.x * 2, halfExtents.y * 2, halfExtents.z * 2)
    for(let i = 0; i < 7; i++) {
      let x = (Math.random() - 0.5) * 20
      let y = 1 + (Math.random()-0.5) * 1
      let z = (Math.random() - 0.5) * 20
      let boxBody = new CANNON.Body({ mass: 5 })
      boxBody.addShape(boxShape)
      var boxMesh = new THREE.Mesh(boxGeometry, CONFIG.MATERIAL)
      CONFIG.WORLD.add(boxBody)
      CONFIG.SCENE.add(boxMesh)
      boxBody.position.set(x,y,z)
      boxMesh.position.set(x,y,z)
      boxMesh.castShadow = true
      boxMesh.receiveShadow = true
      CONFIG.CRATES_ARRAY.push(boxBody)
      CONFIG.CRATES_MESH_ARRAY.push(boxMesh)
    }
}

export const GenerateSwingingPanels = () => {
  let size = 0.5
  let he = new CANNON.Vec3(size, size, size * 0.1)
  let boxShape = new CANNON.Box(he)
  let mass = 0
  let space = 0.1 * size
  let N = 5
  let last
  let boxGeometry = new THREE.BoxGeometry(he.x * 2, he.y * 2, he.z * 2)
  for(let i = 0; i < N; i++) {
    let boxbody = new CANNON.Body({ mass: mass })
    boxbody.addShape(boxShape)
    let boxMesh = new THREE.Mesh(boxGeometry, CONFIG.MATERIAL)
    boxbody.position.set(5,(N-i) * (size * 2 + 2 * space) + size * 2 + space, 0)
    boxbody.linearDamping = 0.01
    boxbody.angularDamping = 0.01
    // boxMesh.castShadow = true
    boxMesh.receiveShadow = true
    CONFIG.WORLD.add(boxbody)
    CONFIG.SCENE.add(boxMesh)
    CONFIG.CRATES_ARRAY.push(boxbody)
    CONFIG.CRATES_MESH_ARRAY.push(boxMesh)
    i != 0 ?
      (() => {
        let c1 = new CANNON.PointToPointConstraint(boxbody,new CANNON.Vec3(-size, size + space, 0), last, new CANNON.Vec3(-size, -size - space, 0))
        let c2 = new CANNON.PointToPointConstraint(boxbody,new CANNON.Vec3(size, size + space, 0), last, new CANNON.Vec3(size, -size - space, 0))
        CONFIG.WORLD.addConstraint(c1)
        CONFIG.WORLD.addConstraint(c2)
      })() : mass = 0.3
    last = boxbody
  }
}

export const CreateMuzzleFlash = () => {
  const mFmap = THREE.ImageUtils.loadTexture(require(`../../public/images/gun/muzzleFlash.png`))
  const mFMat = new THREE.SpriteMaterial({ map: mFmap, fog: true })
  const mF = new THREE.Sprite(mFMat)
  CONFIG.CAMERA.add(mF)
  let mFPercentX = 50
  let mFPercentY = 53
  let mFPositionX = (mFPercentX / 96) * 2 - 1
  let mFPositionY = (mFPercentY / 97.5) * 2 - 1
  mF.position.x = mFPositionX * CONFIG.CAMERA.aspect
  mF.position.y = mFPositionY
  mF.position.z = -1.9
  mF.scale.x = 4.9
  mF.scale.y = 2.9
  mF.name = `muzzleFlash`
  mF.visible = false
}
