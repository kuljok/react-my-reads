import {Box, Text, HStack, VStack, Input, IconButton,
        SimpleGrid} from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import {ArrowBackIcon} from '@chakra-ui/icons';
import {search} from './api/BooksAPI.js';
import {useState} from 'react';
import Book from './Book.js';
import {mapBook} from './MyReadsModel.js';

const SearchBook = () => {

  const [found, setFound] = useState([]);

  const updateSearch = async (searchText) => {
    const searchResults = await search(searchText, 20);
    if (searchResults && Array.isArray(searchResults))
    {
      setFound(searchResults.map(b => mapBook(b)));
    }
    else
    {
      setFound([]);
    }
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
      <SimpleGrid columns={{sm: 2, md: 3, lg: 5}} spacing={10} > 
          {
            found.map((f) => (
              <Box key={f.id} w="150px">
                <Book book={f} />
              </Box>
            ))
          }
      </SimpleGrid>
    </VStack>
    </VStack>
  )
}

export default SearchBook;
