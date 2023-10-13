const friends = [
    { name: "Olena", bio: "FrontEnd Developer", image: "https://ca.slack-edge.com/T1S5R6LJ3-U05N6D01C77-d0c457f3a8c2-512" },
    { name: "Kadir", bio: "IT Tester", image: "https://ca.slack-edge.com/T1S5R6LJ3-U05N9AJHGGJ-183e0e4e4699-512" },
    { name: "Melike", bio: "Web Developer", image: "https://ca.slack-edge.com/T1S5R6LJ3-U05N2M2TE78-34867e000e3a-512" },
    // Diğer arkadaşlar
];

function createFriendElement(friend) {
    const friendDiv = document.createElement("div");
    friendDiv.classList.add("friend");

    const friendName = document.createElement("h2");
    friendName.textContent = friend.name;

    const friendBio = document.createElement("p");
    friendBio.textContent = friend.bio;

    const friendImage = document.createElement("img");
    friendImage.src = friend.image;
    friendImage.alt = friend.name;

    friendImage.addEventListener("mouseover", function () {
        
        friendImage.src = "C:\Users\MainUser\Desktop\friends\olena.png"; 
    });

    friendImage.addEventListener("mouseout", function () {
        
        friendImage.src = friend.image;
    });

    friendDiv.appendChild(friendName);
    friendDiv.appendChild(friendBio);
    friendDiv.appendChild(friendImage);

    return friendDiv;
}

document.addEventListener("DOMContentLoaded", function () {
    const friendList = document.getElementById("friendList");
    
    friends.forEach(friend => {
        const friendElement = createFriendElement(friend);
        friendList.appendChild(friendElement);
    });
});
