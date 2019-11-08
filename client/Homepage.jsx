import React, { useContext, useEffect } from 'react';
import { StoreContext } from './Store.jsx';
import Navbar from './Navbar.jsx'
import Filters from './Filters.jsx'
import Content from './Content.jsx'

const Homepage = () => {
  const [Store, setStore] = useContext(StoreContext);

  useEffect(() => {
    if (!Store.fetched) {
      let userFavs;
      let user;
      fetch('/getUserInfo')
      .then(response => response.json())
      .then(data => {
        user = data;
        setStore({...Store, user})
      })
      // .then(data => setStore({ ...Store, user: data }))
      .catch(console.error)

    //fetching for favs
      fetch('/favorites', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: user})
      })
      .then(res=> res.json())
      .then(res=> {
        userFavs = res
        setStore({...Store, userFavs, fetched: true})
      })
      .catch(e=> console.log(e))

      setStore({
        ...Store,
        userFavs,
        fetched: true
      })
    }  
  }, [])

  useEffect(() => {
    if (Store.keywordSearch || Store.locationSearch || Store.radius) {
      const keyword = Store.keywordSearch;
      const location = Store.locationSearch;
      const radius = Store.radius
      const body = {
        keyword,
        location,
        radius
      }
      console.log('the values made it', body)
    }
  }, [Store.keywordSearch, Store.locationSearch, Store.radius])

  useEffect(() => {
    if (Store.job_ID && Store.pageLike) {
      const pageLike = Store.pageLike;
      let userFavs;
      let favorites;
      if (pageLike === 'Codesmith') {
        for (let post of Store.codesmithRes) {
          if (post.jobID === Store.job_ID) {
            post.page = pageLike;
            favorites = post;
          }
        }
      } else if (pageLike === 'GitHub') {
        for (let post of Store.gitHubJobs) {
          if (post.key === Store.job_ID) {
            post.page = pageLike;
            favorites = post;
          }
        }
      } else if (pageLike === 'AuthenticJobs') {
        for (let post of Store.authenticJobs) {
          if (post.key === Store.job_ID) {
            post.page = pageLike;
            favorites = post;
          }
        }
      } 

      fetch('/favorites', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: Store.user,
          favorites
        })
      })
        .then(res => res.json())
        .then(res => {
          console.log(res)
          userFavs = res
        })
        .catch(e => console.log(e))

      setStore({
        ...Store,
        userFavs
      })
    }
  }, [Store.job_ID])
  // this could possibly be moved to another component

  return (
    <div id="homepage" className="bg-dark">
      <Navbar />
      <Filters />
      <Content />
    </div>
  )
}
export default Homepage;