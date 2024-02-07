let isPlaying = false;
let dancing_flame = document.getElementById("dancing_flame");
let soundImg = document.querySelector(".hideImage");
const currentSong = document.querySelector("audio");
const audioPlayer = document.querySelector(".audio-player");
const songTitles = document.querySelectorAll(".song-title");
const playingSong = document.querySelector(".playing");

const trackListArray = [
  {
    imgSrc: "dancingFlameImg.jpg",
    title: "Dancing flame",
    artist: "christo4us",
  },
  {
    imgSrc: "bailaImg.jpg",
    title: "Baila",
    artist: "Alfonso Lugo",
  },
  {
    imgSrc: "coffeeImg.jpg",
    title: "Evening coffee",
    artist: "Oleg O Kachanko",
  },
  {
    imgSrc: "CristoImg.jpg",
    title: "Es el cristo",
    artist: "Son by Four",
  },
  {
    imgSrc: "evidenceImg.jpg",
    title: "Evidence song",
    artist: "The good Lawdz",
  },
  {
    imgSrc: "givemetimeImg.jpg",
    title: "Give me time",
    artist: "The A.J Gatz project",
  },
  {
    imgSrc: "InBetweenImg.jpg",
    title: "In between",
    artist: "Kinematic",
  },
  {
    imgSrc: "PlayedImg.jpg",
    title: "Played",
    artist: "Niki J Crawford",
  },
  {
    imgSrc: "PlayedImg.jpg",
    title: "Round and round",
    artist: "Niki J Crawford",
  },
  {
    imgSrc: "TrueImg.jpg",
    title: "True Moment",
    artist: "The ARTISANS",
  },
];
const arrayOfSongs = [
  "music/dancing_flame.mp3",
  "music/Baila_-_Alfonso_Lugo.mp3",
  "music/Evening_coffee_-_Oleg_O._Kachanko.mp3",
  "music/Es_El_Cristo(version_salsa)_-_Son_By_Four_(2).mp3",
  "music/Evidence_Song_-_The_Good_Lawdz.mp3",
  "music/Give_Me_Time_-_The_A.J._Gatz_Project.mp3",
  "music/In_Between_-_Kinematic.mp3",
  "music/Played_-_Niki_J_Crawford.mp3",
  "music/Round_and_Round_-_Niki_J_Crawford.mp3",
  "music/True_Moment_-_The_ARTISANS.mp3",
];

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
function createSingleTrackAsHtml(singleTrack, index) {
  return `
  <section class="track">
              <div class="hideImage" src="${singleTrack.imgSrc}"></div>
              <!-- swaps with pause icon -->
              <div class="song-play">
                <div>
                  <i class="material-icons">add_circle_outline</i>
                </div>
                <div class="track-title">
                  <p class="upper-text">${singleTrack.title}</p>
                  <p class="lower-text">${singleTrack.artist}</p>
                </div>
                <div>
                  <i class="material-icons">favorite</i>
                </div>
              </div>
                 <span id="tracktime"></span>
            <article class="time-line-container">
                  <div class="outer-time-line">
                  <div class="inner-time-line"></div>
                </div>
                </article>
              </span>
              <div class="play-row">
                <div>
                <i class="material-icons"  id="rewind">repeat</i>
                </div>
                <div class="switch-controls">
                 <button class="change-song-btn">
                     <i class="material-icons previous" id="${index}">fast_rewind</i>
                 </button>
                 <button id="play-icon">
                     <i class="material-icons"  id="${index}" id="icon_text">play_circle</i>
                 </button>
                  <button class="change-song-btn">
                     <i class="material-icons next"  id="${index}">fast_rewind</i>
                </button>
              </div>
            <div>
          <i class="material-icons" id="shuffle">shuffle</i>
        </div>
      </div>
    </section>
    `;
}
const defaultSingleTrackAsHtml = trackListArray
  .map((singleTrack, index) => {
    return createSingleTrackAsHtml(singleTrack, index);
  })
  .join("");
const defaultTrackAsHtml = trackListArray
  .map((track, index) => {
    return createTrackListAsHtml(track, index);
  })
  .join("");

console.log(defaultTrackAsHtml);
audioPlayer.insertAdjacentHTML("beforeend", defaultTrackAsHtml);
playingSong.insertAdjacentHTML("beforeend", defaultSingleTrackAsHtml);
const playButtons = document.querySelectorAll(".icon-button .material-icons");
const tracks = document.querySelectorAll(".visible-s-track");
const singleTracks = document.querySelectorAll(".track");
const previousSongs = document.querySelectorAll(".change-song-btn:nth-of-type(1)");
const nextSongs = document.querySelectorAll(".change-song-btn:nth-of-type(2)");
singleTracks.forEach((singleTrack) => {
  singleTrack.style.display = "none";
});
playButtons.forEach((playButton) => {
  playButton.addEventListener("click", (e) => playMusic(e, arrayOfSongs));
});
function changeToPreviousSong(e, currentSong, songIndex, singleTracks, playButtons, tracks) {
  console.log(e.target.id);
  let index = e.target.id - 1;
  let preIndex = parseInt(index);
  let newSongIndex = songIndex - 1;
  if (newSongIndex != preIndex) {
    currentSong.setAttribute("src", arrayOfSongs[newSongIndex]);
    currentSong.pause();
    setPausedTrackStyling(songIndex, singleTracks, playButtons, tracks);
  } else if (newSongIndex === preIndex) {
    currentSong.setAttribute("src", arrayOfSongs[newSongIndex]);
    currentSong.play();
    setTrackStyling(songIndex, singleTracks, playButtons, tracks);
  }
}

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
function setTrackStyling(songIndex, singleTracks, playButtons, tracks) {
  singleTracks.forEach((singleTrack) => {
    singleTrack.style.display = "none";
  });
  singleTracks[songIndex].style.display = "block";
  playButtons.forEach((playButton) => {
    playButton.innerText = "play_circle";
    playButton.classList.remove("highlightAudioIcon");
  });
  tracks.forEach((track) => {
    track.classList.remove("highlight-s-track");
  });
}

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

function playMusic(e, arrayOfSongs) {
  let btn = document.getElementById("icon_text");

  let index = e.target.id;
  let songIndex = parseInt(index);

  console.log(e.target.id);

  currentSong.setAttribute("src", arrayOfSongs[songIndex]);
  currentSong.play();
  let playing = currentSong.play();
  if (playing) {
    currentSong.pause();
  } else {
    playing;
  }

  currentSong.onplay = function () {
    playing;
    playButtons[songIndex].innerText = "pause_circle";
    playButtons[songIndex].classList.add("highlightAudioIcon");
    tracks[songIndex].classList.add("highlight-s-track");
  };
  currentSong.onpause = function () {
    playButtons[songIndex].innerText = "play_circle";
    playButtons[songIndex].classList.remove("highlightAudioIcon");
    tracks[songIndex].classList.remove("highlight-s-track");
    setPausedTrackStyling(songIndex, singleTracks, playButtons, tracks);
  };

  previousSongs.forEach((preSong) => {
    preSong.addEventListener("click", (e) =>
      changeToPreviousSong(e, currentSong, songIndex, singleTracks, playButtons, tracks)
    );
  });
  nextSongs.forEach((nextSong) => {
    nextSong.addEventListener("click", (e) =>
      changeToNextSong(e, currentSong, songIndex, singleTracks, playButtons, tracks)
    );
  });
  document.addEventListener(
    "play",
    (e) => onSongChange(e, currentSong, singleTracks, playButtons, tracks, songIndex),
    true
  );
  document.addEventListener(
    "pause",
    (e) => onSongChange(e, currentSong, singleTracks, playButtons, tracks, songIndex),
    true
  );
}

//add timeupdate for song
//

// audio.addEventListener("timeupdate", function () {
//   const percent = (audio.currentTime / audio.duration) * 100;
//   progressBar.style.width = percent + "%";
// });
// //   btn.innerHTML = "pause_circle";
//   soundImg.classList.remove("hideImage");
//   soundImg.classList.add("song_image");

// i
// soundImg = document.querySelector(".hideImage");

// audio.play();

// isPlaying ? audio.pause() : audio.play();

//
// audio.onpause = function () {
//   isPlaying = false;
//   btnv.innerHTML = "play_circle";
//   btn.innerHTML = "play_circle";
//   soundImg.classList.remove("song_image");
//   soundImg.classList.add("hideImage");
// };
