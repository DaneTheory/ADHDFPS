import CONFIG from '../../Config'
import GenerateBullet from './GenerateBullet'
import UserShootDirectionHandler from './UserShootDirectionHandler'


const ShootActionHandler = () => {
  let mf = CONFIG.SCENE.getObjectByName(`muzzleFlash`, true)
  mf.material.rotation = 0.5 * Math.PI / 1.5 * Math.random()
  mf.visible = true
  CONFIG.GUN_BANG_SOUND()
  setTimeout(() => mf.visible = false , 100)
  let bullet = GenerateBullet()
  CONFIG.BULLETS_ARRAY.push(bullet.body)
  CONFIG.BULLETS_MESH_ARRAY.push(bullet.mesh)
  let bulletDirection = new THREE.Vector3()
  UserShootDirectionHandler(bulletDirection)
  let x = CONFIG.SPHERE_BODY.position.x
  let y = CONFIG.SPHERE_BODY.position.y
  let z = CONFIG.SPHERE_BODY.position.z
  bullet.body.velocity.set(bulletDirection.x * 100, bulletDirection.y * 100, bulletDirection.z * 100)
  x += bulletDirection.x * (CONFIG.SPHERE_SHAPE.radius * 0.9 + bullet.sphere.radius)
  y += bulletDirection.y * (CONFIG.SPHERE_SHAPE.radius * 0.9 + bullet.sphere.radius)
  z += bulletDirection.z * (CONFIG.SPHERE_SHAPE.radius * 0.9 + bullet.sphere.radius)
  bullet.body.position.set(x, y, z)
  bullet.mesh.position.set(x, y, z)
}


export default ShootActionHandler
