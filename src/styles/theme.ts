import { extendTheme } from '@chakra-ui/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { mode } from '@chakra-ui/theme-tools';
import colors from './colors';

const { dark, light } = colors;

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode(light.bg, dark.bg)(props),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: (props: any) => ({
      color: mode(light.primary, dark.primary)(props),
      textUnderlineOffset: 3,
    }),
  },
};

const fonts = {
  heading: "'M PLUS Rounded 1c'",
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  fonts,
  components,
  styles,
});

export default theme;
