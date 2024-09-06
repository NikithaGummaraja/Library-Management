document.getElementById('bookForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const title = document.getElementById('bookTitle').value;
    const author = document.getElementById('bookAuthor').value;
    
    if (title && author) {
        addBookToList(title, author);
        clearForm();
    }
});

function addBookToList(title, author) {
    const li = document.createElement('li');
    li.textContent = `${title} by ${author}`;
    
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove');
    removeBtn.addEventListener('click', function() {
        li.remove();
    });
    
    li.appendChild(removeBtn);
    document.getElementById('books').appendChild(li);
}

function clearForm() {
    document.getElementById('bookTitle').value = '';
    document.getElementById('bookAuthor').value = '';
}
