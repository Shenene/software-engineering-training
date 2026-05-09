const book = {
  title: "Cats",
  description: "An adventure about the cats",
  author: "S. Carstens",
  pages: 200,
};

console.log(book.title);
console.log(book.description);
console.log(book.author);
console.log(book.pages);

console.log(book["title"]);
console.log(book["description"]);
console.log(book["author"]);
console.log(book["pages"]);

console.log(`This is the book about ${book.title}.`);

book.description = "A classic story about the cats.";

// 5 book objects
const books = [
  {
    title: "The kittens",
    description: "An adventure about the cats",
    author: "S. Carstens",
    pages: 200,
  },
  {
    title: "The adventure",
    description: "An adventure about the cats",
    author: "S. Carstens",
    pages: 200,
  },
  {
    title: "The kitten adventure",
    description: "An adventure about the cats",
    author: "S. Carstens",
    pages: 200,
  },
  {
    title: "All The Cats",
    description: "An adventure about the cats",
    author: "S. Carstens",
    pages: 200,
  },
  {
    title: "Cats 101",
    description: "An adventure about the cats",
    author: "S. Carstens",
    pages: 200,
  },
];

console.log(books);
