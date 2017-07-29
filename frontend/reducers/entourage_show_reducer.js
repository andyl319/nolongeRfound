import {RECEIVE_ENTOURAGE} from '../actions/entourage_actions';

import merge from 'lodash/merge';

const EntourageShowReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ENTOURAGE:
      return merge({}, action.entourage);
    default:
      return state;
  }
};

export default EntourageShowReducer;
