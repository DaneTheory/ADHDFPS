import CONFIG from '../Config'



var playPromise = CONFIG.MATCH_START_SOUND.play();

// if (playPromise !== undefined) {
//   playPromise.then(_ => {
//     // Automatic playback started!
//     // Show playing UI.
//     console.log('NOT PAUSED');
//     onPauseDisabled()
//   })
//   .catch(error => {
//     // Auto-play was prevented
//     // Show paused UI.
//     console.log('IS PAUSED');
//     onPauseEnabled()
//   });
// }

const offPause = () => {
  console.log('NOT PAUSED');

}

const onPause = () => {
  console.log('IS PAUSED');

}

const onPauseEnabled = () => {
  CONFIG.controls.enabled = false
  CONFIG.PAUSE_SCREEN.style.display = `-webkit-box`
  CONFIG.PAUSE_SCREEN.style.display = `-moz-box`
  CONFIG.PAUSE_SCREEN.style.display = '`box`'
  CONFIG.INSTRUCTIONS.style.display = ``
  CONFIG.BG_MUSIC.playbackRate = 0.5
  CONFIG.BG_MUSIC.volume = 0.05
  CONFIG.BG_MUSIC.play()
}

const onPauseDisabled = () => {
  CONFIG.controls.enabled = true
  CONFIG.PAUSE_SCREEN.style.display = `none`
  CONFIG.BG_MUSIC.playbackRate = 1.5
  CONFIG.BG_MUSIC.volume = 0.25
  CONFIG.BG_MUSIC.play()





  // offPause()

  //   						// matchStart.setAttribute('autoplay', 'autoplay');
  //   							// $.get();
  //
  //   						// matchStart.play();
  //   						// matchStart.volume = 0.3;
  //
  //   						// bgAudio.setAttribute('src', 'audio/bgMusic.ogg');
  //   						// bgAudio.setAttribute('autoplay', 'autoplay');
  //   							// $.get();
  //
  //   						// bgAudio.play();
  //   						// bgAudio.volume = 0.2;
  //
  //   						// pauseAudio.setAttribute('src', 'audio/pauseSound.mp3');
  //   						//pauseAudio.setAttribute('autoplay', 'autoplay');
  //   							// $.get();
  //
  //   						// pauseAudio.play();
  //   						// pauseAudio.volume = 0.9;
}

const onPointerLockStateChangeHandler = () => {
  const onPointerLockChangeHandler = (e) => {
    // console.log(playPromise);
    // if (playPromise !== undefined) {
    //   playPromise.then(_ => {
    //     // Automatic playback started!
    //     // Show playing UI.
    //     console.log('NOT PAUSED');
    //     onPauseDisabled()
    //   })
    //   .catch(error => {
    //     // Auto-play was prevented
    //     // Show paused UI.
    //     console.log('IS PAUSED');
    //     onPauseEnabled()
    //   });
    // }
    document.pointerLockElement === CONFIG.DOM_BODY_NODE
    || document.mozPointerLockElement === CONFIG.DOM_BODY_NODE
    || document.webkitPointerLockElement === CONFIG.DOM_BODY_NODE ? onPauseDisabled() : onPauseEnabled()
  }


  const onPointerLockErrorHandler = (e) => CONFIG.INSTRUCTIONS.style.display = ''
  document.addEventListener(`pointerlockchange`, onPointerLockChangeHandler, false)
  document.addEventListener(`mozpointerlockchange`, onPointerLockChangeHandler, false)
  document.addEventListener(`webkitpointerlockchange`, onPointerLockChangeHandler, false)
  document.addEventListener(`pointerlockerror`, onPointerLockErrorHandler, false)
  document.addEventListener(`mozpointerlockerror`, onPointerLockErrorHandler, false)
  document.addEventListener(`webkitpointerlockerror`, onPointerLockErrorHandler, false)
}

const onFullScreenChangeHandler = (e) =>
  document.fullscreenElement === CONFIG.DOM_BODY_NODE
  || document.mozFullscreenElement === CONFIG.DOM_BODY_NODE
  || document.mozFullScreenElement === CONFIG.DOM_BODY_NODE ?
    () => {
      document.removeEventListener(`fullscreenchange`, onFullScreenChangeHandler)
      document.removeEventListener(`mozfullscreenchange`, onFullScreenChangeHandler)
      element.requestPointerLock()
    } : null

const onRequestFullScreenEvent = () => {
  document.addEventListener('fullscreenchange', onFullScreenChangeHandler, false)
  document.addEventListener('mozfullscreenchange', onFullScreenChangeHandler, false)
  CONFIG.DOM_BODY_NODE.requestFullscreen = CONFIG.DOM_BODY_NODE.requestFullscreen || CONFIG.DOM_BODY_NODE.mozRequestFullscreen || CONFIG.DOM_BODY_NODE.mozRequestFullScreen || CONFIG.DOM_BODY_NODE.webkitRequestFullscreen
  return CONFIG.DOM_BODY_NODE.requestFullscreen()
}

const onScreenStateChangeHandler = (e) => {
  onPointerLockStateChangeHandler()
  CONFIG.INSTRUCTIONS.style.display = `none`
  CONFIG.DOM_BODY_NODE.requestPointerLock = CONFIG.DOM_BODY_NODE.requestPointerLock || CONFIG.DOM_BODY_NODE.mozRequestPointerLock || CONFIG.DOM_BODY_NODE.webkitRequestPointerLock
  return /Firefox/i.test(navigator.userAgent) ? onRequestFullScreenEvent() : CONFIG.DOM_BODY_NODE.requestPointerLock()
}

const noPointerLockAPISupport = () => {
  const msg = `Your browser doesn't seem to support Pointer Lock API`
  return CONFIG.INSTRUCTIONS.innerHTML = msg
}

const hasPointerLockAPISupport = () => CONFIG.INSTRUCTIONS.addEventListener(`click`, onScreenStateChangeHandler, false)

const PointerLockAPISupportCheckHandler = async () => !CONFIG.DOM_HAS_POINTER_LOCK ? await noPointerLockAPISupport() : await hasPointerLockAPISupport()


export default PointerLockAPISupportCheckHandler
