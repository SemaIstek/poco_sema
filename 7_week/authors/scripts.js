const sonuclarDiv = document.createElement("div");
const ulTag = document.createElement("ul"); // Tek bir <ul> etiketi oluşturulur

fetch("authors.json")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    for (let i = 0; i < data.length; i++) {
      let firstName = data[i].firstName;
      let lastName = data[i].lastName;
      let image = data[i].image;

      const liTag = document.createElement("li"); 
      const h1Tag = document.createElement("h1");
      const img = document.createElement("img");

      h1Tag.textContent = `${firstName} ${lastName}`;
      
      img.src = image;

      liTag.appendChild(h1Tag);
      liTag.appendChild(img);

      ulTag.appendChild(liTag); 
    }
    sonuclarDiv.appendChild(ulTag); 
    document.body.appendChild(sonuclarDiv);
  });

