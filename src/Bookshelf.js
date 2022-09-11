import {Text, Flex, VStack} from '@chakra-ui/react';
import Book from "./Book.js";
import PropTypes from 'prop-types';

const Bookshelf = ({shelf}) => {
  return (
    <VStack max-width="100%">
      <Text fontSize='3xl'>{shelf.title}</Text>
      <Flex h='230px' gap="24px" w="100%" direction="row" overflowX="auto">
        {
          shelf.books.map((book) =>(
            <Book key={book.id} book={book} />
          ))
        }
      </Flex>
    </VStack>
  )
}

Bookshelf.propTypes = {
  shelf: PropTypes.object.isRequired
}

export default Bookshelf;
