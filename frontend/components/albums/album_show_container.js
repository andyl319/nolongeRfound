import { connect } from 'react-redux';
import AlbumShow from './album_show';
import {requestAlbum} from '../../actions/album_actions';
import {playTrack} from '../../actions/player_actions';

const mapStateToProps = (state) => ({
  album: state.album
});

const mapDispatchToProps = dispatch => ({
  requestAlbum: id => dispatch(requestAlbum(id)),
  playTrack: (track) => dispatch(playTrack(track))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumShow);
