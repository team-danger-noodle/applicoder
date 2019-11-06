import React, { useContext } from 'react';
import { StoreContext } from './Store.jsx';


const Login = () => {
  const [Store, setStore] = useContext(StoreContext);

  return (
    <>
    <div id="OAuth">
      <h4>OAuth Info</h4>
      <p>This is where the OAuth will go</p>
    </div>
    </>
  )
}

export default Login;