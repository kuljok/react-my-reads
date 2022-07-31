import { extendTheme } from '@chakra-ui/react';

const globalProps = {
  colorScheme: 'blue',
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
        color: 'blue.600'
      },
      defaultProps: {
        ...globalProps
      }
    }
  }
});

export default theme;
