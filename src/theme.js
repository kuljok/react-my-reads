import { extendTheme } from '@chakra-ui/react';

const globalProps = {
  colorScheme: 'cyan',
  size: 'lg'
}

const theme = extendTheme({
  components: {
    Button: {
      defaultProps: {
        ...globalProps
      }
    },
    Text: {
      baseStyle: {
        color: 'cyan.600'
      },
      defaultProps: {
        ...globalProps
      }
    }
  }
});

export default theme;
