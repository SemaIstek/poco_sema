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


function friendsFind(friend){
    const friendDiv = document.createElement("div");
     friendDiv.classList.add("friend");

    const friendName = document.createElement("h2");
     friendName.textContent = friend.name;

    const friendBio = document.createElement("p");
     friendBio.textContent = friend.bio;
    
    const friendImg = document.createElement("img");
     friendImg.src = friend.image;
     friendImg.alt = friend.name;

    //Mouse over change the picture
    const hoverImage = new Image();
     hoverImage.src=friend.hoverImage;

     friendImg.addEventListener("mouseover", function () {
        //  (hoverImage )
        friendImg.src = friend.hoverImage;
    });

    friendImg.addEventListener("mouseout" , function() {
     friendImg.src= friend.image;
    });
    
    //For extra info add a div inside a friendInfo class
    const friendInfo = document.createElement("div");
     friendInfo.classList.add("friend-info");

    const friendAge = document.createElement("p");
     friendAge.textContent = "Age: " + friend.age;

    const friendEye = document.createElement("p");
     friendEye.textContent = "Eye Color: " + friend.eyeColor;

    const friendHobby = document.createElement("p");
     friendHobby.textContent = "Hobby: " + friend.hobby;

    
    //Make hidden  div for the first time
     friendInfo.classList.add("hidden");
    
    //Create a click event for more info
    friendImg.addEventListener("click", function(){
        friendInfo.classList.toggle("hidden");
       
    });
    
    friendInfo.appendChild(friendAge);
    friendInfo.appendChild(friendEye);
    friendInfo.appendChild(friendHobby);
    friendDiv.appendChild(friendName);
    friendDiv.appendChild(friendBio);
    friendDiv.appendChild(friendImg);
    friendDiv.appendChild(friendInfo);
    friendList.appendChild(friendDiv);
   
}
document.addEventListener("DOMContentLoaded", function () {
    const friendList = document.getElementById("friendList");
    
    friends.forEach(friend => {
        friendsFind(friend);
    });
});
