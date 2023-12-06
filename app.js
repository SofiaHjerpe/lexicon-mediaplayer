let isPlaying = false;
let isPlayingOne = false;
let isPlayingSecond = false;
let isPlayingThird = false;
let playMusic = false;
let isPlayingFourth = false;
let audio = document.getElementById("rush");
let audio1 = document.getElementById("people");
let soundImg = document.querySelector(".hideImage");

function play(audio, playMusic) {
  let btn = document.getElementById("icon_text");
  let songPlay = document.querySelector(".song-play > .material-icons");
  let songPlayText = document.querySelector(".song-play >  p");

  let btnv = document.getElementById("icon_text_visible");

  let backgroundIm = document.querySelector("playlist");
  audio = document.getElementById("rush");
  soundImg = document.querySelector(".hideImage");

  audio.play();

  isPlaying ? audio.pause() : audio.play();

  audio.onplaying = function () {
    isPlaying = true;
    playMusic = true;
    btnv.innerHTML = "pause_circle";
    songPlay.innerHTML =
      "add_circle &nbsp	&nbsp	&nbsp &nbsp	&nbsp	&nbsp	&nbsp &nbsp	&nbsp	&nbsp &nbsp	&nbsp &nbsp	&nbsp &nbsp	&nbsp &nbsp	&nbsp	&nbsp favorite";
    songPlayText.innerHTML = "Ayra Starr-Rush : Is Playing";

    btn.innerHTML =
      "repeat 	&nbsp	&nbsp	&nbsp	&nbsp   keyboard_double_arrow_left  pause_circle  keyboard_double_arrow_right 	&nbsp	&nbsp	&nbsp	&nbsp shuffle";
    soundImg.classList.remove("hideImage");
    soundImg.classList.add("song_image");

    backgroundIm.classList.add("playlist");
  };
  audio.onpause = function () {
    isPlaying = false;
    btnv.innerHTML = "play_circle";
    songPlay.innerHTML =
      "add_circle &nbsp	&nbsp	&nbsp &nbsp	&nbsp	&nbsp	&nbsp &nbsp	&nbsp	&nbsp &nbsp	&nbsp &nbsp	&nbsp &nbsp	&nbsp &nbsp	&nbsp	&nbsp favorite";
    songPlayText.innerHTML = "Ayra Starr-Rush : Is Paused";
    btn.innerHTML =
      "repeat 	&nbsp	&nbsp	&nbsp	&nbsp   keyboard_double_arrow_left  play_circle  keyboard_double_arrow_right 	&nbsp	&nbsp	&nbsp	&nbsp shuffle";
    soundImg.classList.remove("song_image");
    soundImg.classList.add("hideImage");
  };
}

function playFirst(audio1, playMusic) {
  let btn1 = document.getElementById("icon_text_first");
  let songPlay = document.querySelector(".song-play1 > .material-icons");
  let songPlayText = document.querySelector(".song-play1 >  p");
  let btnv = document.getElementById("icon_text_visible-o");
  audio1 = document.getElementById("people");
  soundImg = document.querySelector(".hideImage1");

  audio1.play();

  isPlayingOne ? audio1.pause() : audio1.play();

  audio1.onplaying = function () {
    isPlayingOne = true;
    btnv.innerHTML = "pause_circle";
    songPlay.innerHTML =
      "add_circle &nbsp	&nbsp	&nbsp &nbsp	&nbsp	&nbsp	&nbsp &nbsp	&nbsp	&nbsp &nbsp	&nbsp &nbsp	&nbsp &nbsp	&nbsp &nbsp	&nbsp	&nbsp favorite";
    songPlayText.innerHTML =
      "Libianca, Ayra Starr, Omah Lay-People : Is Playing";
    btn1.innerHTML =
      "repeat 	&nbsp	&nbsp	&nbsp	&nbsp   keyboard_double_arrow_left  pause_circle  keyboard_double_arrow_right 	&nbsp	&nbsp	&nbsp	&nbsp shuffle";
    soundImg.classList.remove("hideImage1");
    soundImg.classList.add("song_image1");
  };
  audio1.onpause = function () {
    isPlayingOne = false;
    btnv.innerHTML = "play_circle";
    songPlay.innerHTML =
      "add_circle &nbsp	&nbsp	&nbsp &nbsp	&nbsp	&nbsp	&nbsp &nbsp	&nbsp	&nbsp &nbsp	&nbsp &nbsp	&nbsp &nbsp	&nbsp &nbsp	&nbsp	&nbsp favorite";
    songPlayText.innerHTML = "Libianca, Ayra Starr, Omah Lay-People : Paused";
    btn1.innerHTML =
      "repeat 	&nbsp	&nbsp	&nbsp	&nbsp   keyboard_double_arrow_left  play_circle  keyboard_double_arrow_right 	&nbsp	&nbsp	&nbsp	&nbsp shuffle";
    soundImg.classList.remove("song_image1");
    soundImg.classList.add("hideImage1");
  };
}

function playSecond(audio2, playMusic) {
  let btn2 = document.getElementById("icon_text_second");
  let btnv = document.getElementById("icon_text_visible-s");
  let songPlay = document.querySelector(".song-play2 > .material-icons");
  let songPlayText = document.querySelector(".song-play2 >  p");
  audio2 = document.getElementById("calm");
  soundImg = document.querySelector(".hideImage2");

  audio2.play();

  isPlayingSecond ? audio2.pause() : audio2.play();

  audio2.onplaying = function () {
    isPlayingSecond = true;
    btnv.innerHTML = "pause_circle";
    songPlay.innerHTML =
      "add_circle &nbsp	&nbsp	&nbsp &nbsp	&nbsp	&nbsp	&nbsp &nbsp	&nbsp	&nbsp &nbsp	&nbsp &nbsp	&nbsp &nbsp	&nbsp &nbsp	&nbsp	&nbsp favorite";
    songPlayText.innerHTML = "Rema-Calm Down : IsPlaying";
    btn2.innerHTML =
      "repeat 	&nbsp	&nbsp	&nbsp	&nbsp   keyboard_double_arrow_left  pause_circle  keyboard_double_arrow_right 	&nbsp	&nbsp	&nbsp	&nbsp shuffle";
    soundImg.classList.remove("hideImage2");
    soundImg.classList.add("song_image2");
  };
  audio2.onpause = function () {
    isPlayingSecond = false;
    btnv.innerHTML = "play_circle";
    songPlay.innerHTML =
      "add_circle &nbsp	&nbsp	&nbsp &nbsp	&nbsp	&nbsp	&nbsp &nbsp	&nbsp	&nbsp &nbsp	&nbsp &nbsp	&nbsp &nbsp	&nbsp &nbsp	&nbsp	&nbsp favorite";
    songPlayText.innerHTML = "Rema-Calm Down : Paused";
    btn2.innerHTML =
      "repeat 	&nbsp	&nbsp	&nbsp	&nbsp   keyboard_double_arrow_left  play_circle  keyboard_double_arrow_right 	&nbsp	&nbsp	&nbsp	&nbsp shuffle";
    soundImg.classList.remove("song_image2");
    soundImg.classList.add("hideImage2");
  };
}
function playThird(audio3, playMusic) {
  let btn3 = document.getElementById("icon_text_third");
  let btnv = document.getElementById("icon_text_visible-t");
  let songPlay = document.querySelector(".song-play3 > .material-icons");
  let songPlayText = document.querySelector(".song-play3 >  p");
  audio3 = document.getElementById("formyhand");
  soundImg = document.querySelector(".hideImage3");
  audio3.play();

  isPlayingThird ? audio3.pause() : audio3.play();

  audio3.onplaying = function () {
    isPlayingThird = true;
    btnv.innerHTML = "pause_circle";
    songPlay.innerHTML =
      "add_circle &nbsp	&nbsp	&nbsp &nbsp	&nbsp	&nbsp	&nbsp &nbsp	&nbsp	&nbsp &nbsp	&nbsp &nbsp	&nbsp &nbsp	&nbsp &nbsp	&nbsp	&nbsp favorite";
    songPlayText.innerHTML = "Burna Boy, Ed Sheeran-For my hand : Is Playing";
    btn3.innerHTML =
      "repeat 	&nbsp	&nbsp	&nbsp	&nbsp   keyboard_double_arrow_left  pause_circle  keyboard_double_arrow_right 	&nbsp	&nbsp	&nbsp	&nbsp shuffle";
    soundImg.classList.remove("hideImage3");
    soundImg.classList.add("song_image3");
  };
  audio3.onpause = function () {
    isPlayingThird = false;
    btnv.innerHTML = "play_circle";
    songPlay.innerHTML =
      "add_circle &nbsp	&nbsp	&nbsp &nbsp	&nbsp	&nbsp	&nbsp &nbsp	&nbsp	&nbsp &nbsp	&nbsp &nbsp	&nbsp &nbsp	&nbsp &nbsp	&nbsp	&nbsp favorite";
    songPlayText.innerHTML = "Burna Boy, Ed Sheeran-For my hand : Paused";
    btn3.innerHTML =
      "repeat 	&nbsp	&nbsp	&nbsp	&nbsp   keyboard_double_arrow_left  play_circle  keyboard_double_arrow_right 	&nbsp	&nbsp	&nbsp	&nbsp shuffle";
    soundImg.classList.remove("song_image3");
    soundImg.classList.add("hideImage3");
  };
}

function playFourth(audio4, playMusic) {
  let btn4 = document.getElementById("icon_text_fourth");
  let songPlay = document.querySelector(".song-play4 > .material-icons");
  let songPlayText = document.querySelector(".song-play4 >  p");
  let btnv = document.getElementById("icon_text_visible-f");
  audio4 = document.getElementById("playboy");
  soundImg = document.querySelector(".hideImage4");

  audio4.play();

  isPlayingFourth ? audio4.pause() : audio4.play();

  audio4.onplaying = function () {
    isPlayingFourth = true;
    btnv.innerHTML = "pause_circle";
    songPlay.innerHTML =
      "add_circle &nbsp	&nbsp	&nbsp &nbsp	&nbsp	&nbsp	&nbsp &nbsp	&nbsp	&nbsp &nbsp	&nbsp &nbsp	&nbsp &nbsp	&nbsp &nbsp	&nbsp	&nbsp favorite";
    songPlayText.innerHTML = "Fireboy DML- Playboy : Is Playing";
    btn4.innerHTML =
      "repeat 	&nbsp	&nbsp	&nbsp	&nbsp   keyboard_double_arrow_left  pause_circle  keyboard_double_arrow_right 	&nbsp	&nbsp	&nbsp	&nbsp shuffle";
    soundImg.classList.remove("hideImage4");
    soundImg.classList.add("song_image4");
  };
  audio4.onpause = function () {
    isPlayingFourth = false;
    btnv.innerHTML = "play_circle";
    songPlay.innerHTML =
      "add_circle &nbsp	&nbsp	&nbsp &nbsp	&nbsp	&nbsp	&nbsp &nbsp	&nbsp	&nbsp &nbsp	&nbsp &nbsp	&nbsp &nbsp	&nbsp &nbsp	&nbsp	&nbsp favorite";
    songPlayText.innerHTML = "Fireboy DML- Playboy : Paused";
    btn4.innerHTML =
      "repeat 	&nbsp	&nbsp	&nbsp	&nbsp   keyboard_double_arrow_left  play_circle  keyboard_double_arrow_right 	&nbsp	&nbsp	&nbsp	&nbsp shuffle";
    soundImg.classList.remove("song_image4");
    soundImg.classList.add("hideImage4");
  };
}
