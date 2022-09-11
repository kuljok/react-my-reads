import {Box, Text, HStack, VStack, Input, IconButton,
        SimpleGrid} from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import {ArrowBackIcon} from '@chakra-ui/icons';
import {search} from './api/BooksAPI.js';
import {useState, useEffect} from 'react';
import Book from './Book.js';
import PropTypes from 'prop-types';

const SearchBook = ({mapBook}) => {

  const [found, setFound] = useState([]);

  let handler = null;

  const debounceSearch = (searchText) => {
    if (handler)
    {
      clearTimeout(handler);
      handler = null;
    }

    handler = setTimeout(() => updateSearch(searchText), 500);
  }

  const updateSearch = async (searchText) => {
    const searchResults = await search(searchText, 20);
    if (searchResults && Array.isArray(searchResults))
    {
      setFound(searchResults.map(mapBook));
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
            onChange={(event) => debounceSearch(event.target.value)}/>
      </HStack>
      <VStack>
      {
        found.length == 0 ? 
          <Box align="center">
            <Text>Book Not Found</Text>
          </Box> :
          <SimpleGrid columns={{sm: 2, md: 3, lg: 5}} spacing={10} > 
              {
                  found.map((f) => (
                      <Box key={f.id} w="150px">
                        <Book book={f} />
                      </Box>
                    ))
              }
          </SimpleGrid>
      }
      </VStack>
    </VStack>
  )
}

SearchBook.propTypes = {
  mapBook: PropTypes.func.isRequired
}

export default SearchBook;
