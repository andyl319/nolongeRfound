import React from 'react';
import { Link } from 'react-router';

const TrackItem = ({track, idx, playTrack, router}) => {
  let feature = track.features;

  return (
    <div onClick={playTrack} className="all-tracks-track-item" data-id={`${track.id}`} data-idx={idx}>
      <div className="all-tracks-album-title">{track.album.title}</div>
      <div className="all-tracks-track-title">{track.title}</div>
      <div className="all-tracks-track-ft">{feature}</div>
    </div>
  );
};

export default TrackItem;
