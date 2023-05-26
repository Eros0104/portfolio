import React from 'react';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/main';
import theme from '../styles/theme';
import Fonts from '../styles/fonts';
import { Analytics } from '@vercel/analytics/react';

const MyApp = ({ Component, pageProps, router }: AppProps) => (
  <>
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        {
          // @ts-ignore
          <Component {...pageProps} key={router.route} />
        }
      </Layout>
    </ChakraProvider>
    <Analytics />
  </>
);

export default MyApp;
