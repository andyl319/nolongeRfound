import React from 'react';
import AlbumItem from './album_item';
import { Link } from 'react-router';

class Album extends React.Component {

  constructor(props){
    super(props);

  }

  componentDidMount(){
    this.props.requestAllAlbums();
  }

  render(){
    let albums = $.map(this.props.albums, function(value, idx){
      return [value];
    });
    return (
      <div className="albums-container">
        <ul className="album-display-list">
          {albums.map(album => <AlbumItem key={`album${album.id}`} album={album} handleTeamClick={this.handleAlbumClick}/>)}
        </ul>
      </div>
    );
  }
}

export default Album;
