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
const audioPlayer = document.querySelector(".audio-player");

const arrayOfSongs = [
  dancing_flame,
  baila,
  cristo,
  coffee,
  evidence,
  givemetime,
  between,
  played,
  round,
  trueM,
];
const trackListArray = [
  {
    imgSrc: "dancingFlameImg.jpg",
    title: "Dancing flame",
    artist: "christo4us",
    index: 0,
  },
  {
    imgSrc: "bailaImg.jpg",
    title: "Baila",
    artist: "Alfonso Lugo",
    index: 1,
  },
  {
    imgSrc: "coffeeImg.jpg",
    title: "Evening coffee",
    artist: "Oleg O Kachanko",
    index: 2,
  },
  {
    imgSrc: "CristoImg.jpg",
    title: "Es el cristo",
    artist: "Son by Four",
    index: 3,
  },
  {
    imgSrc: "evidenceImg.jpg",
    title: "Evidence song",
    artist: "The good Lawdz",
    index: 4,
  },
  {
    imgSrc: "givemetimeImg.jpg",
    title: "Give me time",
    artist: "The A.J Gatz project",
    index: 5,
  },
  {
    imgSrc: "InBetweenImg.jpg",
    title: "In between",
    artist: "Kinematic",
    index: 6,
  },
  {
    imgSrc: "PlayedImg.jpg",
    title: "Played",
    artist: "Niki J Crawford",
    index: 7,
  },
  {
    imgSrc: "PlayedImg.jpg",
    title: "Round and round",
    artist: "Niki J Crawford",
    index: 8,
  },
  {
    imgSrc: "TrueImg.jpg",
    title: "True Moment",
    artist: "The ARTISANS",
    index: 9,
  },
];
function createTrackListAsHtml(track) {
  return `<section>
                <img class="image" src="${track.imgSrc}" alt="img" />
                <div>
                  <p>${track.title}</p>
                  <p>${track.artist}</p>
                </div>
              </section>
              <button id="play-icon-visible">
                <i class="material-icons" id="icon_text_visible">
                  play_circle
                </i>
              </button>`;
}
const defaultTrackAsHtml = trackListArray.map((track) => {
  return createTrackListAsHtml(track);
});

console.log(defaultTrackAsHtml);
const htmlString = defaultTrackAsHtml.join("");
audioPlayer.innerHTML = htmlString;

let soundImg = document.querySelector(".hideImage");

// function play(audio, playMusic) {
//   let btn = document.getElementById("icon_text");

//   let btnv = document.getElementById("icon_text_visible");

//   let backgroundIm = document.querySelector("playlist");
//   audio = document.getElementById("dancing_flame");
//   soundImg = document.querySelector(".hideImage");

//   audio.play();

//   isPlaying ? audio.pause() : audio.play();

//   audio.onplaying = function () {
//     isPlaying = true;
//     playMusic = true;
//     btnv.innerHTML = "pause_circle";

//     btn.innerHTML =
//       "pause_circle";
//     soundImg.classList.remove("hideImage");
//     soundImg.classList.add("song_image");

//   };
//   audio.onpause = function () {
//     isPlaying = false;
//     btnv.innerHTML = "play_circle";
//     btn.innerHTML =
//       "play_circle";
//     soundImg.classList.remove("song_image");
//     soundImg.classList.add("hideImage");
//   };
// }
