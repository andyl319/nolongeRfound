import React from 'react';
import { Link } from 'react-router';

const AlbumItem = ({album, handleAlbumClick, router}) => {
  return (
    <Link to={`/albums/${album.id}`} className="album-item">
      <img src={album.cover_art} className="cover-art" />
      <div className="album-title">{album.title}</div>
    </Link>
  );
};

export default AlbumItem;
