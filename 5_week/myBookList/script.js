var books = [
    {
      title: 'The Design of EveryDay Things',
      author: 'Don Norman',
      alreadyRead: false,
      img:"https://blackwells.co.uk/jacket/l/9780465050659.webp"
    }, {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      alreadyRead: true,
      img:"https://images.thalia.media/00/-/27a9a66bf7c745bd87f603cf0c6e1609/the-most-human-human-what-artificial-intelligence-teaches-us-about-being-alive-taschenbuch-brian-christian-englisch.jpeg"
    },
    {
      title: 'Blackberry Winter',
      author: 'Sarah Jio',
      alreadyRead: false,
      img:"https://images.thalia.media/00/-/2b5c7394e0bb401d8c8af281f8597533/blackberry-winter-taschenbuch-sarah-jio-englisch.jpeg"
    }
  ];

 var bookList= document.createElement("ul");
 for(let i=0; i< books.length; i++){
    let bookItem=document.createElement("li");
    let bookImg=document.createElement("img");
    bookItem.appendChild(bookImg);
    bookImg.src=(books[i].img);
    bookImg.style.width="100px";
    bookImg.style.borderRadius="25%";
    let bookDescription = document.createTextNode(books[i].title + ' by ' + books[i].author);
    bookItem.appendChild(bookDescription);
    if (books[i].alreadyRead) {
        bookItem.style.color = 'grey';
      }
      bookList.appendChild(bookItem);
      document.body.appendChild(bookList);
    }
    
 
