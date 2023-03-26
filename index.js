import DisplaySections from './modules/displaySections';

// const booksList = document.getElementById('books-list');
// const form = document.getElementById('form');
// const title = document.getElementById('title');
// const author = document.getElementById('author');
// const time = document.getElementById('time');
// const list = document.getElementById('list');
const formSection = document.getElementById('form-section');
const contact = document.getElementById('contact');
const listLink = document.getElementById('list-link');
const formLink = document.getElementById('form-link');
const contactLink = document.getElementById('contact-link');

formSection.style.display = 'none';
contact.style.display = 'none';

console.log('hi there');

formLink.addEventListener('click', DisplaySections.showForm);
contactLink.addEventListener('click', DisplaySections.showContact);
listLink.addEventListener('click', DisplaySections.showList);