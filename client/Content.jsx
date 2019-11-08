import React from 'react';
import GitHub from './GitHub.jsx';
import AuthenticJobs from './AuthenticJobs.jsx';
import Codesmith from './Codesmith.jsx';
import Favorites from './Favorites.jsx';
import { Button } from 'react-bootstrap';
import { MemoryRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Content = () => {
  return (
    <Router>
      <div id='content' className='bg-dark'>
        <div id='routeHolder'>
          <Link to='/'>
            <Button
              variant='secondary'
              onClick={() => {
                console.log('GitHub');
              }}
            >
              GitHub
            </Button>
          </Link>
          <Link to='/AuthenticJobs'>
            <Button
              variant='secondary'
              onClick={() => {
                console.log('Authentic Jobs');
              }}
            >
              Authentic Jobs
            </Button>
          </Link>
          <Link to='/Codesmith'>
            <Button
              variant='secondary'
              onClick={() => {
                console.log('Codesmith');
              }}
            >
              Codesmith
            </Button>
          </Link>
          <Link to='/Favorites'>
            <Button variant='secondary' onClick={() => {}}>
              Favorites
            </Button>
          </Link>
        </div>
        <div id='searchResults'>
          <div id='results' bg='dark'>
            <Switch>
              <Route exact path='/'>
                <GitHub />
              </Route>
              <Route path='/AuthenticJobs'>
                <AuthenticJobs />
              </Route>
              <Route path='/Codesmith'>
                <Codesmith />
              </Route>
              <Route path='/Favorites'>
                <Favorites />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Content;
