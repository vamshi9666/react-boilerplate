import { ApolloProvider } from '@apollo/client';
import { CSSReset, ThemeProvider as ChakraProvider } from '@chakra-ui/core';
import * as Sentry from '@sentry/browser';
import React from 'react';
import ReactDOM from 'react-dom';
import apolloClient from './apollo';
import App from './App';
import { SENTRY_DNS } from './config/sentry';
import './index.css';
import * as serviceWorker from './serviceWorker';
import CustomTheme from './theme';

Sentry.init({
  dsn: SENTRY_DNS,
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={CustomTheme}>
      <>
        <CSSReset />
        <ApolloProvider client={apolloClient}>
          <App />
        </ApolloProvider>
      </>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
serviceWorker.unregister();
