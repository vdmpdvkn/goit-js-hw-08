import vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeEl = document.querySelector('#vimeo-player');
const player = new vimeo(iframeEl);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(setTimeStamp, 1000));

let parsedData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
player.setCurrentTime(parsedData);

function setTimeStamp(data) {
  localStorage.setItem(LOCALSTORAGE_KEY, data.seconds);
}

window.addEventListener('keydown', evt => {
  if (evt.code === 'Space') {
    player.pause(); // works after you'll start video
  }
});
