//start:
let userContainer = document.querySelector(".userContainer");
let searchInput = document.querySelector("#searchInput");

const hoverOn = () => {
    // console.log("hover ho rha ha ");
    searchInput.style.borderRadius = "12px";
};
searchInput.addEventListener('mouseenter', hoverOn);   // 👈 No need of '()'

const hoverOff = () => {
    // console.log("hover off hogya ");
    searchInput.style.borderRadius = "2px";
};
searchInput.addEventListener('mouseleave', hoverOff);  // 👈 No need of '()'

//handling search event of the document
const search = (obj) => {
    // console.log(searchInput.value);
    let searchValue = searchInput.value.toLowerCase();
    let filteredUser = user.filter((obj) => {
        return (obj.name.toLowerCase().includes(searchValue) ||
            obj.email.toLowerCase().includes(searchValue))
    })
    renderUser(filteredUser);
}
searchInput.addEventListener('input', search);

// creating logic to search by name :
let user = [
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
    },
    {
        profileUrl: "https://randomuser.me/api/portraits/men/32.jpg",
        name: "Aarav Mehta",
        email: "aarav.mehta@example.com"
    },
    {
        profileUrl: "https://randomuser.me/api/portraits/women/45.jpg",
        name: "Ishita Sharma",
        email: "ishita.sharma@example.com"
    },
    {
        profileUrl: "https://randomuser.me/api/portraits/men/76.jpg",
        name: "Rohan Kapoor",
        email: "rohan.kapoor@example.com"
    },
    {
        profileUrl: "https://randomuser.me/api/portraits/women/12.jpg",
        name: "Simran Kaur",
        email: "simran.kaur@example.com"
    },
    {
        profileUrl: "https://randomuser.me/api/portraits/men/85.jpg",
        name: "Devansh Verma",
        email: "devansh.verma@example.com"
    },
    {
        profileUrl: "https://randomuser.me/api/portraits/women/33.jpg",
        name: "Ananya Joshi",
        email: "ananya.joshi@example.com"
    },
    {
        profileUrl: "https://randomuser.me/api/portraits/men/14.jpg",
        name: "Kunal Singh",
        email: "kunal.singh@example.com"
    },
    {
        profileUrl: "https://randomuser.me/api/portraits/women/54.jpg",
        name: "Priya Desai",
        email: "priya.desai@example.com"
    },
    {
        profileUrl: "https://randomuser.me/api/portraits/men/21.jpg",
        name: "Rahul Nair",
        email: "rahul.nair@example.com"
    },
    {
        profileUrl: "https://randomuser.me/api/portraits/women/63.jpg",
        name: "Sneha Patil",
        email: "sneha.patil@example.com"
    }
];

//function to render any arr coming to it :
function renderUser(arr) {
    userContainer.innerHTML = ""
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

    })
}
renderUser(user);         //called the render function
