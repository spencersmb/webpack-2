import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Home from './components/Home';
import ArtistMain from './components/artists/ArtistMain';
import ArtistDetail from './components/artists/ArtistDetail';
import ArtistCreate from './components/artists/ArtistCreate';
import ArtistEdit from './components/artists/ArtistEdit';

//route structure converted into an object we can use
const componentRoutes = {
  
  //<Route path="/" component={Home}>
  component: Home,
  path: '/',
  indexRoute: { component: ArtistMain }
  
};

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Home}>
        <IndexRoute component={ArtistMain} />
        <Route path="artists/new" component={ArtistCreate} />
        <Route path="artists/:id" component={ArtistDetail} />
        <Route path="artists/:id/edit" component={ArtistEdit} />
      </Route>
    </Router>
  );
};

export default Routes;
