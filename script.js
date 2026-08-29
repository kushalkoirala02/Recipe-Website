const links = document.querySelectorAll(".navlinks a");

links.forEach(link => {
    if (link.href === window.location.href) {
        link.parentElement.classList.add("navactive");
    }
});


//Hero Sections 

let imgHero = document.getElementById("imghero");
let heroVideo = document.getElementById("herovideo");
let playBtn = document.querySelector(".play-btn");
let h2text = document.getElementById("h2text");
let h3text = document.getElementById("h3text");

function playVideo() {

    imgHero.style.display = "none";
    playBtn.style.display = "none";
    h2text.style.display = "none"
    h3text.style.display = "none";
    heroVideo.style.display = "block";


}

if (playBtn) {
    playBtn.addEventListener("click", playVideo);
}



// Loadmore -BTN
// Load More Button
function displayBox() {

    let recipeBoxes = document.querySelectorAll(".recipebox1");
    let loadmore = document.getElementById("loadmore");

    if (loadmore.textContent == "Load More") {

        for (let i = 0; i < recipeBoxes.length; i++) {
            recipeBoxes[i].style.display = "block";
        }

        loadmore.textContent = "Hide";

    } else {

        for (let i = 0; i < recipeBoxes.length; i++) {
            recipeBoxes[i].style.display = "none";
        }

        loadmore.textContent = "Load More";
    }
}
function displayCategory(category, clickedButton) {

    let boxes = document.querySelectorAll(".recipebox, .recipebox1");
    let loadmore = document.getElementById("loadmore");
    let buttons = document.querySelectorAll(".buttonrecipes > div:first-child button");

    // Remove active from all buttons
    buttons.forEach(function(button) {
        button.classList.remove("active");
    });

    // Add active to clicked button
    clickedButton.classList.add("active");


    // ALL
    if (category === "all") {

        boxes.forEach(function(box) {

            if (box.classList.contains("recipebox")) {
                box.style.display = "block";
            } 
            else {
                box.style.display = "none";
            }

        });

        loadmore.style.display = "block";
    }


    // OTHER CATEGORIES
    else {

        boxes.forEach(function(box) {

            if (box.classList.contains(category)) {
                box.style.display = "block";
            } 
            else {
                box.style.display = "none";
            }

        });

        loadmore.style.display = "none";
    }
}
// Comments Boxes 
 
function iconClicked(icon) {

    icon.classList.toggle("fa-regular");
    icon.classList.toggle("fa-solid");
    icon.classList.toggle("active");

}


function commentBoxgenerate() {

    console.log("Button Clicked!");

    const userNameElement = document.getElementById("nameinput");
    const userCommentElement = document.getElementById("commentinput");
    const ratingContainer = document.getElementById("regular-icons");
    const commentsContainer = document.getElementById("box");

    const allStars = ratingContainer.querySelectorAll(".fa-star");

    let filledIcons = ratingContainer.querySelectorAll(".fa-solid");

    console.log("Selected stars:", filledIcons.length);

    let starHTML = "";

    for (let i = 0; i < filledIcons.length; i++) {
        starHTML += `<i class="fa-solid fa-star"></i>`;
    }
    
console.log("Selected stars:", filledIcons.length);
console.log("Star HTML:", starHTML);

    let newBox = document.createElement("div");
    newBox.classList.add("maincommentbox");

    newBox.innerHTML = `
        <div class="profilediv2">
            <i class="fa-solid fa-user"></i>
        </div>

        <div class="comment-box">

            <div>
                <h2>${userNameElement.value}</h2>
                <p>${userCommentElement.value}</p>
            </div>

            <div class="icons1">
                ${starHTML}
            </div>

        </div>
    `;

    commentsContainer.appendChild(newBox);

    userNameElement.value = "";
    userCommentElement.value = "";

    // Reset the 5 rating stars
    for (let i = 0; i < allStars.length; i++) {
        allStars[i].classList.remove("fa-solid");
        allStars[i].classList.add("fa-regular");
        allStars[i].classList.remove("active");
    }
}


const search = document.getElementById("recipeSearch");

if (search) {

    const recipes = document.querySelectorAll(".recipebox, .recipebox1");

    search.addEventListener("input", function () {

        let text = search.value.toLowerCase();

        recipes.forEach(function(recipe) {

            let name = recipe.innerText.toLowerCase();

            if (name.includes(text)) {
                recipe.style.display = "block";
            } else {
                recipe.style.display = "none";
            }

        });

    });

}



const form = document.getElementById("formid");

form.addEventListener("submit", function () {
    setTimeout(() => {
        form.reset();
    }, 1000);
});


const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", function () {
    console.log("Button Clicked");

    mobileMenu.classList.toggle("active");

    if (mobileMenu.classList.contains("active")) {
        hamburger.textContent = "✕";
    } else {
        hamburger.textContent = "☰";
    }

});