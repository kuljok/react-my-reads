import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  StackDivider,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import Bookshelf from './Bookshelf.js';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8} align="stretch" divider={<StackDivider borderColor='gray.200' />}>
            <Box h='100px' >
              <Text fontSize='6xl' fontWeight='bold'>My Reads</Text>
            </Box>
            <Bookshelf title="Currently Reading" />
            <Bookshelf title="Want To Read" />
            <Bookshelf title="Read" />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
