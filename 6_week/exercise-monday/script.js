const imgTags = document.querySelectorAll("img");
imgTags.forEach(img =>{
    img.addEventListener("error", () =>{
    img.src ="/img/default.png";
    });
    img.addEventListener("mouseover", () =>
{
    alert("Hover over img-Tag");
});
});


const pTag = document.querySelector("p");
pTag.addEventListener("mouseover", () =>
{
    alert("Hover over");
    const nestedImgTag =pTag.querySelector("img");
    nestedImgTag.removeEventListener("mouseover");
});

const addSubmit = document.querySelector("form");

addSubmit.addEventListener("submit", handleFormSubmision)


function handleMouseOver(){

}
    