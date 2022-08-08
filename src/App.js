import {useState, useEffect} from 'react';
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
import BookMenu from './BookMenu.js';
import SearchBook from './SearchBook.js';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import theme from './theme.js';
import {getAll} from './api/BooksAPI.js';

function App() {

  const registeredShelfs = [
    { 
      state: useState([]),
      shelfId: 'currentlyReading',
      title: 'Currently Reading'
    },
    {
      state: useState([]),
      shelfId: 'wantToRead',
      title: 'Want To Read'
    },
    {
      state: useState([]),
      shelfId: 'read',
      title: 'Read'
    }
  ];

  const mapSourceBook = (b) => Object.assign({}, {
    title: b.title,
    author: b.authors ? b.authors.join(',') : "Unknown",
    id: b.id,
    cover: b.imageLinks ? b.imageLinks.thumbnail : "none",
    shelf: b.shelf
  });

  const addMenu = (b) => Object.assign({}, {
    ...b,
    menu: <BookMenu book={b} shelfs={registeredShelfs} />
  });

  const findShelfByBookId = (id) => {
    return registeredShelfs.reduce((prev, current) => 
            prev && prev !== 'none' ? prev : 
              current.state[0].find(b => b.id === id) ? 
                current.shelfId : 'none', null); 
  };

  const mapShelfByBookId = (b) => Object.assign({}, {
    ...b,
    shelf: findShelfByBookId(b.id)
  });

  const composeBook = (...props) => 
    (b) => props.reduce((composed, next) => next(composed), b);

  useEffect(() => {
    const getBooks  = async () => {
      const books = await getAll();
      for (const shelf of registeredShelfs)
      {
        shelf.state[1](books.filter(b=>b.shelf === shelf.shelfId)
          .map(composeBook(mapSourceBook, addMenu)));
      }
    };
    getBooks();
  }, []);

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
                element={ <BookCase shelfs={registeredShelfs} /> } />
              <Route path="/search" element={ <SearchBook 
                mapBook={composeBook(mapSourceBook, mapShelfByBookId, addMenu)}/> } />
            </Routes>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
