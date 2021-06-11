import React from 'react';
import App from './App';
import { InMemoryCache, ApolloClient } from '@apollo/client';
import { createHttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';

import { setContext } from 'apollo-link-context';

//endpoint locator to our local server at the moment
const httpLink = createHttpLink({
  uri: 'http://localhost:5000'
});

const authLink = setContext(() => {
  const token = localStorage.getItem('jwtToken');
  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : ''
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

// 1234567890-=` qwertyuiop[]\`ASDFGHJKL;'
// zxXCVBNM,./ 