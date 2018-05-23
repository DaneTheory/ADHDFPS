import CONFIG from '../../Config'


const UserShootDirectionHandler = (targetVector) => {
  const projector = new THREE.Projector()
  let vec = targetVector
  let rayTracer
  targetVector.set(0, 0, 1)
  projector.unprojectVector(vec, CONFIG.CAMERA)
  rayTracer = new THREE.Ray(CONFIG.SPHERE_BODY.position, vec.sub(CONFIG.SPHERE_BODY.position).normalize())
  targetVector.copy(rayTracer.direction)
}


export default UserShootDirectionHandler
