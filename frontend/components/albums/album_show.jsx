import React from 'react';
import AlbumShowTrackItem from './album_show_track_item';
import { Link } from 'react-router';

class AlbumShow extends React.Component {

  constructor(props){
    super(props);

    this.handlePlay = this.handlePlay.bind(this);
  }

  componentDidMount(){
    this.props.requestAlbum(parseInt(this.props.params.albumId));
  }

  handlePlay(e){
    e.preventDefault();

    let track = this.props.album.tracks[parseInt(e.currentTarget.dataset.id)-1];
    this.props.playTrack({track, playlist: this.props.album.tracks, idx: parseInt(e.currentTarget.dataset.idx)});
  }

  formatSongs(tracks){
    let formattedSongs;
    if(tracks !== undefined){
      formattedSongs = tracks.map((track, idx) => <AlbumShowTrackItem key={`track${track.id}`} track={track} idx={idx} playTrack={this.handlePlay}/>);
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
