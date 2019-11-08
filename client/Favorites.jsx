import React, { useContext, useEffect } from 'react';
import { StoreContext } from './Store.jsx';
import SearchResult from './SearchResult.jsx'

const Favorites = () => {
  let searchResults = [];
  const [Store, setStore] = useContext(StoreContext);
  useEffect(() => {
    console.log('hi', Store.user);
    let objdata = { username: Store.user }
    fetch('/allfavorites', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(objdata)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setStore({ ...data, userFavs: data })
      })
      .catch(console.error)
  }, [])
  searchResults = Store.userFavs.map((result, ind) => {
    return <SearchResult
      title={result.jobTitle}
      company={result.company}
      location={result.location}
      summary={result.snippet}
      posted={result.postDate}
      id={result.jobID}
      url={result.url}
      page={'Indeed'}
      key={ind}
    ></SearchResult>
  })
  return (
    <div id="resultHolder">
      {searchResults}
    </div>
  )
}

export default Favorites;
