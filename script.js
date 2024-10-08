const book1 = {
    title: 'The Hobbit',
    author: 'J.R.R Tolkien',
    numberOfPages: '255',
    status: 'Yes'
};

const book2 = {
    title: 'The Crime',
    author: 'J.R.R Tolkien',
    numberOfPages: '255',
    status: 'Yes'
};

const book3 = {
    title: 'The Silent',
    author: 'J.R.R Tolkien',
    numberOfPages: '255',
    status: 'Yes'
};

const mylibrary = [book1, book2, book3];

class Book {
    constructor(title, author, numberOfPages, status) {
        this.title = title;
        this.author = author;
        this.numberOfPages = numberOfPages;
        this.status = status;
    }
}

function addBookToLibrary(object) {
    const book = new Book(object.title, object.author, object.pageNumber, object.status);

    mylibrary.push(book);
    displayBook(mylibrary);
}

const displayContainer = document.querySelector('.display');
let submitted = false;
let deleted = false;


function createDisplay(objectBook) {
    const card = document.createElement('div');
    const title = document.createElement('h2');
    const line = document.createElement('hr');
    const authorPar = document.createElement('p');
    const pagePar = document.createElement('p');
    const statusPar = document.createElement('p');
    const removeBtn = document.createElement('button');
    const toggleBtn = document.createElement('button');
    const br = document.createElement('br');

    card.classList.add('card');
    title.classList.add('title');
    authorPar.classList.add('author');
    pagePar.classList.add('pages');
    statusPar.classList.add('status');
    removeBtn.classList.add('card-btn');
    toggleBtn.classList.add('card-btn');

    title.textContent = objectBook.title;
    authorPar.textContent = 'By ' + objectBook.author;
    pagePar.innerHTML = 'Has it been read: <strong>' + objectBook.numberOfPages + '</strong>';
    statusPar.innerHTML = 'Has it been read: <strong>' + objectBook.status + '</strong>';

    removeBtn.textContent = 'Delete Book';
    toggleBtn.textContent = 'Toggle Read/Unread';


    card.append(title, line, authorPar, pagePar, statusPar, toggleBtn, br, removeBtn);

    displayContainer.appendChild(card);
    deleteCard(card, removeBtn, objectBook);
    toggleStatus(toggleBtn, objectBook, statusPar);
}

function displayBook(arr) {
    let index = arr.length;
    let bookToDisplay;

   
    let content = displayContainer.textContent;

    if (content == '' && index > 0) {
        arr.forEach(book => {
            createDisplay(book);
        });
    } else if (submitted){
        bookToDisplay = arr[index - 1];
        createDisplay(bookToDisplay);
        submitted = false;
    }
}

displayBook(mylibrary);


// const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295 pages', 'Read');

// console.table(typeof theHobbit);

const form = document.querySelector('.form');
const inputs = document.querySelectorAll('input');
const addBtn = document.querySelector('.new-book');
const submitBtn = document.querySelector('.submit');
const cancelBtn = document.querySelector('.cancel');
const modal = document.querySelector('#dialog');

addBtn.addEventListener('click', () => {
    modal.showModal();
});

cancelBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.close();
})

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const obj = Object.fromEntries(formData);

    
    submitted = true;
    addBookToLibrary(obj);

    for (let input of inputs) {
        input.value = '';   
    };
    console.table(obj);
});

function deleteCard(bookCard, deleteBtn, book) {
    deleteBtn.addEventListener('click', () => {
        bookCard.remove();
        removeFromArray(book);
    });
};

function toggleStatus(toggleBtn, obj, toggleTarget) {
    toggleBtn.addEventListener('click', () => {
        if (obj.status == 'Yes' || obj.status == 'yes') {
            obj.status = 'No';
            toggleTarget.innerHTML = 'Has it been read: <strong>' + obj.status + '</strong>';
        } else if (obj.status == 'No' || obj.status == 'no') {
            obj.status = 'Yes';
            toggleTarget.innerHTML = 'Has it been read: <strong>' + obj.status + '</strong>';
        }
    })
}

function removeFromArray(obj) {
    let index = mylibrary.indexOf(obj);

    mylibrary.splice(index, 1);

    // console.log(index);
    // console.table(mylibrary);
};