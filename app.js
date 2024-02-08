import { songs } from "./songs.js";
let isPlaying = false;
const audio = document.querySelector("audio");
const audioPlayer = document.querySelector(".audio-player");
const playingSong = document.querySelector(".playing");

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

const tracks = document.querySelectorAll(".visible-s-track");
const trackImage = document.querySelector(".songImage");
const previousSongs = document.querySelectorAll(".change-song-btn:nth-of-type(1)");
const nextSongs = document.querySelectorAll(".change-song-btn:nth-of-type(2)");

playButtons.forEach((playButton) => {
  playButton.addEventListener("click", (e) => playMusic(e));
});

// function changeToPreviousSong(e, audio, songIndex,playButtons, tracks) {
//   console.log(e.target.id);
//   let index = e.target.id - 1;
//   let preIndex = parseInt(index);
//   let newSongIndex = songIndex - 1;
//   if (newSongIndex != preIndex) {
//     audio.setAttribute("src", arrayOfSongs[newSongIndex]);
//     audio.pause();
//     setPausedTrackStyling(songIndex, , playButtons, tracks);
//   } else if (newSongIndex === preIndex) {
//     audio.setAttribute("src", arrayOfSongs[newSongIndex]);
//     audio.play();
//     setTrackStyling(songIndex, , playButtons, tracks);
//   }
// }

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

  trackImage.setAttribute("src", songs[songIndex].imgSrc);
  console.log(e.target.id);

  audio.setAttribute("src", songs[songIndex].song);
  audio.play();
  isPlaying ? audio.pause() : audio.play();

  audio.onplay = function () {
    isPlaying = true;
    setTrackStyling(songIndex, playButtons, tracks);
  };

  audio.onpause = function () {
    isPlaying = false;
    playButtons[songIndex].innerText = "play_circle";
    //   btnv.innerHTML = "play_circle";
    setPausedTrackStyling(songIndex);
  };
}
