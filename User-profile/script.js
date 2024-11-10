// List of background images
const backgrounds = [
    './Images/back1.png',
    './Images/back2.png',
    './Images/back3.png',
    './Images/back4.png',
];

// Function to change background image
function changeBackground() {
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    document.body.style.backgroundImage = `url(${backgrounds[randomIndex]})`;
}

// Calling function to change background every 4 seconds
setInterval(changeBackground, 4000);

// Skill levels for HTML, CSS, and JavaScript (in percentages)
const skillLevels = {
    html: 90,  // HTML skill level at 90%
    css: 80,   // CSS skill level at 80%
    js: 70     // JavaScript skill level at 70%
};

// Function to set progress bar widths
function setSkillLevels() {
    document.querySelector('.html-skill').style.width = skillLevels.html + '%';
    document.querySelector('.css-skill').style.width = skillLevels.css + '%';
    document.querySelector('.js-skill').style.width = skillLevels.js + '%';
}

// Run the function when the page loads
window.addEventListener('load', setSkillLevels);

