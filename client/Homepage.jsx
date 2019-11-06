import React, { useContext, useEffect } from 'react';
import { StoreContext } from './Store.jsx';
import Navbar from './Navbar.jsx'
import Filters from './Filters.jsx'
import Content from './Content.jsx'

const Homepage = () => {
  const [Store, setStore] = useContext(StoreContext);
  useEffect(()=>{
    if (!Store.fetched) {
      let userFavs;
      let linkedInRes;
      let indeedRes;
      let glassDoorRes;
      let linkUpRes;
      // on logging in fetching from APIs to get job search results
    // fetch(/LinkedIn)
    //.then(res=> res.json())
    //.then(res=> linkedInRes = res)
    // fetch(/Indeed)
    //.then(res=> res.json())
    //.then(res=> indeedRes = res)
    // fetch(/LinkUp)
    //.then(res=> res.json())
    //.then(res=> linkUpRes = res)
    // fetch(/GlassDoor)
    //.then(res=> res.json())
    //.then(res=> glassDoorRes = res)


    //fetching for favs
    fetch('/favorites')
      .then(res=> res.json())
      .then(res=> {
        userFavs = res})
      .catch(e=> console.log(e))

      return setStore({
        ...Store,
        userFavs,
        linkedInRes,
        indeedRes,
        glassDoorRes,
        linkUpRes,
        fetched: true
      })
    }

    //this could possibly be moved to another component
    if(Store.job_ID) {
      fetch('/favorites', {
        method: 'POST',
        headers: {
          'Content-Type' : 'applocation/json'
        },
        body: JSON.stringify({
          username: Store.user,
          favorites: Store.job_ID
        })
      })
      .then(res=> res.json())
      .then(res=> console.log(res))
      .catch(e=> console.log(e))
    };


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