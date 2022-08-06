import {Text, Flex, VStack} from '@chakra-ui/react';
import Book from "./Book.js";

const Bookshelf = ({title, books=[]}) => {
  return (
    <VStack max-width="100%">
      <Text fontSize='3xl'>{title}</Text>
      <Flex h='200px' gap="24px" w="100%" direction="row" overflowX="auto">
        {
          books.map((book) =>(
            <Book key={book.id} book={book} />
          ))
        }
      </Flex>
    </VStack>
  )
}

export default Bookshelf;
