class BookCollection {
  constructor() {
    // Initialize books array from localStorage or empty array
    this.books = JSON.parse(localStorage.getItem('books')) || [];
    // Grab the element from the HTML document
    this.bookList = document.getElementById('book-list');
    this.titleInput = document.getElementById('title');
    this.authorInput = document.getElementById('author');
    this.errorMsg = document.getElementById('error-msg');
    this.addBtn = document.getElementById('add-btn');

    this.displayBooks();
    // Event listener for Add button
    this.addBtn.addEventListener('click', this.handleAddBook.bind(this));
    // Event listener for Remove button
    this.bookList.addEventListener('click', this.handleRemoveBook.bind(this));
  }

  // Function to display all books in the collection on the page
  displayBooks() {
    this.bookList.innerHTML = '';
    this.books.forEach((book, index) => {
      const bookDiv = document.createElement('div');
      bookDiv.classList.add('book');
      bookDiv.innerHTML = `
        <p class="title">"${book.title}" &nbsp; by &nbsp; ${book.author}</p>
        <button type="button" class="remove-btn" data-index="${index}">Remove</button>
      `;
      this.bookList.appendChild(bookDiv);
    });
  }

  // Function to add a new book to the collection
  addBook(title, author) {
    this.books.push({ title, author });
    localStorage.setItem('books', JSON.stringify(this.books));
    this.displayBooks();
  }

  // Function to remove a book from the collection
  removeBook(index) {
    this.books = this.books.filter((book, i) => i !== index);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.displayBooks();
  }

  handleAddBook() {
    if (this.titleInput.value.trim() === '' || this.authorInput.value.trim() === '') {
      this.errorMsg.style.display = 'block';
    } else {
      this.addBook(this.titleInput.value.trim(), this.authorInput.value.trim());
      this.titleInput.value = '';
      this.authorInput.value = '';
      this.errorMsg.style.display = 'none';
    }
  }

  handleRemoveBook(event) {
    if (event.target.classList.contains('remove-btn')) {
      const index = Number(event.target.dataset.index);
      this.removeBook(index);
    }
  }
}

const bookCollection = new BookCollection();
BookCollection(bookCollection);
