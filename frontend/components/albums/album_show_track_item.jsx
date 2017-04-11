import React from 'react';
import { Link } from 'react-router';

const AlbumShowTrackItem = ({track, router}) => {
  let feature = track.features;
  return (
    <div className="album-show-track-item">
      <div className="album-show-track-title">{track.title}</div>
      <div className="album-show-track-ft">{feature}</div>
    </div>
  );
};

export default AlbumShowTrackItem;
