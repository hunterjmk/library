const mylibrary = [];

function Book(title, author, numberOfPages, status) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.status = status;
}

function addBookToLibrary(object) {
    const book = new Book(object.title, object.author, object.pageNumber, object.status);

    mylibrary.push(book);;
}


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

cancelBtn.addEventListener('click', () => {
    modal.close();
})

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const obj = Object.fromEntries(formData);

    addBookToLibrary(obj);

    for (let input of inputs) {
        input.value = '';   
    };
    console.table(obj);
})