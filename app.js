let isPlaying = false;
let isPlayingOne = false;
let isPlayingSecond = false;
let isPlayingThird = false;
let isPlayingFourth = false;
let audio = document.getElementById("rush");
let soundImg = document.getElementById("sound_playing");

if (isPlaying) {
  soundImg = soundImg.classList.toggle("showImage");
}

function play(audio) {
  let btn = document.getElementById("icon_text");
  let songPlay = document.querySelector(".song-play p");
  let btnv = document.getElementById("icon_text_visible");

  let track = document.querySelector("s-track");
  audio = document.getElementById("rush");
  audio.play();

  isPlaying ? audio.pause() : audio.play();

  audio.onplaying = function () {
    isPlaying = true;
    btnv.innerHTML = "pause_circle";
    songPlay.innerHTML = "Ayra Starr-Rush : Is Playing";
    btn.innerHTML = "pause_circle";
  };
  audio.onpause = function () {
    isPlaying = false;
    btnv.innerHTML = "play_circle";
    songPlay.innerHTML = "Ayra Starr-Rush : Paused";
    btn.innerHTML = "play_circle";
  };
}
function playFirst(audio1) {
  let btn1 = document.getElementById("icon_text_first");
  let songPlay = document.querySelector(".song-play p");
  let btnv = document.getElementById("icon_text_visible-o");

  audio1 = document.getElementById("people");

  audio1.play();

  isPlayingOne ? audio1.pause() : audio1.play();

  audio1.onplaying = function () {
    isPlayingOne = true;
    btnv.innerHTML = "pause_circle";
    songPlay.innerHTML = "Libianca, Ayra Starr, Omah Lay-People : Is Playing";
    btn1.innerHTML = "pause_circle";
  };
  audio1.onpause = function () {
    isPlayingOne = false;
    btnv.innerHTML = "play_circle";
    songPlay.innerHTML = "Libianca, Ayra Starr, Omah Lay-People : Paused";
    btn1.innerHTML = "play_circle";
  };
}

function playSecond(audio2) {
  let btn2 = document.getElementById("icon_text_second");
  let btnv = document.getElementById("icon_text_visible-s");
  let songPlay = document.querySelector(".song-play p");
  audio2 = document.getElementById("calm");

  audio2.play();

  isPlayingSecond ? audio2.pause() : audio2.play();

  audio2.onplaying = function () {
    isPlayingSecond = true;
    btnv.innerHTML = "pause_circle";
    songPlay.innerHTML = "Rema-Calm Down : Is Playing";
    btn2.innerHTML = "pause_circle";
  };
  audio2.onpause = function () {
    isPlayingSecond = false;
    btnv.innerHTML = "play_circle";
    songPlay.innerHTML = "Rema-Calm Down : Paused";
    btn2.innerHTML = "play_circle";
  };
}
function playThird(audio3) {
  let btn3 = document.getElementById("icon_text_third");
  let btnv = document.getElementById("icon_text_visible-t");
  let songPlay = document.querySelector(".song-play p");
  audio3 = document.getElementById("formyhand");

  audio3.play();

  isPlayingThird ? audio3.pause() : audio3.play();

  audio3.onplaying = function () {
    isPlayingThird = true;
    btnv.innerHTML = "pause_circle";
    songPlay.innerHTML = "Burna Boy, Ed Sheeran-For my hand : Is Playing";
    btn3.innerHTML = "pause_circle";
  };
  audio3.onpause = function () {
    isPlayingThird = false;
    btnv.innerHTML = "play_circle";
    songPlay.innerHTML = "Burna Boy, Ed Sheeran-For my hand : Paused";
    btn3.innerHTML = "play_circle";
  };
}

function playFourth(audio4) {
  let btn4 = document.getElementById("icon_text_fourth");
  let songPlay = document.querySelector(".song-play p");
  let btnv = document.getElementById("icon_text_visible-f");
  audio4 = document.getElementById("playboy");

  audio4.play();

  isPlayingFourth ? audio4.pause() : audio4.play();

  audio4.onplaying = function () {
    isPlayingFourth = true;
    btnv.innerHTML = "pause_circle";
    songPlay.innerHTML = "Fireboy DML- Playboy : Is Playing";
    btn4.innerHTML = "pause_circle";
  };
  audio4.onpause = function () {
    isPlayingFourth = false;
    btnv.innerHTML = "play_circle";
    songPlay.innerHTML = "Fireboy DML- Playboy : Paused";
    btn4.innerHTML = "play_circle";
  };
}
