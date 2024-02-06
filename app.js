let isPlaying = false;
let dancing_flame = document.getElementById("dancing_flame");
let baila = document.getElementById("baila");
let cristo = document.getElementById("cristo");
let coffee = document.getElementById("coffee");
let evidence = document.getElementById("evidence");
let givemetime = document.getElementById("givemetime");
let between = document.getElementById("between");
let played = document.getElementById("played");
let round = document.getElementById("round");
let trueM = document.getElementById("true");
let soundImg = document.querySelector(".hideImage");

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
  dancing_flame,
  baila,
  coffee,
  cristo,
  evidence,
  givemetime,
  between,
  played,
  round,
  trueM,
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
  playButton.addEventListener("click", (e) => playMusic(e, singleTracks, arrayOfSongs));
});
function changeToPreviousSong(e) {
  console.log(e.target.id);
  let index = e.target.id - 1;
  let preIndex = parseInt(index);

  for (var i = 0; i < arrayOfSongs.length; i++) {
    if (i != preIndex) {
      arrayOfSongs[i].pause();
      playButtons[i].innerText = "play_circle";
      playButtons[i].classList.remove("highlightAudioIcon");
      tracks[i].classList.remove("highlight-s-track");
      isPlaying = false;
    } else if (i === preIndex) {
      arrayOfSongs[i].play();
      playButtons[i].innerText = "pause_circle";
      playButtons[i].classList.add("highlightAudioIcon");
      tracks[i].classList.add("highlight-s-track");
      isPlaying = true;
    }
  }
}

function changeToNextSong(e) {
  console.log(e.target.id);
  let index = e.target.id;
  let nextIndex = parseInt(index + 1);

  console.log(nextIndex);

  for (var i = 0; i < arrayOfSongs.length; i++) {
    if (i != nextIndex) {
      arrayOfSongs[i].pause();
      playButtons[i].innerText = "play_circle";
      playButtons[i].classList.remove("highlightAudioIcon");
      tracks[i].classList.remove("highlight-s-track");
      isPlaying = false;
    } else if (i === nextIndex) {
      arrayOfSongs[i].play();
      playButtons[i].innerText = "pause_circle";
      playButtons[i].classList.add("highlightAudioIcon");
      tracks[i].classList.add("highlight-s-track");
      isPlaying = true;
    }
  }
}
function styleWhenSongIsPlaying(e) {
  for (var i = 0; i < arrayOfSongs.length; i++) {
    if (arrayOfSongs[i] != e.target) {
      arrayOfSongs[i].pause();
      isPlaying = false;
      singleTracks[i].style.display = "none";
    } else if (arrayOfSongs[i] === e.target) {
      arrayOfSongs[i].play();
      isPlaying = true;
      singleTracks[i].style.display = "block";
    }
  }
}

function playMusic(e, singleTracks, arrayOfSongs) {
  e.preventDefault();
  let btn = document.getElementById("icon_text");

  let index = e.target.id;
  let songIndex = parseInt(index);

  console.log(e.target.id);
  let song = arrayOfSongs[songIndex];
  song.play();
  isPlaying ? song.pause() : song.play();

  song.onplay = function () {
    isPlaying = true;
    playButtons[songIndex].innerText = "pause_circle";
    playButtons[songIndex].classList.add("highlightAudioIcon");
    tracks[songIndex].classList.add("highlight-s-track");
  };
  song.onpause = function () {
    isPlaying = false;
    playButtons[songIndex].innerText = "play_circle";

    playButtons[songIndex].classList.remove("highlightAudioIcon");
    tracks[songIndex].classList.remove("highlight-s-track");
  };

  previousSongs.forEach((preSong) => {
    preSong.addEventListener("click", (e) => changeToPreviousSong(e));
  });
  nextSongs.forEach((nextSong) => {
    nextSong.addEventListener("click", (e) => changeToNextSong(e));
  });
  document.addEventListener("play", (e) => styleWhenSongIsPlaying(e), true);
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
