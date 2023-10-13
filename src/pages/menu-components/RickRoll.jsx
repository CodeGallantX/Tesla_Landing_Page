import { useEffect, useRef } from "react";
import { destroyPlayer } from "../../components/youtube.js";

import rickRollVideo from "/videos/rick-roll.mp4";

import { useLoaderData } from "react-router-dom";

export function loader(playerRef) {
  return (
    <div className="rickroll">
      <video src={rickRollVideo} autoPlay loop></video>
    </div>
  )
} 

export default function RickRoll() {
  const rickroll = useLoaderData()
  return (
    <>
      {rickroll}
    </>
  );
}