// Check If There s Local Storage Color Option
let mainColors = localStorage.getItem("color_option");

if (mainColors !== null) {
    document.documentElement.style.setProperty('--main-color', localStorage.getItem("color_option"));
    // Remove Active Class From All Colors List Item
    document.querySelectorAll(".colors-list li").forEach(element => {
        element.classList.remove("active");
        //Add Active Class On Element With Data-Color === Local Storage Item
        if (element.dataset.color === mainColors) {
            // Add Active Class
            element.classList.add("active");
        }
    });

}

// Random Background Option 

let backgroundOption = true;

// Varibale To Control The Interval 

let backgroundInterval;

// Check If There's Local Storage Random Background Item

let backgroundLocalItem = localStorage.getItem("background_option");

// Check If Random Background Local Storage Is Not Empty 

if (backgroundLocalItem !== null) {

    if (backgroundLocalItem === 'true') {

        backgroundOption = true;
    } else {
        backgroundOption = false;
    }

    // Remove Active Class From All Spans

    document.querySelectorAll(".random-backgrounds span").forEach(element => {

        element.classList.remove("active");
    });

    if (backgroundLocalItem === 'true') {

        document.querySelector(".random-backgrounds .yes").classList.add("active");

    } else {

        document.querySelector(".random-backgrounds .no").classList.add("active");

    }

}
// Toggle Spin Class On Icon 
document.querySelector(".toggle-settings .fa-gear").onclick = function () {
    // Toggle Class Fa-spin For Rotation on Self
    this.classList.toggle("fa-spin");
    // Toggle Class Open On Main Settings Box
    document.querySelector(".settings-box").classList.toggle("open");
};

// Switch Colors

const colorsLi = document.querySelectorAll(".colors-list li");

// Loop On All List Items
colorsLi.forEach(li => {
    // Click On Every List Items
    li.addEventListener("click", (e) => {
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
        // Set Color On Local Storage
        localStorage.setItem("color_option", e.target.dataset.color);

        // Remove Active Class From All Childerns
        e.target.parentElement.querySelectorAll(".active").forEach(element => {

            element.classList.remove("active")
        })
        // Add Active Class On Self
        e.target.classList.add("active");
    });
});


// Switch Random Background Option

const randomBackEl = document.querySelectorAll(".random-backgrounds span");

// Loop On All Spans
randomBackEl.forEach(span => {

    // Click On Every Span
    span.addEventListener("click", (e) => {

        //Remove Active Class From All Childerns
        e.target.parentElement.querySelectorAll(".active").forEach(element => {

            element.classList.remove("active")
        });

        // Add Active Class On Self
        e.target.classList.add("active");

        if (e.target.dataset.background === 'yes') {

            backgroundOption = true;

            randomizeImgs();

            localStorage.setItem("background_option", true)

        } else {

            backgroundOption = false;

            clearInterval(backgroundInterval);

            localStorage.setItem("background_option", false)

        }

    });
});

// // Select Landing Page  Element

let landingPage = document.querySelector(".landing-page");

// // Get Array Of Imgs

let imgsArray = ["download (1).jpg", "download.jpg", "images (1).jpg", "images (2).jpg", "images.jpg"];


// Function To Randomize Imgs 

function randomizeImgs() {

    if (backgroundOption === true) {

        backgroundInterval = setInterval(() => {

            let randomNumber = Math.floor(Math.random() * imgsArray.length);

            //  Change Background Image Url
            landingPage.style.backgroundImage = 'url("image/' + imgsArray[randomNumber] + '")';

        }, 5000);
    }
};

randomizeImgs();
