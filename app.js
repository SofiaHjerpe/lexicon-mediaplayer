import { songs } from "./songs.js";
let isPlaying = false;
const audio = document.querySelector("audio");
const audioPlayer = document.querySelector(".audio-player");
const tracks = document.querySelectorAll(".visible-s-track");
const trackImage = document.querySelector(".songImage");
const songTitle = document.querySelector(".song-info p:nth-of-type(1)");
const artist = document.querySelector(".song-info p:nth-of-type(2)");
const previousSong = document.querySelector(".left-button .material-icons");
const nextSong = document.querySelector(".right-button");
const button = document.querySelector(".icon_text");
const timeUpdate = document.querySelector(".inner-time-line");
const songTimeLine = document.querySelector(".outer-time-line");
const loop = document.getElementById("rewind");
const shuffle = document.getElementById("shuffle");

function createTrackListAsHtml(track, index) {
  return ` <section class="visible-s-track">
              <section>
                <img class="image" src="${track.imgSrc}" alt="img" />
                <div>
                  <p class="song-title">${track.title}</p>
                  <p>${track.artist}</p>
                </div>
              </section>
              <button class="icon-button" >
                <i class="material-icons paused" id="${index}" >
                  play_circle
                </i>
              </button>
            </section> `;
}

const defaultTrackAsHtml = songs
  .map((track, index) => {
    return createTrackListAsHtml(track, index);
  })
  .join("");

console.log(defaultTrackAsHtml);
audioPlayer.insertAdjacentHTML("beforeend", defaultTrackAsHtml);
const playButtons = document.querySelectorAll(".icon-button .material-icons");
const pauseButtons = document.querySelectorAll(".paused");

playButtons.forEach((playButton) => {
  playButton.addEventListener("click", (e) => playMusic(e));
});

function setTrackStyling(songIndex, tracks, playButtons) {
  playButtons.forEach((playButton) => {
    playButton.innerText = "play_circle";
    playButton.classList.remove("highlightAudioIcon");
  });
  tracks.forEach((track) => {
    track.classList.remove("highlight-s-track");
  });
  playButtons[songIndex].innerText = "pause_circle";
  playButtons[songIndex].classList.add("highlightAudioIcon");
  tracks[songIndex].classList.add("highlight-s-track");
}

function setPausedTrackStyling(tracks, playButtons) {
  playButtons.forEach((playButton) => {
    playButton.innerText = "play_circle";
    playButton.classList.remove("highlightAudioIcon");
  });

  tracks.forEach((track) => {
    track.classList.remove("highlight-s-track");
  });
}

function playMusic(e) {
  let index = e.target.id;
  let songIndex = parseInt(index);
  let title = songs[songIndex].title;
  let songArtist = songs[songIndex].artist;
  let song = songs[songIndex].song;

  audio.setAttribute("src", song);
  audio.play();
  isPlaying ? audio.pause() : audio.play();

  audio.onplay = function () {
    isPlaying = true;
    setTrackStyling(songIndex, tracks, playButtons);
    button.innerText = "pause_circle";
  };
  audio.onpause = function () {
    isPlaying = false;
    audio.pause();
    playButtons[songIndex].innerText = "play_circle";
    button.innerText = "play_circle";
    setPausedTrackStyling(tracks, playButtons);
  };

  songTitle.innerHTML = title;
  artist.innerHTML = songArtist;

  trackImage.setAttribute("src", songs[songIndex].imgSrc);
  console.log(e.target.id);

  button.innerText = "pause_circle";

  changeToPreviousSong(songIndex, title, songArtist);
  changeToNextSong(songIndex, title, songArtist);
  loopSong(songIndex, title, songArtist);
  shuffleSong(songIndex, title, songArtist);
  audioUpdateTimeLine();
}

function changeToPreviousSong(songIndex, title, songArtist) {
  nextSong.addEventListener("click", () => {
    songIndex = parseInt(songIndex + 1);
    songTitle.innerHTML = title;
    artist.innerHTML = songArtist;
    audio.setAttribute("src", songs[songIndex].song);
    console.log(songIndex);
    audio.play();
    title = songs[songIndex].title;
    songArtist = songs[songIndex].artist;
    songTitle.innerHTML = title;
    artist.innerHTML = songArtist;
    trackImage.setAttribute("src", songs[songIndex].imgSrc);
  });
}
function changeToNextSong(songIndex, title, songArtist) {
  previousSong.addEventListener("click", () => {
    songIndex = songIndex - 1;
    songTitle.innerHTML = title;
    artist.innerHTML = songArtist;
    audio.setAttribute("src", songs[songIndex].song);
    console.log(songIndex);
    audio.play();
    title = songs[songIndex].title;
    songArtist = songs[songIndex].artist;
    songTitle.innerHTML = title;
    artist.innerHTML = songArtist;
    trackImage.setAttribute("src", songs[songIndex].imgSrc);
  });
}

function audioUpdateTimeLine() {
  audio.addEventListener("timeupdate", () => {
    const percent = (audio.currentTime / audio.duration) * 100;
    timeUpdate.style.width = percent + "%";
    songTimeLine.addEventListener("click", function (e) {
      audio.currentTime = 30;
    });
  });
}

function loopSong(songIndex, title, songArtist) {
  loop.addEventListener("click", (e) => {
    e.target.style.color = "#fff";
    audio.addEventListener("ended", function () {
      if (songIndex === 9) {
        songIndex = 0;
      } else {
        songIndex = parseInt(songIndex + 1);
      }

      audio.setAttribute("src", songs[songIndex].song);
      audio.play();
      title = songs[songIndex].title;
      songArtist = songs[songIndex].artist;
      trackImage.setAttribute("src", songs[songIndex].imgSrc);
      songTitle.innerHTML = title;
      artist.innerHTML = songArtist;
      if (songIndex === 9) {
        songIndex = 0;
      }
    });
  });
}

function shuffleSong(songIndex, title, songArtist) {
  shuffle.addEventListener("click", (e) => {
    e.target.style.color = "#fff";
    songIndex = Math.floor(Math.random() * 10);
    audio.setAttribute("src", songs[songIndex].song);
    audio.play();
    title = songs[songIndex].title;
    songArtist = songs[songIndex].artist;
    trackImage.setAttribute("src", songs[songIndex].imgSrc);
    songTitle.innerHTML = title;
    artist.innerHTML = songArtist;
    console.log("hello! New audio");
    audio.addEventListener("ended", function (e) {
      e.target.setAttribute("src", songs[Math.floor(Math.random() * 10)].song);
      e.target.play();

      title = songs[songIndex].title;
      songArtist = songs[songIndex].artist;
      trackImage.setAttribute("src", songs[songIndex].imgSrc);
      songTitle.innerHTML = title;
      artist.innerHTML = songArtist;
    });
  });
}
