const sections = document.querySelectorAll('.quiz');
const introSection = document.querySelector('.introduction');
const introButton = document.querySelector('.button-intro');
const loadingSection = document.querySelector('.loading');
const resultSection = document.querySelector('.result');
const checkoutButton = document.querySelector('.checkout-button');
const progressBar = document.querySelector('.progress-bar');
const progressBarContainer = document.querySelector('.progress-container');

const checkoutUrl = "https://facebook.com";
let currentSection = 0;

const toggleVisibility = (element, show) => element.classList.toggle('ocultar', !show);
const updateProgressBar = (index) => {
    const progress = ((index + 1) / sections.length) * 100;
    progressBar.style.width = `${progress}%`;
};

introButton.addEventListener('click', () => {
    toggleVisibility(introSection, false);
    toggleVisibility(progressBarContainer, true);
    toggleVisibility(sections[0], true);
    updateProgressBar(0);
});

sections.forEach((section, index) => {
    section.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => goToNextSection(index));
    });
});

function goToNextSection(currentIndex) {
    toggleVisibility(sections[currentIndex], false);
    if (currentIndex + 1 < sections.length) {
        toggleVisibility(sections[currentIndex + 1], true);
        updateProgressBar(currentIndex + 1);
    } else {
        toggleVisibility(progressBarContainer, false);
        showLoadingScreen();
    }
}

function showLoadingScreen() {
    toggleVisibility(loadingSection, true);
    setTimeout(() => {
        toggleVisibility(loadingSection, false);
        toggleVisibility(resultSection, true);
    }, 3000);
}

checkoutButton.addEventListener('click', () => {
    window.location.href = checkoutUrl;
});

toggleVisibility(progressBarContainer, false);
