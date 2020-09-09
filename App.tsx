import 'react-native-gesture-handler';
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import Routes from './src/routes';
import client from './src/Apollo/client';

const App: React.FC = () => {
  return(
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  );
};

export default App;