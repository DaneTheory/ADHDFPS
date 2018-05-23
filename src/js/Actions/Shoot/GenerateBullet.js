import CONFIG from '../../Config'

const GenerateBullet = () => {
  const bulletObj = new CANNON.Sphere(0.1)
  const bulletBody = new CANNON.Body({ mass: 1 })
  const bulletGeometry = new THREE.SphereGeometry(bulletObj.radius, 100, 100)
  const bulletMesh = new THREE.Mesh(bulletGeometry, CONFIG.MATERIAL)
  bulletBody.addShape(bulletObj)
  CONFIG.WORLD.add(bulletBody)
  CONFIG.SCENE.add(bulletMesh)
  bulletMesh.castShadow = true
  bulletMesh.receiveShadow = true
  return {
    sphere: bulletObj,
    body: bulletBody,
    mesh: bulletMesh
  }
}


export default GenerateBullet
