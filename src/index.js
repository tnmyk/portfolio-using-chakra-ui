import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import myTheme from './theme';


ReactDOM.render(
  <ChakraProvider CSSReset theme={myTheme}>
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);