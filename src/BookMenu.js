import {Menu, MenuButton, IconButton, MenuList, MenuItemOption, MenuOptionGroup} from '@chakra-ui/react';
import {TriangleDownIcon} from '@chakra-ui/icons';
import {shelfs} from './MyReadsModel.js';

const BookMenu = ({book}) => {

  const currentShelf = shelfs.find(shelf => shelf.type === book.shelf);

  return (
    <Menu preventOverflow="false" strategy="fixed" >
        <MenuButton boxSize="3em" size="sm" pos="absolute" top="90px" right="15px" isRound="true"
          as={IconButton}
          icon={<TriangleDownIcon size="sm"/>}
          variant="solid" />
        <MenuList>
          <MenuOptionGroup defaultValue={currentShelf ? currentShelf.type : 'none'} title="Move To:" type="radio">
            {
              shelfs.map(shelf => (
                <MenuItemOption key={shelf.type} value={shelf.type}>{shelf.title}</MenuItemOption>
              ))
            }
          </MenuOptionGroup>
        </MenuList>
      </Menu>
  );
};

export default BookMenu;
