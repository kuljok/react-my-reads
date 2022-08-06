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
import SearchBook from './SearchBook.js';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import theme from './theme.js';
import {getAll} from './api/BooksAPI.js';
import {mapBook} from './api/BookMapper.js';

function App() {

  const [reading, setReading] = useState([]);
  const [want, setWant] = useState([]);
  const [read, setRead] = useState([]);

  useEffect(() => {
    const getBooks  = async () => {
      const books = await getAll();
      const read = [];
      const reading = [];
      const want = [];
      books.map(b => {
        if (b.shelf === 'read')
        {
          read.push(mapBook(b));
        } 
        else if (b.shelf === 'currentlyReading')
        {
          reading.push(mapBook(b));
        } 
        else if (b.shelf === 'wantToRead')
        {
          want.push(mapBook(b));
        }
      });
      setRead(read);
      setReading(reading);
      setWant(want);
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
