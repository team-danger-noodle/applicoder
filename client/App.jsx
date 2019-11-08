import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { StoreContextProvider } from './Store.jsx';
import LandingPage from './LandingPage.jsx';


const client = new ApolloClient({
  uri: '/graphql'
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <StoreContextProvider>
        <LandingPage />
      </StoreContextProvider>
    </ApolloProvider>
  );
};

export default App;
