 async function fetchAndRenderBooks(apiUrl, showCover) {
            try {
                const response = await fetch(apiUrl);
                const books = await response.json();

                console.log(books); // Log the books data to check its structure

                const library = document.getElementById('library');
                library.innerHTML = ''; // Clear the container

                books.forEach(book => {
                    const bookCard = document.createElement('article');
                    bookCard.className = 'book-card';

                    // Conditionally show the book cover image
                    if (showCover && book.cover) {
                        const bookImg = document.createElement('img');
                        bookImg.src = book.cover;
                        bookCard.appendChild(bookImg);
                    }

                    const bookTitle = document.createElement('h2');
                    bookTitle.textContent = book.title;
                    bookCard.appendChild(bookTitle);

                    const bookAuthor = document.createElement('p');
                    bookAuthor.textContent = `Author: ${book.author}`;
                    bookCard.appendChild(bookAuthor);

                    const bookPages = document.createElement('p');
                    bookPages.textContent = `Pages: ${book.pages}`;
                    bookCard.appendChild(bookPages);

                    const bookYear = document.createElement('p');
                    bookYear.textContent = `Year: ${book.year}`;
                    bookCard.appendChild(bookYear);

                    const addButton = document.createElement('button');
                    addButton.textContent = 'Add to Cart';
                    bookCard.appendChild(addButton);

                    library.appendChild(bookCard);
                });
            } catch (error) {
                console.log(error);
            }
        }

        document.getElementById('general-books-tab').addEventListener('click', () => {
            document.getElementById('general-books-tab').classList.add('active');
            document.getElementById('children-books-tab').classList.remove('active');
            fetchAndRenderBooks('https://majazocom.github.io/Data/books.json', true);
        });

        document.getElementById('children-books-tab').addEventListener('click', () => {
            document.getElementById('children-books-tab').classList.add('active');
            document.getElementById('general-books-tab').classList.remove('active');
            fetchAndRenderBooks('https://santosnr6.github.io/Data/childrens_books.json', false);
        });

        // Load general books by default
        fetchAndRenderBooks('https://majazocom.github.io/Data/books.json', true);