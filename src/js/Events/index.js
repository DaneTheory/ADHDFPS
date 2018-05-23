import CONFIG from '../Config'
import OnClickEventHandler from './OnClick'
import OnWindowResizeEventHandler from './OnScreenResize'


const DispatchEvents = () => {
  window.addEventListener(`resize`, OnWindowResizeEventHandler, false)
  window.addEventListener(`click`, OnClickEventHandler)
}


export default DispatchEvents
