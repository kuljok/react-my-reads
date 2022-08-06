import {useState} from 'react';
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
import SearchBook from './SearchBook.js';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import theme from './theme.js';

function App() {

  const [reading, setReading] = useState([
    {
      title: 'Book Title',
      author: 'Steven Kink',
      cover: 'image.png',
      isbn: '1'
    },
    {
      title: 'Book Title',
      author: 'Steven Kink',
      cover: 'image.png',
      isbn: '2'
    },
    {
      title: 'Book 3',
      author: 'Steven Kink',
      cover: 'image.png',
      isbn: '3'
    },
    {
      title: 'Book Title',
      author: 'Steven Kink',
      cover: 'image.png',
      isbn: '4'
    },
    {
      title: 'Book Title',
      author: 'Steven Kink',
      cover: 'image.png',
      isbn: '5'
    },
    {
      title: 'Book Title',
      author: 'Steven Kink',
      cover: 'image.png',
      isbn: '4'
    }
  ]);

  const [want, setWant] = useState([
    {
      title: 'Book Title',
      author: 'Steven Kink',
      cover: 'image.png',
      isbn: '1'
    },
    {
      title: 'Book Title',
      author: 'Steven Kink',
      cover: 'image.png',
      isbn: '2'
    },
    {
      title: 'Book 3',
      author: 'Steven Kink',
      cover: 'image.png',
      isbn: '3'
    },
    {
      title: 'Book Title',
      author: 'Steven Kink',
      cover: 'image.png',
      isbn: '4'
    },
    {
      title: 'Book Title',
      author: 'Steven Kink',
      cover: 'image.png',
      isbn: '5'
    },
    {
      title: 'Book Title',
      author: 'Steven Kink',
      cover: 'image.png',
      isbn: '4'
    }
  ]);

  const [read, setRead] = useState([
    {
      title: 'Book Title',
      author: 'Steven Kink',
      cover: 'image.png',
      isbn: '1'
    },
    {
      title: 'Book Title',
      author: 'Steven Kink',
      cover: 'image.png',
      isbn: '2'
    },
    {
      title: 'Book 3',
      author: 'Steven Kink',
      cover: 'image.png',
      isbn: '3'
    },
    {
      title: 'Book Title',
      author: 'Steven Kink',
      cover: 'image.png',
      isbn: '4'
    },
    {
      title: 'Book Title',
      author: 'Steven Kink',
      cover: 'image.png',
      isbn: '5'
    },
    {
      title: 'Book Title',
      author: 'Steven Kink',
      cover: 'image.png',
      isbn: '4'
    }
  ]);

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100%" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8} align="stretch" divider={<StackDivider />}>
            <Box h='100px' >
              <Text fontSize='6xl' fontWeight='bold'>My Reads</Text>
            </Box>
            <Routes>
              <Route exact path="/" 
    element={ <BookCase reading={reading} 
      want={want}
      read={read}/> } />
              <Route path="/search" element={ <SearchBook /> } />
            </Routes>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
