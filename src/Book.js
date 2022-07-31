import {Box, Text, Container} from "@chakra-ui/react";

const Book = ({book}) => {
  return (
    <Box w="auto" h="180px" flex="0 0 150px" bg="yellow.200">
      <Text>{book.title}</Text>
    </Box>
  )
}

export default Book;
