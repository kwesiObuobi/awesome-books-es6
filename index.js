import * as DisplaySections from './modules/displaySections.js';
import Book from './modules/book.js';
import Books from './modules/books.js';

// const booksList = document.getElementById('books-list');
const form = document.getElementById('form');
const title = document.getElementById('title');
const author = document.getElementById('author');
// const time = document.getElementById('time');
const formSection = document.getElementById('form-section');
const contact = document.getElementById('contact');
const listLink = document.getElementById('list-link');
const formLink = document.getElementById('form-link');
const contactLink = document.getElementById('contact-link');

formSection.style.display = 'none';
contact.style.display = 'none';

formLink.addEventListener('click', DisplaySections.showForm);
contactLink.addEventListener('click', DisplaySections.showContact);
listLink.addEventListener('click', DisplaySections.showList);

const books = new Books();

let count = localStorage.getItem('count')
  ? Number(localStorage.getItem('count'))
  : 0;

form.onsubmit = (e) => {
  e.preventDefault();
  count += 1;
  books.addBook(new Book(title.value, author.value, count));
  localStorage.setItem('count', count);
  DisplaySections.showList();
  form.reset();
};

books.getbooks();
books.renderBooks();

// const removeBtns = document.querySelectorAll('.remove-btn');
// removeBtns.forEach((btn) => {
//   btn.addEventListener('click', () => {
//     books.removeBook(btn.dataset.id);
//     count -= 1;
//     localStorage.setItem('count', count);
//     books.saveBooks();
//     books.renderBooks();
//   });
// });
