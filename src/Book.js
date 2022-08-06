import {Box, Text, Container, Image,
        Menu, MenuButton, IconButton, MenuItem, MenuList} from "@chakra-ui/react";
import {TriangleDownIcon} from '@chakra-ui/icons';

const Book = ({book}) => {
  return (
    <Box w="auto" h="180px" pos="relative" flex="0 0 150px" overflow="hidden">
    {book.cover !== 'none' ? <Image ml="auto" mr="auto"  maxH="130px" src={book.cover} 
      alt={book.title} /> : '' }
      <Text fontSize="sm">{book.title}</Text>
      <Menu preventOverflow="false" strategy="fixed">
        <MenuButton boxSize="3em" size="md" pos="absolute" top="80px" isRound="true"
          as={IconButton}
          aria-label="Move To:"
          icon={<TriangleDownIcon size="sm"/>}
          variant="solid" />
        <MenuList >
          <MenuItem>Currently Reading</MenuItem>
          <MenuItem>Want To Read</MenuItem>
          <MenuItem>Read</MenuItem>
          <MenuItem>None</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  )
}

export default Book;
