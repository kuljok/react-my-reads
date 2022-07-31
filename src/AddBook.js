import {Box, Text, HStack, VStack, Input, IconButton} from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import {ArrowBackIcon} from '@chakra-ui/icons';

const AddBook = () => {
  return (
    <VStack align="stretch">
      <HStack spacing={3} align="center">
        <Link to="/">
          <IconButton variant="ghost" icon={<ArrowBackIcon w={8} h={8}/>} />
        </Link>
        <Input placeholder="Search by title, author or ISBN"/>
      </HStack>
      <HStack spacing="24px" align="stretch" >
        <Box />
      </HStack>
    </VStack>
  )
}

export default AddBook;
