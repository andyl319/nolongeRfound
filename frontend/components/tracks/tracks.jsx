import React from 'react';
import TrackItem from './track_item';
import { Link } from 'react-router';

class Tracks extends React.Component {

  constructor(props){
    super(props);

    this.handlePlay = this.handlePlay.bind(this);
  }

  componentDidMount(){
    this.props.requestAllTracks();
  }

  handlePlay(e){
    e.preventDefault();
    let playlist = $.map(this.props.tracks, (value, idx)=>{
      return [value];
    });

    let track = playlist[parseInt(e.currentTarget.dataset.idx)];
    this.props.playTrack({track, playlist: playlist, idx: parseInt(e.currentTarget.dataset.idx)});
  }

  formatSongs(tracks){
    let formattedSongs;
    if(tracks !== undefined){
      formattedSongs = tracks.map((track, idx) => <TrackItem key={`track${track.id}`} track={track} idx={idx} playTrack={this.handlePlay}/>);
    }

    return formattedSongs;
  }

  render(){
    let tracks = $.map(this.props.tracks, (value, idx)=>{
      return [value];
    });

    return (
      <div className="all-tracks-container">
        <div className="all-tracks-items-container">
          {this.formatSongs(tracks)}
        </div>
      </div>
    );
  }
}

export default Tracks;
