import React from "react";

import "./music.css";

const Song = ({ song }) => {
  return (
    <p>
      {song.title} by {song.artist}
    </p>
  );
};

export default Song;
