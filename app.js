import { songs } from "./songs.js";

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
const previousSongs = document.querySelectorAll(".change-song-btn:nth-of-type(1)");
const nextSongs = document.querySelectorAll(".change-song-btn:nth-of-type(2)");

playButtons.forEach((playButton) => {
  playButton.addEventListener("click", (e) => playMusic(e));
});

// function changeToPreviousSong(e, currentSong, songIndex, singleTracks, playButtons, tracks) {
//   console.log(e.target.id);
//   let index = e.target.id - 1;
//   let preIndex = parseInt(index);
//   let newSongIndex = songIndex - 1;
//   if (newSongIndex != preIndex) {
//     currentSong.setAttribute("src", arrayOfSongs[newSongIndex]);
//     currentSong.pause();
//     setPausedTrackStyling(songIndex, singleTracks, playButtons, tracks);
//   } else if (newSongIndex === preIndex) {
//     currentSong.setAttribute("src", arrayOfSongs[newSongIndex]);
//     currentSong.play();
//     setTrackStyling(songIndex, singleTracks, playButtons, tracks);
//   }
// }

 function onSongChange(e, currentSong, singleTracks, playButtons, tracks, songIndex) {
   if (currentSong != e.target) {
    currentSong.pause();
    setPausedTrackStyling(songIndex, singleTracks, playButtons, tracks);
   } else if (currentSong === e.target) {
     currentSong.play();
     setTrackStyling(songIndex, singleTracks, playButtons, tracks);
   } else {
     currentSong.pause();
  }
}
// function styleWhenSongIsPaused(e, song) {
// console.log("music is paused")
// }
// function setTrackStyling(songIndex, singleTracks, playButtons, tracks) {
//   singleTracks.forEach((singleTrack) => {
//     singleTrack.style.display = "none";
//   });
//   singleTracks[songIndex].style.display = "block";
//   playButtons.forEach((playButton) => {
//     playButton.innerText = "play_circle";
//     playButton.classList.remove("highlightAudioIcon");
//   });
//   tracks.forEach((track) => {
//     track.classList.remove("highlight-s-track");
//   });
// }

 function setPausedTrackStyling(songIndex, singleTracks, playButtons, tracks) {
   singleTracks.forEach((singleTrack) => {
     singleTrack.style.display = "none";
   });
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

  console.log(e.target.id);
  let song = songs[songIndex].song;
  if (audio.getAttribute("src" === song)) {
    audio.pause();
  } else {
    audio.setAttribute("src", songs[songIndex].song);
    audio.play();
  }

}
