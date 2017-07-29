import {combineReducers} from 'redux';
import AlbumReducer from './album_reducer';
import TrackReducer from './track_reducer';
import AlbumShowReducer from './album_show_reducer';
import TrackShowReducer from './track_show_reducer';
import PlayerReducer from './player_reducer';
import EntourageShowReducer from './entourage_show_reducer';

const RootReducer = combineReducers({
  albums: AlbumReducer,
  tracks: TrackReducer,
  album: AlbumShowReducer,
  player: PlayerReducer,
  track: TrackShowReducer,
  entourage: EntourageShowReducer
});


export default RootReducer;
