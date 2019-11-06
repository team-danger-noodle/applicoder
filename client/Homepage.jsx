import React, { useContext, useEffect } from 'react';
import { StoreContext } from './Store.jsx';
import Navbar from './Navbar.jsx'
import Filters from './Filters.jsx'
import Content from './Content.jsx'

const Homepage = () => {
  const [Store, setStore] = useContext(StoreContext);
  useEffect(()=>{


  })

  return (
    <div id="homepage" className="bg-dark">
      <Navbar/>
      <Filters/>
      <Content/>
    </div>
  )
}
export default Homepage;