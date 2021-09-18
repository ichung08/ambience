import React, { useState, useEffect } from "react";

//Maps songs from playlist, or embeds a spotify playlist

function Playlist({ Mood }) {
  const [playlist, setPlaylist] = useState({
    happy: (
      <iframe
        title="happy playlist"
        src="https://open.spotify.com/embed/playlist/5x4vTYH7dIZ2A4tviBajlk"
        width="100%"
        height="380"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    ),
    neutral: (
      <iframe
        title="neutral playlist"
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DXdIpacQDPDV5"
        width="100%"
        height="380"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    ),
  });

  return (
    <div>
      <h3>This is a h3</h3>
      <h4>Your mood is: {Mood} </h4>
      <p>This is a paragraph tag</p>?
    </div>
  );
}

export default Playlist;
