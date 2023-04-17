const audio1 = new Audio('guitar.mp3');
const audio2 = new Audio('home.mp3');
const audio3 = new Audio('aarhus.mp3');
const audio4 = new Audio('strand.mp3');

const section1 = document.querySelector('#section1');
const section2 = document.querySelector('#section2');
const section3 = document.querySelector('#section3');
const section4 = document.querySelector('#section4');

let playingAudio = null;

function playAudio(audio) {
  if (playingAudio) {
    playingAudio.pause();

  }
  audio.play();
  playingAudio = audio;
}

function handleScroll() {
  const y = window.pageYOffset;

  if (y >= section1.offsetTop && y < section2.offsetTop) {
    playAudio(audio1);
  } else if (y >= section2.offsetTop && y < section3.offsetTop) {
    playAudio(audio2);
  } else if (y >= section3.offsetTop) {
    playAudio(audio3);
  } else {
    if (playingAudio) {
      playingAudio.pause();
      playingAudio.currentTime = 0;
      playingAudio = null;
    }
  }
}

window.addEventListener('scroll', handleScroll);
