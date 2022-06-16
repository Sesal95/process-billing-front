import Head from 'next/head';
import { CacheProvider } from '@emotion/react';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { createEmotionCache } from '../utils/create-emotion-cache';
import { theme } from '../theme';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const clientSideEmotionCache = createEmotionCache();

const App = (props) => {
  const client = new ApolloClient({
    // uri: "https://48p1r2roz4.sse.codesandbox.io",
    uri: "http://localhost:4000/",
    cache: new InMemoryCache(),
  });

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ApolloProvider client={client}>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>
            Material Kit Pro
          </title>
          <meta
            name="viewport"
            content="initial-scale=1, width=device-width"
          />
        </Head>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {getLayout(<Component {...pageProps} />)}
          </ThemeProvider>
        </LocalizationProvider>
      </CacheProvider>
    </ApolloProvider>
  );
};

export default App;
