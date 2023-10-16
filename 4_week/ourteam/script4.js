const friends = [
    { name: "Olena",bio: "FrontEnd Developer", image: "./friends/olena.png",hoverImage: "https://ca.slack-edge.com/T1S5R6LJ3-U05N6D01C77-d0c457f3a8c2-512",
        age: "30", eyeColor: "Blue", hobby: "Hiking" },
    { name: "Kadir", bio: "IT Tester", image: "./friends/kadir.png" , hoverImage: "https://ca.slack-edge.com/T1S5R6LJ3-U05N9AJHGGJ-183e0e4e4699-512",
        age: "30", eyeColor: "Brown", hobby: "Hiking" },
    { name: "Melike", bio: "Web Developer", image: "./friends/melike.png", hoverImage: "https://ca.slack-edge.com/T1S5R6LJ3-U05N2M2TE78-34867e000e3a-512", 
        age: "30", eyeColor: "Brown", hobby: "Hiking"},
    { name: "Vladimir", bio: "Data Science", image: "./friends/vlad.png", hoverImage: "https://ca.slack-edge.com/T1S5R6LJ3-U05MUQ5RECF-b8dc4db3cdc1-512",
        age: "30", eyeColor: "Brown", hobby: "Hiking" },
    { name: "Chaewon", bio: "FrontEnd Developer", image: "./friends/won.png", hoverImage: "https://ca.slack-edge.com/T1S5R6LJ3-U05N97PTYUT-ad87467badd0-512",
        age: "30", eyeColor: "Brown", hobby: "Hiking" },
    { name: "Anastasia ", bio: "FronEnd Developer", image: "./friends/ana.png", hoverImage: "https://ca.slack-edge.com/T1S5R6LJ3-U05MUQ641JT-ff1a9417160c-512",
        age: "30", eyeColor: "Brown", hobby: "Hiking" },
    { name: "Yidnekachew ", bio: "System Engineer", image: "./friends/yidnek.png",hoverImage: "https://ca.slack-edge.com/T1S5R6LJ3-U05MUQ3DZU7-f8a343d32017-512",
        age: "30", eyeColor: "Brown", hobby: "Hiking" },
    { name : "Daniel ", bio: "IT Tester", image: "./friends/daniel.png", hoverImage: "https://ca.slack-edge.com/T1S5R6LJ3-U05PLMHN25C-1ff3b2830e73-512",
        age: "30", eyeColor: "Brown", hobby: "Hiking" },
    { name: " Ersel ", bio: "Cyber Cecurity", image: "https://ca.slack-edge.com/T1S5R6LJ3-U04R48WQC1W-9152bdb59543-512", hoverImage: "https://ca.slack-edge.com/T1S5R6LJ3-U04R48WQC1W-9152bdb59543-512" ,
        age: "30", eyeColor: "Brown", hobby: "Hiking" },
    { name : "Marc ", bio: "Trainer", image: "https://ca.slack-edge.com/T1S5R6LJ3-U04SVJQEQG1-f56b2e7fe7d6-512", hoverImage: "https://ca.slack-edge.com/T1S5R6LJ3-U04SVJQEQG1-f56b2e7fe7d6-512",
        age: "30", eyeColor: "Brown", hobby: "Hiking" }

];

// ...

function addFriend(friend) {
    const friendDiv = document.createElement("div");
    friendDiv.classList.add("friend");

    const friendName = document.createElement("h2");
    friendName.textContent = friend.name;

    const friendBio = document.createElement("p");
    friendBio.textContent = friend.bio;

    const friendImage = document.createElement("img");
    friendImage.src = friend.image;
    friendImage.alt = friend.name;

    // Ekstra bilgiyi görünür yapmak için yeni bir div ekleyin
    const additionalInfo = document.createElement("div");
    additionalInfo.classList.add("additional-info");
    additionalInfo.textContent = friend.additionalInfo;

    // Ayrıntıları başlangıçta gizlemek için sınıf ekleyin
    additionalInfo.classList.add("hidden");

    friendImage.addEventListener("click", function () {
        // Tıkladığınızda ekstra bilgiyi göster veya gizle
        additionalInfo.classList.toggle("hidden");
    });

    friendDiv.appendChild(friendName);
    friendDiv.appendChild(friendBio);
    friendDiv.appendChild(friendImage);
    friendDiv.appendChild(additionalInfo);

    friendList.appendChild(friendDiv);
}
