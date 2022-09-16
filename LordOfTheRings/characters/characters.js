let hamToggle = document.querySelector(".hamburger"),
    navigation = document.querySelector(".navigation"),
    book_titles = document.querySelector('.book-titles');

// Hamburger Menu
document.onclick = function (e) {
    if (e.target !== hamToggle && e.target !== navigation) {
        hamToggle.classList.remove("active");
        navigation.classList.remove("active");
    }
};

hamToggle.onclick = function () {
    hamToggle.classList.toggle("active");
    navigation.classList.toggle("active");

};

import { retrievedCharacters } from "../index.js";

console.log(retrievedCharacters)