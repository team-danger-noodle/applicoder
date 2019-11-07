import React from 'react';
import USAJobs from './USAJobs.jsx';
import Indeed from './Indeed.jsx';
import GitHub from './GitHub.jsx';
import GlassDoor from './GlassDoor.jsx';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Content = () => {
  return (
    <Router>
      <div id='content' className='bg-dark'>
        <div id='routeHolder'>
          <Link to='/USAJobs'>
            <Button
              variant='secondary'
              onClick={() => {
                console.log('USAJobs');
              }}
            >
              USAJobs
            </Button>
          </Link>
          <Link to='/Indeed'>
            <Button
              variant='secondary'
              onClick={() => {
                console.log('Indeed');
              }}
            >
              Indeed
            </Button>
          </Link>
          <Link to='/GitHub'>
            <Button
              variant='secondary'
              onClick={() => {
                console.log('GitHub');
              }}
            >
              GitHub
            </Button>
          </Link>
          <Link to='/Favorites'>
            <Button
              variant='secondary'
              onClick={() => {
                console.log('GlassDoor');
              }}
            >
              Favorites
            </Button>
          </Link>
        </div>
        <div id='searchResults'>
          <div id='results' bg='dark'>
            <Switch>
              <Route exact path='/USAJobs'>
                <USAJobs />
              </Route>
              <Route path='/Indeed'>
                <Indeed />
              </Route>
              <Route path='/GitHub'>
                <GitHub />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Content;
