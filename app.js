import { songs } from "./songs.js";
const audio = document.querySelector("audio");
const audioPlayer = document.querySelector(".audio-player");
const tracks = document.querySelectorAll(".visible-s-track");
const trackImage = document.querySelector(".songImage");
const songTitle = document.querySelector(".song-info p:nth-of-type(1)");
const artist = document.querySelector(".song-info p:nth-of-type(2)");
const prevBtn = document.querySelector(" .right-button");
const nextBtn = document.querySelector(".left-button");
const button = document.querySelector(".icon_text");
const timeUpdate = document.querySelector(".inner-time-line");
const progressContainer = document.querySelector(".outer-time-line");
const loop = document.getElementById("rewind");
const shuffle = document.getElementById("shuffle");
let songIndex = 0;
let currentSong = songs[0].song;
let title = songs[0].title;
let songArtist = songs[0].artist;
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

playButtons.forEach((playButton) => {
  playButton.addEventListener("click", (e) => playMusic(e));
});

function setTrackStyling(playBtnElement) {
  playButtons.forEach((playButton) => {
    playButton.innerText = "play_circle";
    playButton.classList.remove("highlightAudioIcon");
    playButton.closest(".visible-s-track").classList.remove("highlight-s-track");
  });
  playBtnElement.innerText = "pause_circle";
  playBtnElement.classList.add("highlightAudioIcon");
  playBtnElement.closest(".visible-s-track").classList.add("highlight-s-track");
}

function setPausedTrackStyling(playBtnElement) {
  playBtnElement.innerText = "play_circle";
  playBtnElement.classList.remove("highlightAudioIcon");
  playBtnElement.closest(".visible-s-track").classList.remove("highlight-s-track");
}
function playSong(currentSong, playBtn) {
  audio.getAttribute("src") !== currentSong && audio.setAttribute("src", currentSong);

  setTrackStyling(playBtn);
  audio.play();
}
function pauseSong(playBtn) {
  audio.pause();
  setPausedTrackStyling(playBtn);
}

function playMusic(e) {
  const playBtn = e.target;
  let index = playBtn.id;
  let songIndex = parseInt(index);
  currentSong = songs[songIndex].song;
  title = songs[songIndex].title;
  songArtist = songs[songIndex].artist;
  songTitle.innerHTML = title;
  artist.innerHTML = songArtist;

  trackImage.setAttribute("src", songs[songIndex].imgSrc);

  button.innerText = "pause_circle";
  if (audio.getAttribute("src") === currentSong) {
    audio.paused ? playSong(currentSong, playBtn) : pauseSong(playBtn);
  } else {
    audio.setAttribute("src", currentSong);
    playSong(currentSong, playBtn);
  }
}

audio.addEventListener("timeupdate", (e) => updateProgress(e));
progressContainer.addEventListener("click", setProgress);

prevBtn.addEventListener("click", () => {
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

nextBtn.addEventListener("click", () => {
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

function updateProgress(e) {
  console.log(e.target.currentTime);
  const percent = (e.target.currentTime / e.target.duration) * 100;
  timeUpdate.style.width = percent + "%";
}

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}

loop.addEventListener("click", (e) => {
  e.target.style.color = "#fff";
  audio.addEventListener("ended", function () {
    if (songIndex === -1) {
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
  });
});

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
    let shuffleIndex = Math.floor(Math.random() * 10);
    e.target.setAttribute("src", songs[shuffleIndex].song);
    e.target.play();
    button.innerHTML = "pause_circle";
    title = songs[shuffleIndex].title;
    songArtist = songs[shuffleIndex].artist;
    trackImage.setAttribute("src", songs[shuffleIndex].imgSrc);
    songTitle.innerHTML = title;
    artist.innerHTML = songArtist;
  });
});
