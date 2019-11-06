import React, { useContext } from 'react';
import { StoreContext } from './Store.jsx';
import Login from './Login.jsx';
import Homepage from './Homepage.jsx';

const LandingPage = () => {
  const [Store, setStore] = useContext(StoreContext);

  return (
    <>
    {Store.verified ?
    <Homepage/> : 
    <Login/>
    }
    </>
  )
}

export default LandingPage;