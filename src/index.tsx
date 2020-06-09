import React from 'react';
import { AppRegistry } from 'react-native';
import App from './Component/App';
import Client from './Apollo/Client';
import { ApolloProvider } from 'react-apollo-hooks';

const ApolloInit = () => (
  <ApolloProvider client = {Client}>
    <App />
  </ApolloProvider>
);

AppRegistry.registerComponent('main', () => ApolloInit);
