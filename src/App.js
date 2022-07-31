import React from 'react';
import {
  ChakraProvider,
  Box,
  IconButton,
  Text,
  Link,
  VStack,
  StackDivider,
  Code,
  Grid,
  Flex,
} from '@chakra-ui/react';
import {AddIcon} from '@chakra-ui/icons';
import Bookshelf from './Bookshelf.js';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import theme from './theme.js';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8} align="stretch" divider={<StackDivider borderColor='blue.200' />}>
            <Box h='150px' >
              <Text fontSize='6xl' fontWeight='bold'>My Reads</Text>
            </Box>
            <Bookshelf title="Currently Reading" />
            <Bookshelf title="Want To Read" />
            <Bookshelf title="Read" />
          </VStack>
          <IconButton pos="fixed" right="25px" 
              boxSize="4em" bottom="25px" variant="solid" isRound="true" 
              icon={<AddIcon size="lg"/>} />
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
