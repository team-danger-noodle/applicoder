import React, { useContext } from 'react';
import { StoreContext } from './Store.jsx';
import { Navbar, Button } from 'react-bootstrap';

const Navigation = () => {
  const [Store, setStore] = useContext(StoreContext);

  const logout = () => {
    return setStore({
      ...Store,
      user: '',
      verified: false,
    })
  }

  return (
    <Navbar bg="dark" variant="dark" fixed="top" id="navbar">
      <Navbar.Brand id="navbarLogo">
        <img
          alt=""
          src="https://image.flaticon.com/icons/svg/52/52903.svg"
          width="50"
          height="50"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Brand id="title"> AppliCoder . . .</Navbar.Brand>
      <Navbar.Brand id="logout">
        <Button variant="outline-info" onClick={logout} className="logout">Logout</Button>
      </Navbar.Brand>
    </Navbar>
  )

}

export default Navigation;