// Initialize books array from localStorage or empty array
let books = JSON.parse(localStorage.getItem('books')) || [];

// Function to display all books in the collection on the page
function displayBooks() {
  const bookList = document.getElementById('book-list');
  bookList.innerHTML = '';
  books.forEach((book, index) => {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    bookDiv.innerHTML = `
      <p class="title">Title: ${book.title}</p>
      <p class="author">Author: ${book.author}</p>
      <button type="button" class="remove-btn" data-index="${index}">Remove</button>
    `;
    bookList.appendChild(bookDiv);
  });
}

// Function to add a new book to the collection
function addBook(title, author) {
  books.push({ title, author });
  localStorage.setItem('books', JSON.stringify(books));
  displayBooks();
}

// Function to remove a book from the collection
function removeBook(index) {
  books = books.filter((book, i) => i !== index);
  localStorage.setItem('books', JSON.stringify(books));
  displayBooks();
}

// Event listener for Add button
const addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', () => {
  const titleInput = document.getElementById('title');
  const authorInput = document.getElementById('author');
  const errorMsg = document.getElementById('error-msg');
  if (titleInput.value.trim() === '' || authorInput.value.trim() === '') {
    errorMsg.style.display = 'block';
  } else {
    addBook(titleInput.value.trim(), authorInput.value.trim());
    titleInput.value = '';
    authorInput.value = '';
    errorMsg.style.display = 'none';
  }
});

// Event listener for Remove button
const bookList = document.getElementById('book-list');
bookList.onclick = (event) => {
  if (event.target.classList.contains('remove-btn')) {
    const index = Number(event.target.dataset.index);
    removeBook(index);
  }
};

// Initial display of books on page load
displayBooks();
