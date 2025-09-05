const books=[
  {
    "title":"Book A",
    "authorName":"Author A",
    "releaseYear":2000
  },
  {
    "title":"Book B",
    "authorName":"Author B",
    "releaseYear":2010
  },
  {
    "title":"Book C",
    "authorName":"Author C",
    "releaseYear":2020
  },
  {
    "title":"Book D",
    "authorName":"Author D",
    "releaseYear":2015
  }];

function sortByYear(book1,book2) {
  if (book2.releaseYear-book1.releaseYear>0) {
    return -1;
  }
  else if (book1.releaseYear-book2.releaseYear===0) {
    return 0;
  }
  else {
    return 1;
  }
}

let filteredBooks=books.filter(book=>book.releaseYear>=2010);
filteredBooks.sort(sortByYear);
console.log(filteredBooks);


