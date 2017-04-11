import {RECEIVE_ALL_ALBUMS} from '../actions/album_actions';

import merge from 'lodash/merge';

const AlbumReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_ALBUMS:
      return merge({}, action.albums);
    default:
      return state;
  }
};

export default AlbumReducer;
