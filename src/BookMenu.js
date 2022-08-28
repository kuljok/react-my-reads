import {Menu, MenuButton, IconButton, MenuList, MenuItemOption, MenuOptionGroup} from '@chakra-ui/react';
import {TriangleDownIcon} from '@chakra-ui/icons';

const BookMenu = ({book, shelfs, moveBook}) => {

  const noneItem = {
    state: [],
    shelfId: 'none',
    title: 'None'
  };
  const menuItems = [...shelfs, noneItem];

  let currentShelf = shelfs.find(shelf => shelf.shelfId === book.shelf);
  currentShelf = currentShelf ? currentShelf.shelfId : noneItem.shelfId;

  return (
    <Menu preventOverflow="false" strategy="fixed" >
        <MenuButton boxSize="3em" size="sm" pos="absolute" top="90px" right="15px" isRound="true"
          as={IconButton}
          icon={<TriangleDownIcon size="sm"/>}
          variant="solid" />
        <MenuList>
          <MenuOptionGroup defaultValue={currentShelf} title="Move To:" type="radio">
            {
              menuItems.map(shelf => (
                <MenuItemOption onClick={(e) => moveBook(book, shelf)} key={shelf.shelfId} value={shelf.shelfId}>{shelf.title}</MenuItemOption>
              ))
            }
          </MenuOptionGroup>
        </MenuList>
      </Menu>
  );
};

export default BookMenu;
