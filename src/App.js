import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  StackDivider,
  Grid,
} from '@chakra-ui/react';
import {AddIcon} from '@chakra-ui/icons';
import BookCase from './BookCase.js';
import AddBook from './AddBook.js';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import theme from './theme.js';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8} align="stretch" divider={<StackDivider />}>
            <Box h='150px' >
              <Text fontSize='6xl' fontWeight='bold'>My Reads</Text>
            </Box>
            <Routes>
              <Route exact path="/" element={ <BookCase /> } />
              <Route path="/search" element={ <AddBook /> } />
            </Routes>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
