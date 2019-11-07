import React, { useContext, useEffect } from 'react';
import { StoreContext } from './Store.jsx';
import Navbar from './Navbar.jsx'
import Filters from './Filters.jsx'
import Content from './Content.jsx'

const Homepage = () => {
  const [Store, setStore] = useContext(StoreContext);

  useEffect(() => {
    // if (!Store.fetched) {
    // let userFavs;
    // let linkedInRes;
    // let indeedRes;
    // let glassDoorRes;
    // let linkUpRes;
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
    // fetch('/favorites')
    //   .then(res=> res.json())
    //   .then(res=> {
    //     userFavs = res})
    //   .catch(e=> console.log(e))

    //   return setStore({
    //     ...Store,
    //     userFavs,
    //     linkedInRes,
    //     indeedRes,
    //     glassDoorRes,
    //     linkUpRes,
    //     fetched: true
    //   })
    // }
    fetch('/getUserInfo')
      .then(response => response.json())
      .then(data => setStore({ ...Store, user: data }))
      .catch(console.error)
  }, [Store.fetched])

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
      if (pageLike === 'Indeed') {
        for (let post of Store.indeedRes) {
          if (post.jobID === Store.job_ID) {
            post.page = pageLike;
            favorites = post;
          }
        }
      } else if (pageLike === 'Github') {
        for (let post of Store.gitHubJobs) {
          if (post.id === Store.job_ID) {
            post.page = pageLike;
            favorites = post;
          }
        }
      } else if (pageLike === 'LinkedIn') {
        for (let post of Store.linkedInRes) {
          if (post.jobID === Store.job_ID) {
            post.page = pageLike;
            favorites = post;
          }
        }
      } else if (pageLike === 'GlassDoor') {
        for (let post of Store.glassDoorRes) {
          if (post.jobID === Store.job_ID) {
            post.page = pageLike;
            favorites = post;
          }
        }
      }
      console.log('body items', Store.user, favorites)
      fetch('/favorites', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: Store.user,
          favorites: favorites
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
        job_ID: null,
        userFavs,
        pageLike: null
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