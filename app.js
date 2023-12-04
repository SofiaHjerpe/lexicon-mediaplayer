let isPlaying = false;
function play(audio) {
  audio = document.getElementById("rush");

  audio.play();

  isPlaying ? audio.pause() : audio.play();

  audio.onplaying = function () {
    isPlaying = true;
    document.getElementById("icon_text").innerHTML = "pause_circle";
  };
  audio.onpause = function () {
    isPlaying = false;
    document.getElementById("icon_text").innerHTML = "play_circle";
  };
}
