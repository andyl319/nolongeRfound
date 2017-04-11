import * as APIUtil from '../util/album_api_util';
export const RECEIVE_ALL_ALBUMS = 'RECEIVE_ALL_ALBUMS';
export const REQUEST_ALL_ALBUMS = 'REQUEST_ALL_ALBUMS';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const REQUEST_ALBUM = 'REQUEST_ALBUM';


export const receiveAllAlbums = (albums) => ({
  type: RECEIVE_ALL_ALBUMS,
  albums
});

export const requestAllAlbums = () => dispatch => (
  APIUtil.fetchAllAlbums()
    .then(albums => dispatch(receiveAllAlbums(albums))
  )
);

export const receiveAlbum = (album) => ({
  type: RECEIVE_ALBUM,
  album
});

export const requestAlbum = id => dispatch => (
  APIUtil.fetchAlbum(id)
    .then(album => dispatch(receiveAlbum(album))
  )
);
