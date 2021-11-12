// ********************************************
// CATS FLOW
// index
/*
function getAllCats(){
    fetch('http://localhost:3000/cats')
        .then(r => r.json())
        .then(appendCats)
        .catch(console.warn)
};

// create
function submitCat(e){
    e.preventDefault();

    const catData = {
        name: e.target.name.value,
        age: e.target.age.value
    };

    const options = { 
        method: 'POST',
        body: JSON.stringify(catData),
        headers: {
            "Content-Type": "application/json"
        }
    };

    fetch('http://localhost:3000/cats', options)
        .then(r => r.json())
        .then(appendCat)
        .catch(console.warn)
};

// helpers
function appendCats(cats){
    cats.forEach(appendCat);
};

function appendCat(catData){
    const newLi = document.createElement('li');
    newLi.textContent = `Name: ${catData.name} || Age: ${catData.age}`
    const catsList = document.querySelector('ul');
    catsList.append(newLi);
};
*/

// ********************************************
// Books FLOW
// index
function getAllBooks(){
    fetch('http://localhost:3000/books')
        .then(r => r.json())
        .then(appendBooks)
        .catch(console.warn)
};

// create
function submitBook(e){
    e.preventDefault();

    const bookData = {
        name: e.target.name.value,
        price: e.target.price.value,
		source: e.target.source.value
    };

    const options = { 
        method: 'POST',
        body: JSON.stringify(bookData),
        headers: {
            "Content-Type": "application/json"
        }
    };

    fetch('http://localhost:3000/books', options)
        .then(r => r.json())
        .then(appendbook)
        .catch(console.warn)
};

// helpers
function appendBooks(books){
    books.forEach(appendBook);
};

function appendBook(bookData){
    const newLi = document.createElement('li');
    newLi.textContent = `Name: ${bookData.name} || Price: ${bookData.price} || Source: ${bookData.source}`
    const booksList = document.querySelector('ul');
    booksList.append(newLi);
};

// ********************************************

// MESSAGE FLOW
function getMessage(){
    fetch('http://localhost:3000')
        .then(r => r.text())
        .then(renderMessage)
        .catch(console.warn)
};

function renderMessage(msgText){
    const msg = document.createElement('p');
    msg.textContent = msgText;
    msg.style.color = 'red';
    document.body.append(msg);
};

// ********************************************

module.exports = {
    getAllBooks,
    submitBook,
    appendBooks,
    appendBook,
    getMessage,
    renderMessage
}

