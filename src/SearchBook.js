import {Box, Text, HStack, VStack, Input, IconButton,
        SimpleGrid} from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import {ArrowBackIcon} from '@chakra-ui/icons';
import {search} from './api/BooksAPI.js';
import {useState} from 'react';
import Book from './Book.js';
import {mapBook} from './api/BookMapper.js';

const SearchBook = () => {

  const [found, setFound] = useState([]);

  const updateSearch = (searchText) => {
    search(searchText, 20)
      .then((data) => {
        if (data && Array.isArray(data)) {
          setFound(data.map(i => mapBook(i)));
        }
        else {
          setFound([]);
        }
      }
      );
  };

  return (
    <VStack align="stretch">
      <HStack spacing={3} align="center">
        <Link to="/">
          <IconButton variant="ghost" icon={<ArrowBackIcon w={8} h={8}/>} />
        </Link>
        <Input placeholder="Search by title, author or ISBN" 
            onChange={(event) => updateSearch(event.target.value)}/>
      </HStack>
      <VStack>
      <SimpleGrid columns={{sm: 2, md: 3, lg: 5}} spacing={10} maxChildWidth="150px"> 
          {
            found.map((f) => (
              <Box w="150px">
                <Book key={f.isbn} book={f} />
              </Box>
            ))
          }
      </SimpleGrid>
    </VStack>
    </VStack>
  )
}

export default SearchBook;
