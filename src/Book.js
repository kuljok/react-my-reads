import {Box, Text, Container, Image} from "@chakra-ui/react";

const Book = ({book}) => {
  return (
    <Box w="auto" h="180px" flex="0 0 150px" overflow="hidden">
      <Image src={book.cover} alt={book.title} />
      <Text>{book.title}</Text>
    </Box>
  )
}

export default Book;
