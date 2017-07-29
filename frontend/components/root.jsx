import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './app';
import React from 'react';
import {Provider} from 'react-redux';
import AlbumContainer from './albums/album_container';
import AlbumShowContainer from './albums/album_show_container';
import TracksContainer from './tracks/tracks_container';
import EntourageShowContainer from './entourage/entourage_show_container';

const Root = ({store}) => {


  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App } >
          <Route path="/albums" component={ AlbumContainer } />
          <Route path="/albums/:albumId" component={ AlbumShowContainer }/>
          <Route path="/all-tracks" component={ TracksContainer } />
          <Route path="/entourage/:entourageId" component={ EntourageShowContainer }/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
