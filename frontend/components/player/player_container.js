import { connect } from 'react-redux';
import Player from './player';
import { playTrack, pauseTrack } from '../../actions/player_actions';
import { requestAllTracks } from '../../actions/track_actions';

const mapStateToProps = ({player}) => ({
  track: player.track,
  playing: player.playing,
  idx: player.idx,
  playlist: player.playlist
});

const mapDispatchToProps = dispatch => ({
  playTrack: (track) => dispatch(playTrack(track)),
  pauseTrack: () => dispatch(pauseTrack()),
  requestAllTracks: () => dispatch(requestAllTracks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
