import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
// import { InputStyle as Input } from './styles/InputStyle';

const Input = {
  defaultProps: {
    variant: 'filled',
  },
  variants: {
    filled: props => ({
      field: {
        bg: mode('gray.200', 'gray.800')(props),
        _placeholder: {
          color: mode('gray.500', 'gray.300')(props),
        },
      },
    }),
  },
};
const Button = {
  baseStyle: props => ({
    fontWeight: 'bold',
  }),
  variants: {
    solid: props => ({
      bg: mode('gray.200', 'gray.800')(props),
    }),
  },
};
const Textarea = {
  defaultProps: {
    variant: 'filled',
  },
  variants: {
    filled: props => ({
      bg: mode('gray.200', 'gray.800')(props),
      _placeholder: {
        color: mode('gray.500', 'gray.300')(props),
      },
    }),
  },
};
const Link = {
  baseStyle: {
    outline: 'none',
    _focus: { boxShadow: 'none' },
  },
};
const myTheme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "dark"
  },
  components: {
    Input,
    Textarea,
    Button,
    Link,
  },
});

export default myTheme;
