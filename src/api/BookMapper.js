export const mapBook = (b) => {
  return {
    title: b.title, 
    author: b.authors ? b.authors.join() : 'Unknown', 
    id: b.id,
    cover: b.imageLinks ? b.imageLinks.thumbnail : "none"
  }
}
