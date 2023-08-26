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

        handelActive(e);
    });
});


// Switch Random Background Option

const randomBackEl = document.querySelectorAll(".random-backgrounds span");

// Loop On All Spans
randomBackEl.forEach(span => {

    // Click On Every Span
    span.addEventListener("click", (e) => {

        handelActive(e);

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



// Select Skills Skills Select

let ourSkills = document.querySelector(".skills");

window.onscroll = function () {

    // Skills Offset Top
    let skillsOffsetTop = ourSkills.offsetTop;

    // Skills Outer Height
    let skillsOuterHeight = ourSkills.offsetHeight;

    // Window Height
    let windowHeight = this.innerHeight;

    // Window Scroll Top


    let windowScrollTop = this.pageYOffset;

    if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {

        let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

        allSkills.forEach(skill => {

            skill.style.width = skill.dataset.progress;
        });

    }
};


//  Create Popuo With The Image
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {

    img.addEventListener('click', (_e) => {

        // Create Overlay Element 
        let overlay = document.createElement("div");

        // Add Class To Overlay
        overlay.className = 'popup-overlay';

        // Append Overlay To The Body

        document.body.appendChild(overlay);

        // Create The Popup

        let popupBox = document.createElement("div");

        // Add Class To The Popup Box
        popupBox.className = 'popup-box';


        if (img.alt !== null) {

            // Create Heding

            let imgHeading = document.createElement("h3");

            // Create text For Heading 

            let imgText = document.createTextNode(img.alt);

            // Append The Text To The Heading

            imgHeading.appendChild(imgText);

            // Append The Heading To The Popup Box

            popupBox.appendChild(imgHeading);

        }

        // Create The Image 

        let popupImage = document.createElement("img");

        popupImage.src = img.src;

        // Add Image To Popup Box 
        popupBox.appendChild(popupImage);

        // Append The Popup Box To Body
        document.body.appendChild(popupBox);

        // Create The Close Span 

        let closeButton = document.createElement("span");

        // Create The Close Button Text

        let closeButtonText = document.createTextNode("X");

        // Append Text To Close Button

        closeButton.appendChild(closeButtonText);

        // Add Class To Close Button

        closeButton.className = 'close-button';

        // Add Close Butttton To The Popup Box

        popupBox.appendChild(closeButton);

    });

});

// Close Popup

document.addEventListener("click", function (e) {

    if (e.target.className == 'close-button') {

        // Remove The Current Popup  

        e.target.parentNode.remove();

        // Remove OverLay 

        document.querySelector(".popup-overlay").remove();
    }
});


// Select All Bullets

const allBullets = document.querySelectorAll(".nav-bullets .bullet");

// Select All Links

const alllinks = document.querySelectorAll(".links a");

function scrollToSomewhere(elements) {

    elements.forEach(ele => {

        ele.addEventListener("click", (e) => {
            e.preventDefault();

            document.querySelector(e.target.dataset.section).scrollIntoView({

                behavior: "smooth"

            });

        });
    });

}

scrollToSomewhere(allBullets);

scrollToSomewhere(alllinks);

// Handel Active Stats

function handelActive(ev) {
    ev.target.parentElement.querySelectorAll(".active").forEach(element => {

        element.classList.remove("active")
    });

    // Add Active Class On Self
    ev.target.classList.add("active");
}