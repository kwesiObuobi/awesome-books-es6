export default class Books {
  constructor() {
    this.books = [];
  }

  addBook = (book) => {
    this.books.push(book);
    this.saveBooks();
    this.renderBooks();
  }

  removeBook = (id) => {
    this.books = this.books.filter((book) => book.id !== id);
  }

  savebooks = () => {
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  getbooks = () => {
    const savedBooks = localStorage.getItem('books');
    if (savedBooks) {
      this.books = JSON.parse(savedBooks);
    } else {
      this.books = [];
    }
  }

  renderBooks = () => {
    const bookList = document.getElementById('books-list');
    bookList.innerHTML = '';
    this.books.forEach((book) => {
      bookList.innerHTML += `
      <li class="book-item">
        <p> ${book.title} by ${book.author} </p>
        <button class="remove-btn" data-id="${book.id}" onclick="remove(${book.id})"> Remove </button>
      </li>
      `;
    });
  }
}