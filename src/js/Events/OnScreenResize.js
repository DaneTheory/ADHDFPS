import CONFIG from '../Config'


const OnWindowResizeEventHandler = () => {
  CONFIG.CAMERA.aspect = window.innerWidth / window.innerHeight
  CONFIG.CAMERA.updateProjectionMatrix()
  CONFIG.RENDERER.setSize(window.innerWidth, window.innerHeight)
}


export default OnWindowResizeEventHandler
