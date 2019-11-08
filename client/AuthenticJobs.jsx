import React, { useContext } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { StoreContext } from './Store.jsx';
import SearchResult from './SearchResult.jsx';

const AUTHENTIC_JOBS_QUERY = gql`
  query AuthenticJobsQuery {
    authenticJobs {
      listings {
        listing {
          id
          title
          description
          post_date
          type {
            name
          }
          company {
            name
            location {
              name
            }
          }
          apply_url
          url
        }
      }
    }
  }
`;

const AuthenticJobs = () => {
  const [Store, setStore] = useContext(StoreContext);
  const { loading, error, data } = useQuery(AUTHENTIC_JOBS_QUERY);

  if (loading) return <h4>Loading...</h4>;
  if (error) console.log(error);

  const searchResults = data.authenticJobs.listings.listing.map(result => {
    result.company.location = result.company.location
      ? result.company.location
      : { name: 'N/A' };

    return (
      <SearchResult
        title={result.title}
        company={result.company.name}
        location={result.company.location.name}
        summary={result.description}
        posted={result.post_date}
        id={result.id}
        url={result.url}
        page={'AuthenticJobs'}
        key={result.id}
      ></SearchResult>
    );
  });
  if (!Store.authenticJobsUpdate) {
    setStore({
      ...Store,
      authenticJobs: searchResults,
      authenticJobsUpdate: true
    })
  }
  return <div id='resultHolder'>{searchResults}</div>;
};

export default AuthenticJobs;
