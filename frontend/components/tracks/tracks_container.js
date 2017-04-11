import { connect } from 'react-redux';
import Tracks from './tracks';
import {requestAllTracks} from '../../actions/track_actions';
import {playTrack} from '../../actions/player_actions';

const mapStateToProps = (state) => ({
  tracks: state.tracks
});

const mapDispatchToProps = dispatch => ({
  requestAllTracks: () => dispatch(requestAllTracks()),
  playTrack: (track) => dispatch(playTrack(track))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tracks);
