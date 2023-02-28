require('./assets/scss/index.scss');

const $appImg = document.getElementById('app__img') as HTMLImageElement;
const $appList = document.getElementById('app__list') as HTMLUListElement;
const $volumeRange = document.getElementById('volume__range') as HTMLInputElement;

const DATA : { name : string, img : string, audio : HTMLAudioElement }[] = [
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

let activeAudio : HTMLAudioElement = new Audio();

$volumeRange.addEventListener('input', (event: Event) => {
  if (activeAudio) {
    activeAudio.volume = parseFloat((event.target as HTMLInputElement).value);
  }
});

$appList.addEventListener('click', (event: Event) => {
  const $activeItem = (event.target as HTMLElement).closest('.list__item') as HTMLLIElement;

  if (!$activeItem) return;

  const activeData: { name : string, img : string, audio : HTMLAudioElement } = DATA.find((record) => record.name === $activeItem.dataset.name);

  // bg
  $appImg.src = activeData.img;

  // audio
  // icon
  const parent = $activeItem.closest('.app__list') as HTMLUListElement;

  [...parent.children].forEach((child : HTMLElement) => {
    if ($activeItem.dataset.name !== child.dataset.name) {
      child.classList.remove('list__item--active');
    }
  });

  $activeItem.classList.toggle('list__item--active');

  // play / pause
  DATA.forEach((dataItem) => dataItem.audio.pause());

  activeAudio = activeData.audio;
  if ($activeItem.classList.contains('list__item--active')) {
    activeAudio.play();
  }
});
