import React from 'react';
import AlbumShowTrackItem from './album_show_track_item';
import { Link } from 'react-router';

class AlbumShow extends React.Component {

  constructor(props){
    super(props);

  }

  componentDidMount(){
    this.props.requestAlbum(parseInt(this.props.params.albumId));
  }

  formatSongs(tracks){
    let formattedSongs;
    if(tracks !== undefined){
      formattedSongs = tracks.map(track => <AlbumShowTrackItem key={`track${track.id}`} track={track} />);
    }

    return formattedSongs;
  }

  render(){
    let album = this.props.album;

    return (
      <div className="album-show-container">
        <div className="album-show-info-container">
          <div className="album-show-title">{album.title}</div>
          <img src={album.cover_art} className="album-show-cover-art" />
        </div>
        <div className="album-tracks-container">
          {this.formatSongs(album.tracks)}
        </div>
      </div>
    );
  }
}

export default AlbumShow;
