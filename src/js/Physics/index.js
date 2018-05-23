import CONFIG from '../Config'
import PhysicsMechanics from './PhysicsMechanics'


const sphereMass = 15
const sphereRadius = 3
const sphereBodyParams = {
  mass: sphereMass
}
const groundPlaneBodyParams = {
  mass: 0
}

const PhysicsEngine = () => {
  PhysicsMechanics()
  // Create Sphere
  CONFIG.SPHERE_SHAPE = new CANNON.Sphere(sphereRadius)
  CONFIG.SPHERE_BODY = new CANNON.Body(sphereBodyParams)
  CONFIG.SPHERE_BODY.addShape(CONFIG.SPHERE_SHAPE)
  CONFIG.SPHERE_BODY.position.set(0, 15, 0)
  CONFIG.SPHERE_BODY.linearDamping = 0.9
  CONFIG.WORLD.add(CONFIG.SPHERE_BODY)
  // Create Ground
  const groundPlane = new CANNON.Plane()
  const groundBody = new CANNON.Body(groundPlaneBodyParams)
  groundBody.addShape(groundPlane)
  groundBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI/2)
  CONFIG.WORLD.add(groundBody)
}


export default PhysicsEngine
