import { useEffect, useRef } from "react";
import { destroyPlayer } from "../youtube.js";

export default function RickRoll() {
  const playerRef = useRef(null);

  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Add the "no-scroll" class to the body element
    document.body.classList.add("no-scroll");

    return () => {
      destroyPlayer();

      // Remove the "no-scroll" class from the body element
      document.body.classList.remove("no-scroll");
    };
  }, []);

  useEffect(() => {
    if (window.YT && playerRef.current) {
      new window.YT.Player(playerRef.current, {
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
    }
  }, [playerRef]);

  function onPlayerReady(event) {
    event.target.playVideo();
  }

  return (
    <div className="rickroll">
      <div id="player" ref={playerRef}></div>
    </div>
  );
}