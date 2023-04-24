// check if there is already data in local storage
const books = JSON.parse(localStorage.getItem('books') || []);

// Global variables
const bookList = document.querySelector('#book-list');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const addBtn = document.querySelector('#add-btn');
const errorMsg = document.querySelector('#error-msg');

// Display existing books in the collection
function displayBooks() {
  bookList.innerHTML = '';
  books.forEach((book, index) => {
    const title = document.createElement('p');
    const author = document.createElement('p');
    title.textContent = book.title;
    author.textContent = book.author;
    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remove';
    // Listen for the remove event
    removeBtn.onclick = () => {
      removeBook(index);
    };
    bookList.appendChild(title);
    bookList.appendChild(author);
    bookList.appendChild(removeBtn);
  });
}

// Add a new book to the collection
function addBook() {
  const title = titleInput.value;
  const author = authorInput.value;
  if (title === '' || author === '') {
    errorMsg.style.display = 'block';
    return;
  }

  books.push({ title, author });
  localStorage.setItem('books', JSON.stringify(books));
  displayBooks();
  titleInput.value = '';
  authorInput.value = '';
}

// Listen for the click event when user add the book
addBtn.onclick = () => {
  addBook();
};

// Remove the targeted book from the collection
function removeBook(index) {
  books.splice(index, 1);
  localStorage.setItem('books', JSON.stringify(books));
  displayBooks();
}

// Display existing book on page load
displayBooks();