import React from 'react';
import LinkedIn from './LinkedIn.jsx';
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
          <Link to='/LinkedIn'>
            <Button
              variant='secondary'
              onClick={() => {
                console.log('LinkedIn');
              }}
            >
              LinkedIn
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
          <Link to='/GlassDoor'>
            <Button
              variant='secondary'
              onClick={() => {
                console.log('GlassDoor');
              }}
            >
              GlassDoor
            </Button>
          </Link>
        </div>
        <div id='searchResults'>
          <div id='results' bg='dark'>
            <Switch>
              <Route exact path='/LinkedIn'>
                <LinkedIn />
              </Route>
              <Route path='/Indeed'>
                <Indeed />
              </Route>
              <Route path='/GitHub'>
                <GitHub />
              </Route>
              <Route path='/GlassDoor'>
                <GlassDoor />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Content;
