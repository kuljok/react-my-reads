import {Box, Text, Image} from "@chakra-ui/react";
import BookMenu from './BookMenu.js';

const Book = ({book}) => {
  return (
    <Box id={book.id} w="auto" h="180px" pos="relative" flex="0 0 150px" overflow="hidden">
    {book.cover !== 'none' ? <Image ml="auto" mr="auto"  maxH="130px" src={book.cover} 
      alt={book.title} /> : '' }
      <Text fontSize="sm" fontWeight="bold">{book.title}</Text>
      <BookMenu book={book} />
    </Box>
  )
}

export default Book;
