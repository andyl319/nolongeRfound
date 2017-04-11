import React from 'react';
import { Link } from 'react-router';

const AlbumShowTrackItem = ({track, idx, playTrack, router}) => {
  let feature = track.features;
  return (
    <div onClick={playTrack} className="album-show-track-item" data-id={`${track.id}`} data-idx={idx}>
      <div className="album-show-track-title">{track.title}</div>
      <div className="album-show-track-ft">{feature}</div>
    </div>
  );
};

export default AlbumShowTrackItem;
