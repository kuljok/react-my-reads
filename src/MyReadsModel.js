export const shelfs = [
    {
      type: 'currentlyReading',
      title: 'Currently Reading'
    },
    {
      type: 'wantToRead',
      title: 'Want To Read'
    },
    {
      type: 'read',
      title: 'Read'
    },
    {
      type: 'none',
      title: 'None'
    }
  ];

export const mapBook = (b) => {
  return {
    title: b.title, 
    author: b.authors ? b.authors.join() : 'Unknown', 
    id: b.id,
    cover: b.imageLinks ? b.imageLinks.thumbnail : "none",
    shelf: b.shelf
  }
}
