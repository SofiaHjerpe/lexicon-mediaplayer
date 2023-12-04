let isPlaying = false;
let isPlayingOne = false;
let isPlayingSecond = false;
let isPlayingThird = false;
let isPlayingFourth = false;

function play(audio) {
  let btn = document.getElementById("icon_text");
  audio = document.getElementById("rush");

  audio.play();

  isPlaying ? audio.pause() : audio.play();

  audio.onplaying = function () {
    isPlaying = true;
    btn.innerHTML = "pause_circle";
  };
  audio.onpause = function () {
    isPlaying = false;
    btn.innerHTML = "play_circle";
  };
}
function playFirst(audio1) {
  let btn1 = document.getElementById("icon_text_first");
  audio1 = document.getElementById("people");

  audio1.play();

  isPlayingOne ? audio1.pause() : audio1.play();

  audio1.onplaying = function () {
    isPlayingOne = true;
    btn1.innerHTML = "pause_circle";
  };
  audio1.onpause = function () {
    isPlayingOne = false;
    btn1.innerHTML = "play_circle";
  };
}

function playSecond(audio2) {
  let btn2 = document.getElementById("icon_text_second");
  audio2 = document.getElementById("calm");

  audio2.play();

  isPlayingSecond ? audio2.pause() : audio2.play();

  audio2.onplaying = function () {
    isPlayingSecond = true;
    btn2.innerHTML = "pause_circle";
  };
  audio2.onpause = function () {
    isPlayingSecond = false;
    btn2.innerHTML = "play_circle";
  };
}
function playThird(audio3) {
  let btn3 = document.getElementById("icon_text_third");
  audio3 = document.getElementById("formyhand");

  audio3.play();

  isPlayingThird ? audio3.pause() : audio3.play();

  audio3.onplaying = function () {
    isPlayingThird = true;
    btn3.innerHTML = "pause_circle";
  };
  audio3.onpause = function () {
    isPlayingThird = false;
    btn3.innerHTML = "play_circle";
  };
}

function playFourth(audio4) {
  let btn4 = document.getElementById("icon_text_fourth");
  audio4 = document.getElementById("playboy");

  audio4.play();

  isPlayingFourth ? audio4.pause() : audio4.play();

  audio4.onplaying = function () {
    isPlayingFourth = true;
    btn4.innerHTML = "pause_circle";
  };
  audio4.onpause = function () {
    isPlayingFourth = false;
    btn4.innerHTML = "play_circle";
  };
}


