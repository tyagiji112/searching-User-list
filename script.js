//start:
let userContainer = document.querySelector(".userContainer");
let searchInput = document.querySelector("#searchInput");

const hoverOn = () => {
    // console.log("hover ho rha ha ");
    searchInput.style.borderRadius = "12px";
};

const hoverOff = () => {
    // console.log("hover off hogya ");
    searchInput.style.borderRadius = "2px";
};
const search = (obj) => {
    console.log(searchInput.value);
    console.log(typeof(obj));
    obj.name.includes(searchInput.value);
    obj.email.includes(searchInput.value);
}

searchInput.addEventListener('mouseenter', hoverOn);   // 👈 No need of '()'
searchInput.addEventListener('mouseleave', hoverOff);  // 👈 No need of '()'
searchInput.addEventListener('input',search);

// creating logic to search by name :

let arr = [
    {
        profileUrl: "aryan mehta.jpg",
        name: "Aryan Mehta",
        email: "aryanmehta@example.com"
    },
    {
        profileUrl: "Rohit Verma.jpg",
        name: "Rohit Verma",
        email: "vermarohit@example.com"
    },
    {
        profileUrl: "Kunal Sharma.jpg",
        name: "Kunal Sharma",
        email: "shrmakunal@example.com"
    },
    {
        profileUrl: "Aanya singh.jpg",
        name: "Aanya singh",
        email: "aanyasingh@example.com"
    }
];

arr.map((obj) => {
    let divElement = document.createElement("div");
    //this backtick(`) is used to multiple line string.
    
    divElement.className = "userItem";
    divElement.innerHTML = `
    <div class="image">
    <img src="${obj.profileUrl}" alt="${obj.name}" />
    <div class="textContent">
    <h1>${obj.name}</h1>
    <p>${obj.email}</p>
    </div>
    </div>
    `
    userContainer.append(divElement)
    
});

