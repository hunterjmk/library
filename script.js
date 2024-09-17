const mlibrary = [];

function Book(title, author, numberOfPages, status) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.status = status;
}

// const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295 pages', 'Read');

// console.table(typeof theHobbit);

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