/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore

import { theme as ChakraTheme } from '@chakra-ui/core';

const CustomTheme = {
  ...ChakraTheme,

  colors: {
    ...ChakraTheme.colors,
    primary: ChakraTheme.colors.orange[400],
    secondary: ChakraTheme.colors.orange[200],
  },
  fonts: {
    ...ChakraTheme.fonts,
    body: 'Nunito, sans-serif',
  },
};

export default CustomTheme;
