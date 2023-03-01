import vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeEl = document.querySelector('#vimeo-player');
const player = new vimeo(iframeEl);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

setVideoTiming();

player.on('timeupdate', throttle(setTimeStamp, 1000));
player.on('play', onSpacePause);

function setTimeStamp(data) {
  localStorage.setItem(LOCALSTORAGE_KEY, data.seconds);
}
function onSpacePause() {
  window.addEventListener(evt => {
    if (evt.code === 'Space') {
      player.pause();
    }
  });
}
function setVideoTiming() {
  const parsedData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  if (parsedData) {
    player.setCurrentTime(parsedData);
  }
}
