import {Menu, MenuButton, IconButton, MenuList, MenuItem, MenuGroup} from '@chakra-ui/react';
import {TriangleDownIcon} from '@chakra-ui/icons';

const BookMenu = ({book}) => {
  return (
    <Menu preventOverflow="false" strategy="fixed">
        <MenuButton boxSize="3em" size="sm" pos="absolute" top="90px" right="15px" isRound="true"
          as={IconButton}
          aria-label="Move To:"
          icon={<TriangleDownIcon size="sm"/>}
          variant="solid" />
        <MenuList >
          <MenuGroup title="Move To:">
            <MenuItem>Currently Reading</MenuItem>
            <MenuItem>Want To Read</MenuItem>
            <MenuItem>Read</MenuItem>
            <MenuItem>None</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
  );
};

export default BookMenu;
