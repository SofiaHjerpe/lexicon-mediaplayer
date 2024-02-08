import { songs } from "./songs.js";
let isPlaying = false;
const audio = document.querySelector("audio");
const audioPlayer = document.querySelector(".audio-player");
const playingSong = document.querySelector(".playing");
const tracks = document.querySelectorAll(".visible-s-track");
const trackImage = document.querySelector(".songImage");
const button = document.getElementById("icon_text");
const songTitle = document.querySelector(".song-info p:nth-of-type(1)");
const artist = document.querySelector(".song-info p:nth-of-type(2)");
const previousSong = document.querySelector(".left-button .material-icons");
const nextSong = document.querySelector(".right");

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
                <i class="material-icons" id="${index}" >
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

function setTrackStyling(songIndex) {
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

function setPausedTrackStyling(songIndex) {
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
  songTitle.innerHTML = title;
  artist.innerHTML = songArtist;

  trackImage.setAttribute("src", songs[songIndex].imgSrc);
  console.log(e.target.id);

  audio.setAttribute("src", songs[songIndex].song);
  audio.play();
  isPlaying ? audio.pause() : audio.play();

  audio.onplay = function () {
    isPlaying = true;
    setTrackStyling(songIndex);
  };

  audio.onpause = function () {
    isPlaying = false;
    playButtons[songIndex].innerText = "play_circle";
    //   btnv.innerHTML = "play_circle";
    setPausedTrackStyling(songIndex, title, songArtist);
  };
  changeToPreviousSong(songIndex);
}
function changeToPreviousSong(songIndex, title, songArtist) {
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
