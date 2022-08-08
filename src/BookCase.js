import {VStack, StackDivider, Box, IconButton} from '@chakra-ui/react';
import {AddIcon} from '@chakra-ui/icons';
import {Link} from 'react-router-dom';
import Bookshelf from './Bookshelf.js';

const BookCase = ({shelfs}) => {
  return (
    <Box textAlign="center" fontSize="xl" >
      <VStack spacing={8} align="stretch" divider={<StackDivider />} >
        {
          shelfs.map(s => (<Bookshelf key={s.shelfId} shelf={s} />))
        }
      </VStack>
      <Link to="/search">
                  <IconButton pos="fixed" right="25px" 
                      boxSize="4em" bottom="25px" variant="solid" isRound="true" 
          icon={<AddIcon size="lg"/>} >
        </IconButton>
      </Link>
    </Box>
  )
}

export default BookCase;
