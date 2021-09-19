import React from "react";
import AudioPlayer from "./Music/AudioPlayer";
import playlist from "./Music/Playlist";
import Entry from "./Journal/Entry";
import Journal from "./Journal/Journal";
import AudioSpectrum from "react-audio-spectrum";

function MoodPage({ mood }) {
  return (
    <>
      <p className="subtitle">
        We've detected that you are <h4>{mood}</h4>
      </p>
      <AudioPlayer tracks={playlist} mood={mood} />
      <Entry mood={mood}/>
    </>
  );
}

export default MoodPage;
