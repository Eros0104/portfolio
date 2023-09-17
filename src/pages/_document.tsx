import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Head, Main, NextScript, Html } from 'next/document';
import theme from '../styles/theme';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="google-site-verification" content="aVwoZVlLg2vA1Uye5TbFvXxgHDCYNBE3yWLYj53VKZM" />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
