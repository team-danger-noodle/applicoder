import React, { useContext } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { StoreContext } from './Store.jsx';
import SearchResult from './SearchResult.jsx';

const GITHUB_JOBS_QUERY = gql`
  query GitHubJobsQuery {
    gitHubJobs {
      id
      type
      created_at
      company
      location
      title
      description
    }
  }
`;

const GitHubJobs = () => {
  const { loading, error, data } = useQuery(GITHUB_JOBS_QUERY);

  if (loading) return <h4>Loading...</h4>;
  if (error) console.log(error);

  const searchResults = data.gitHubJobs.map(result => {
    return (
      <SearchResult
        title={result.title}
        company={result.company}
        location={result.location}
        summary={result.description}
        posted={result.created_at}
        id={result.id}
        url={result.company_url}
        key={result.id}
      ></SearchResult>
    );
  });

  return <div id='resultHolder'>{searchResults}</div>;
};

export default GitHubJobs;
