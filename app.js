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
const loop = document.getElementById("rewind");

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
  songTitle.innerHTML = title;
  artist.innerHTML = songArtist;

  trackImage.setAttribute("src", songs[songIndex].imgSrc);
  console.log(e.target.id);

  audio.setAttribute("src", songs[songIndex].song);
  audio.play();
  isPlaying ? audio.pause() : audio.play();
  button.innerText = "pause_circle";

  audio.onplay = function () {
    isPlaying = true;
    setTrackStyling(songIndex, tracks, playButtons);
    button.innerText = "pause_circle";
  };

  audio.onpause = function () {
    isPlaying = false;
    playButtons[songIndex].innerText = "play_circle";
    //   btnv.innerHTML = "play_circle";
    setPausedTrackStyling(tracks, playButtons);
    button.innerText = "play_circle";
  };
  changeToPreviousSong(songIndex, title, songArtist);
  changeToNextSong(songIndex, title, songArtist);
  loopSong();
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

function loopSong() {
  loop.addEventListener("click", (e) => {
    audio.loop = true;
    console.log("active");
    e.target.style.color = "#fff";
  });
}
