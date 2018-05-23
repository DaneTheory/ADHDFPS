import CONFIG from '../Config'
import { Shoot } from '../Actions'
// import { CreateMuzzleFlash } from '../Objects'


const onClickScriptsExecution = async () => {
  try {
    const shot = await Shoot()
    // await CreateMuzzleFlash()
    return shot
  }
  catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

const OnClickEventHandler = (e) => !CONFIG.controls.enabled ? null : onClickScriptsExecution()


export default OnClickEventHandler
