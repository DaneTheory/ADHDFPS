import CONFIG from './Config'


const Animate = () => {
  requestAnimationFrame(Animate)
  if(CONFIG.controls.enabled) {
    CONFIG.WORLD.step(CONFIG.TIME_DISPLACEMENT)
    for(let i = 0; i < CONFIG.BULLETS_ARRAY.length; i++) {
      CONFIG.BULLETS_MESH_ARRAY[i].position.copy(CONFIG.BULLETS_ARRAY[i].position)
      CONFIG.BULLETS_MESH_ARRAY[i].quaternion.copy(CONFIG.BULLETS_ARRAY[i].quaternion)
    }
    for(let i = 0; i < CONFIG.CRATES_ARRAY.length; i++) {
      CONFIG.CRATES_MESH_ARRAY[i].position.copy(CONFIG.CRATES_ARRAY[i].position)
      CONFIG.CRATES_MESH_ARRAY[i].quaternion.copy(CONFIG.CRATES_ARRAY[i].quaternion)
    }
    for(let i = 0; i < CONFIG.WEBCAM_BOXES.length; i++) {
        CONFIG.WEBCAM_MESHES[i].position.copy(CONFIG.WEBCAM_BOXES[i].position)
        CONFIG.WEBCAM_MESHES[i].quaternion.copy(CONFIG.WEBCAM_BOXES[i].quaternion)
    }
  }
  CONFIG.controls.update(Date.now() - CONFIG.TIME)
  CONFIG.RENDERER.render(CONFIG.SCENE, CONFIG.CAMERA)
  CONFIG.TIME = Date.now()

  let lastTimeMsec	= lastTimeMsec || CONFIG.TIME_DISPLACEMENT
  let deltaMsec	= Math.min(200, CONFIG.TIME - lastTimeMsec)
  lastTimeMsec = CONFIG.TIME
  CONFIG.RENDER_FACTS.forEach(onRenderFct => onRenderFct(deltaMsec/1000, CONFIG.TIME/1000))
}


export default Animate
