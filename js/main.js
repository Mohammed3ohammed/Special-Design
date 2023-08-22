// Select Landing Page  Element

let landingPage = document.querySelector(".landing-page");

// Get Array Of Imgs

let imgesArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

setInterval(() => {

    let randomNumber = Math.floor(Math.random() * imgesArray.length);

    //  Change Background Image Url
    landingPage.Style.backgroundImage = 'url("image/' + imgesArray[randomNumber] + '")';

}, 1000);





