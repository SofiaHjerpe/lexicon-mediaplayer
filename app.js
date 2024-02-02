let isPlaying = false;
let audio = document.getElementById("dancing_flame");
let soundImg = document.querySelector(".hideImage");

function play(audio, playMusic) {
  let btn = document.getElementById("icon_text");

  let btnv = document.getElementById("icon_text_visible");

  let backgroundIm = document.querySelector("playlist");
  audio = document.getElementById("dancing_flame");
  soundImg = document.querySelector(".hideImage");

  audio.play();

  isPlaying ? audio.pause() : audio.play();

  audio.onplaying = function () {
    isPlaying = true;
    playMusic = true;
    btnv.innerHTML = "pause_circle";

    btn.innerHTML =
      "pause_circle";
    soundImg.classList.remove("hideImage");
    soundImg.classList.add("song_image");

  };
  audio.onpause = function () {
    isPlaying = false;
    btnv.innerHTML = "play_circle";
    btn.innerHTML =
      "play_circle";
    soundImg.classList.remove("song_image");
    soundImg.classList.add("hideImage");
  };
}


