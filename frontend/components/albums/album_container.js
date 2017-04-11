import { connect } from 'react-redux';
import Album from './album';
import {requestAllAlbums} from '../../actions/album_actions';

const mapStateToProps = (state) => ({
  albums: state.albums
});

const mapDispatchToProps = dispatch => ({
  requestAllAlbums: () => dispatch(requestAllAlbums())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Album);
