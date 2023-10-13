
const friends = [
    { name: "Olena", bio: "FrontEnd Developer", image: "./friends/olena.png", hoverImage: "https://ca.slack-edge.com/T1S5R6LJ3-U05N6D01C77-d0c457f3a8c2-512"},
    { name: "Kadir", bio: "IT Tester", image: "./friends/kadir.png" , hoverImage: "https://ca.slack-edge.com/T1S5R6LJ3-U05N9AJHGGJ-183e0e4e4699-512"},
    { name: "Melike", bio: "Web Developer", image: "./friends/melike.png", hoverImage: "https://ca.slack-edge.com/T1S5R6LJ3-U05N2M2TE78-34867e000e3a-512" },
    { name: "Vladimir", bio: "Data Science", image: "./friends/vlad.png", hoverImage: "https://ca.slack-edge.com/T1S5R6LJ3-U05MUQ5RECF-b8dc4db3cdc1-512" },
    { name: "Chaewon", bio: "FrontEnd Developer", image: "./friends/won.png", hoverImage: "https://ca.slack-edge.com/T1S5R6LJ3-U05N97PTYUT-ad87467badd0-512" },
    { name: "Anastasia ", bio: "FronEnd Developer", image: "./friends/ana.png", hoverImage: "https://ca.slack-edge.com/T1S5R6LJ3-U05MUQ641JT-ff1a9417160c-512" },
    { name: "Yidnekachew ", bio: "System Engineer", image: "./friends/yidnek.png",hoverImage: "https://ca.slack-edge.com/T1S5R6LJ3-U05MUQ3DZU7-f8a343d32017-512" },
    { name : "Daniel ", bio: "IT Tester", image: "./friends/daniel.png", hoverImage: "https://ca.slack-edge.com/T1S5R6LJ3-U05PLMHN25C-1ff3b2830e73-512" },
    { name: " Ersel ", bio: "Cyber Cecurity", image: "https://ca.slack-edge.com/T1S5R6LJ3-U04R48WQC1W-9152bdb59543-512", hoverImage: "https://ca.slack-edge.com/T1S5R6LJ3-U04R48WQC1W-9152bdb59543-512" },
    { name : "Marc ", bio: "Trainer", image: "https://ca.slack-edge.com/T1S5R6LJ3-U04SVJQEQG1-f56b2e7fe7d6-512", hoverImage: "https://ca.slack-edge.com/T1S5R6LJ3-U04SVJQEQG1-f56b2e7fe7d6-512" }

];


window.addEventListener("load", function () {
    const friendList = document.getElementById("friendList");
  
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

    
    const hoverImage = new Image();
    hoverImage.src = friend.hoverImage;

    friendImage.addEventListener("mouseover", function () {
        //  (hoverImage )
        friendImage.src = friend.hoverImage;
    });

    friendImage.addEventListener("mouseout", function () {
        // Orijinal image
        friendImage.src = friend.image;
    });

    friendDiv.appendChild(friendName);
    friendDiv.appendChild(friendBio);
    friendDiv.appendChild(friendImage);

    friendList.appendChild(friendDiv);
}

function searchFriends(query) {
    const results = friends.filter(friend => {
        // Search
        return friend.name.toLowerCase().includes(query.toLowerCase()) || friend.bio.toLowerCase().includes(query.toLowerCase());
    });

    return results;
}

// Search when click button
document.getElementById("search-button").addEventListener("click", function () {
    const searchInput = document.getElementById("searchInput");
    const query = searchInput.value;
    const searchResults = document.getElementById("searchResults");

    const results = searchFriends(query);

    // Print the research
    if (results.length > 0) {
        searchResults.innerHTML = "<h3>Search Results:</h3>";
        results.forEach(result => {
            const resultDiv = document.createElement("div");
            resultDiv.textContent = `${result.name} - ${result.bio}`;
            searchResults.appendChild(resultDiv);
        });
    } else {
        searchResults.innerHTML = "<p>No results found.</p>";
    }
});
    
friends.forEach(friend => {
    // const friendElement = createFriendElement(friend);
    addFriend(friend);
    // friendList.appendChild(friendElement);
});


});