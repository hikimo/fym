import { BASE_API } from '@env';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: BASE_API,
  cache: new InMemoryCache()
});

export default client;