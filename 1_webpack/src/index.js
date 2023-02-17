require('./assets/scss/index.scss');

const $appImg = document.getElementById('app__img');
const $appList = document.getElementById('app__list');
const $volumeRange = document.getElementById('volume__range');

const DATA = [
  {
    name: 'sun',
    img: require('./assets/images/sun.jpg'),
    audio: new Audio(require('./assets/audios/sun.mp3'))
  },
  {
    name: 'rain',
    img: require('./assets/images/rain.jpg'),
    audio: new Audio(require('./assets/audios/rain.mp3'))
  },
  {
    name: 'cloud',
    img: require('./assets/images/cloud.jpg'),
    audio: new Audio(require('./assets/audios/cloud.mp3'))
  }
];

let activeAudio = null;

$volumeRange.addEventListener('input', (event) => {
  if (activeAudio) {
    activeAudio.volume = event.target.value;
  }
});

$appList.addEventListener('click', (event) => {
  const $activeItem = event.target.closest('.list__item');

  if (!$activeItem) return;

  const activeData = DATA.find(record => record.name === $activeItem.dataset.name);

  // bg
  $appImg.src = activeData.img;
  
  // audio
  // icon
  const parent = $activeItem.closest('.app__list');

  for (let child of parent.children) {
    if ($activeItem.dataset.name !== child.dataset.name) {
      child.classList.remove('list__item--active');
    }
  }

  $activeItem.classList.toggle('list__item--active');

  // play / pause
  for (let dataItem of DATA) {
    dataItem.audio.pause();
  }

  activeAudio = activeData.audio;
  $activeItem.classList.contains('list__item--active') && activeAudio.play();
});
