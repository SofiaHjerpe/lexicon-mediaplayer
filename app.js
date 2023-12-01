let playIconContainer = document.getElementById('#play-icon')


playIconContainer.addEventListener("click", () => {
  if (state === "play") {
    animation.playSegments([14, 27], true);
    state = "pause";
  } else {
    animation.playSegments([0, 14], true);
    state = "play";
  }
});
