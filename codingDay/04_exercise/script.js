const books = [];

    function addBook() {
      const title = document.getElementById("title").value;
      const author = document.getElementById("author").value;
      const availability = document.getElementById("availability").value;
      const price = document.getElementById("price").value;

      if (title && author && availability && price) {
        books.push({ title, author, availability, price });
        displayBooks();
       
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("availability").value = "";
        document.getElementById("price").value = "";
      }
    }

    function displayBooks() {
      const bookList = document.getElementById("bookList");
      bookList.innerHTML = "";
      books.sort((a, b) => a.title.localeCompare(b.title)); 

      for (const book of books) {
        const li = document.createElement("li");
        li.textContent = `${book.title} by ${book.author} (${book.availability}), Price: $${book.price}`;
        bookList.appendChild(li);
      }
    }

   
    displayBooks();