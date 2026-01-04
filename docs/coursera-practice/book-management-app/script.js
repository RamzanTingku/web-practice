let books = [];

function addBook() {
    const title = document.getElementById('bookName').value;
    const author = document.getElementById('authorName').value;
    const description = document.getElementById('bookDescription').value;
    const pagesNumber = document.getElementById('pagesNumber').value;

    const book = {};
    book.title = title;
    book.author = author;
    book.description = description;
    book.pagesNumber = pagesNumber;

    if (title === '' || author === '' || description === '' || isNaN(pagesNumber)) {
        alert('Please fill in all fields.');
        return;
    }

    books.push(book);
    displayBooks();
    clearInputs();
} 

function displayBooks() {
    const booksDiv = books.map((book, index) => `<h1>book Number: ${index + 1}</h1>
        <p><strong>Book Name: </strong>${book.name}</p>
        <p><strong>Author Name:</strong> ${book.authorName}</p>
        <p><strong>Book Description:</strong> ${book.bookDescription}</p>
        <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>
        <button onclick="editBook(${index})">Edit</button>
        <button onclick="books.splice(${index}, 1); displayBooks();">Delete</button>
        <hr>`
    );
    document.getElementById('books').innerHTML = booksDiv.join('');
}

function editBook(index) {
    const book = books[index];
    document.getElementById('bookName').value = book.name;
    document.getElementById('authorName').value = book.authorName;
    document.getElementById('bookDescription').value = book.bookDescription;
    document.getElementById('pagesNumber').value = book.pagesNumber;

    books.splice(index, 1);
    displayBooks();
}

function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}