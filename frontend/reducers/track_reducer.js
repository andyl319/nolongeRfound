import {RECEIVE_ALL_TRACKS} from '../actions/track_actions';

import merge from 'lodash/merge';

const TrackReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_TRACKS:
      return merge({}, action.tracks);
    default:
      return state;
  }
};

export default TrackReducer;
