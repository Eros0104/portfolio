import React from 'react';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/main';
import theme from '../styles/theme';

const MyApp = ({ Component, pageProps, router }: AppProps) => (
  <ChakraProvider theme={theme}>
    <Layout router={router}>
      <Component {...pageProps} key={router.route} />
    </Layout>
  </ChakraProvider>
);

export default MyApp;
