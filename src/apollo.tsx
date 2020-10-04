import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { GRAPHQL_API_ENDPOINT } from './config/Graphql';
import { AUTH_TOKEN } from './common/constants';

const httpLink = createHttpLink({
  uri: GRAPHQL_API_ENDPOINT,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN);
  const isTokenPresent = !!token;
  const authHeader = isTokenPresent ? { authorization: `Bearer ${token}` } : {};
  return {
    headers: {
      ...authHeader,
      ...headers,
    },
  };
});

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default apolloClient;
