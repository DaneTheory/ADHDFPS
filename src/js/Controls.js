import CONFIG from './Config'


const InstanstiateControls = () => {
  CONFIG.controls = new PointerLockControls(CONFIG.CAMERA , CONFIG.SPHERE_BODY)
  CONFIG.SCENE.add(CONFIG.controls.getObject())
}


export default InstanstiateControls
