import {RECEIVE_TRACK} from '../actions/track_actions';

import merge from 'lodash/merge';

const TrackShowReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TRACK:
      return merge({}, action.track);
    default:
      return state;
  }
};

export default TrackShowReducer;
