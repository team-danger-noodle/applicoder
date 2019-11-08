import React, { useContext } from 'react';
import { StoreContext } from './Store.jsx';
import SearchResult from './SearchResult.jsx';

const LinkedIn = () => {
  const [Store, setStore] = useContext(StoreContext);

  const searchResults = Store.linkedInRes.map((result, ind) => {
    return (
      <SearchResult
        title={result.jobTitle}
        company={result.company}
        location={result.location}
        summary={result.snippet}
        posted={result.postDate}
        id={result.jobID}
        url={result.url}
        page={'LinkedIn'}
        key={ind}
      ></SearchResult>
    );
  });

  return <div id='resultHolder'>{searchResults}</div>;
};

export default LinkedIn;
