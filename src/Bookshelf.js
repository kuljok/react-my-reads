import {Box, Text} from '@chakra-ui/react';

const Bookshelf = ({title}) => {
  return (
    <Box h='200px'>
      <Text fontSize='3xl'>{title}</Text>
    </Box>
  )
}

export default Bookshelf;
