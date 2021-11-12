// ********************************************


// SETUP
const btn = document.querySelector('button');
const form = document.querySelector('#new-book-form');

// Bind event listeners
btn.addEventListener('click', getMessage);
form.addEventListener('submit', submitBook);

// Fetch all cats as soon as app is loaded
//getAllCats();
getAllBooks();
// ********************************************