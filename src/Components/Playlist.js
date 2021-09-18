import React, { useState, useEffect } from "react";
//Maps songs from playlist

function Playlist({ Mood }) {
  const [playlist, setPlaylist] = useState({
    neutral: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/62d2QvWAVt4?autoplay=1&amp;playlist=62d2QvWAVt4&amp;modestbranding=1&amp;loop=1&amp;iv_load_policy=3&amp;rel=0&amp;showinfo=0&amp;"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer"
        allowfullscreen=""
      ></iframe>
    ),
  });

  return (
    <div>
      <br />
      <br />
      <p>
        <b>Your mood is:</b> {Mood}
      </p>
      {/* {playlist[Mood]} */}
    </div>
  );
}

export default Playlist;
