import { useEffect } from "react"

export default function ExistingInventory() {
  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    let player;
    window.onYouTubeIframeAPIReady = function () {
      player = new window.YT.Player("player", {
        height: "100%",
        width: "100",
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

    return () => {
      if (player) {
        player.destroy();
      }
    };
  }, []);

  return (
    <div className="existing-inventory">
      <div id="player"></div>
    </div>
  );
}