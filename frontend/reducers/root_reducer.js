import {combineReducers} from 'redux';
import AlbumReducer from './album_reducer';
import TrackReducer from './track_reducer';
import AlbumShowReducer from './album_show_reducer';
import TrackShowReducer from './track_show_reducer';

const RootReducer = combineReducers({
  albums: AlbumReducer,
  tracks: TrackReducer,
  album: AlbumShowReducer,
  track: TrackShowReducer
});


export default RootReducer;
