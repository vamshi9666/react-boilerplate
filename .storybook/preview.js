
// .storybook/preview.js

import React from 'react';
import { CSSReset, ThemeProvider as ChakraProvider } from '@chakra-ui/core';
import CustomTheme from '../src/theme';

export const decorators = [(Story) => <ChakraProvider them={CustomTheme} > <CSSReset/>   <Story/> </ChakraProvider> ]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}