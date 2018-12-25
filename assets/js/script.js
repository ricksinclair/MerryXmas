var playPauseAnim = anime({
  targets: "div.interest",
  translateY: [{ value: 100, duration: 1200 }, { value: 0, duration: 800 }],
  rotate: {
    value: "2turn",
    easing: "easeInOutSine"
  },
  loop: true,

  delay: (el, i, l) => {
    return i * 1000;
  }
});

var colors = anime({
  targets: "div.title",
  translateX: 250,
  color: [{ value: "rgb(255, 0, 0)" }, { value: "hsl(100, 60%, 60%)" }],
  easing: "linear",
  direction: "alternate",
  duration: 2000,
  loop: true
});

var audioElement = document.createElement("audio");
audioElement.setAttribute(
  "src",
  "assets/audio/Nat King Cole - The Christmas Song 1961.MP3"
);
$(".play").on("click", () => {
  playPauseAnim.play();
  colors.play();
  audioElement.play();
}); //  Manually play
$(".pause").on("click", () => {
  playPauseAnim.pause();
  colors.pause();
  audioElement.pause();
}); //  Manually pause
