let player;

window.onYouTubeIframeAPIReady = function () {
  player = new window.YT.Player("player", {
    height: "100%",
    width: "100%",
    videoId: "dQw4w9WgXcQ",
    playerVars: {
      autoplay: 1,
    },
    events: {
      onReady: onPlayerReady,
    },
  });
};

function onPlayerReady(event) {
  event.target.playVideo();
}

export function destroyPlayer() {
  if (player) {
    player.destroy();
  }
}