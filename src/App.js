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
  theme,
} from '@chakra-ui/react';
import {AddIcon} from '@chakra-ui/icons';
import Bookshelf from './Bookshelf.js';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8} align="stretch" divider={<StackDivider borderColor='gray.200' />}>
            <Box h='150px' >
              <Text fontSize='6xl' fontWeight='bold'>My Reads</Text>
            </Box>
            <Bookshelf title="Currently Reading" />
            <Bookshelf title="Want To Read" />
            <Bookshelf title="Read" />
          </VStack>
          <IconButton pos="fixed" right="25px" bottom="25px" w="40px" h="40px" variant="solid" isRound="true" icon={<AddIcon />} />
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
