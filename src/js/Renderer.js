import CONFIG from './Config'


const InstantiateRenderer = () => {
  CONFIG.RENDERER = new THREE.WebGLRenderer()
  CONFIG.RENDERER.shadowMapEnabled = true
  CONFIG.RENDERER.shadowMapSoft = true
  CONFIG.RENDERER.setSize(window.innerWidth, window.innerHeight)
  CONFIG.RENDERER.setClearColor(CONFIG.SCENE.fog.color, 1)
  return document.body.appendChild(CONFIG.RENDERER.domElement)
}


export default InstantiateRenderer
