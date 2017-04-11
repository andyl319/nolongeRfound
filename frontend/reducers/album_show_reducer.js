import {RECEIVE_ALBUM} from '../actions/album_actions';

import merge from 'lodash/merge';

const AlbumShowReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALBUM:
      return merge({}, action.album);
    default:
      return state;
  }
};

export default AlbumShowReducer;
