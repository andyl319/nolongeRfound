import * as APIUtil from '../util/entourage_api_util';
export const RECEIVE_ALL_ENTOURAGE = 'RECEIVE_ALL_ENTOURAGE';
export const REQUEST_ALL_ENTOURAGE = 'REQUEST_ALL_ENTOURAGE';
export const RECEIVE_ENTOURAGE = 'RECEIVE_ENTOURAGE';
export const REQUEST_ENTOURAGE = 'REQUEST_ENTOURAGE';


export const receiveAllEntourage = (entourage) => ({
  type: RECEIVE_ALL_ENTOURAGE,
  entourage
});

export const requestAllEntourage = () => dispatch => (
  APIUtil.fetchAllEntourage()
    .then(entourage => dispatch(receiveAllEntourage(entourage))
  )
);

export const receiveEntourage = (entourage) => ({
  type: RECEIVE_ENTOURAGE,
  entourage
});

export const requestEntourage = id => dispatch => (
  APIUtil.fetchEntourage(id)
    .then(entourage => dispatch(receiveEntourage(entourage))
  )
);
