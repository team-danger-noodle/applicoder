import React from 'react';
import { StoreContextProvider } from './Store.jsx';
import LandingPage from './LandingPage.jsx'
import './assets/styles/normalize.css';
import './assets/styles/styles.scss';

const App = () => {
  
  return (
    <StoreContextProvider>
      <LandingPage/>
    </StoreContextProvider>
  )
}

export default App;
