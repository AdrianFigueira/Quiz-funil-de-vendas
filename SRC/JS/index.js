const sections = document.querySelectorAll('.quiz');
const introSection = document.querySelector('.introduction');
const introButton = document.querySelector('.button-intro');
const loadingSection = document.querySelector('.loading');
const resultSection = document.querySelector('.result');
const checkoutButton = document.querySelector('.checkout-button');
const progressBarContainer = document.querySelector('.progress-container');

const checkoutUrl = "https://google.com";

introButton.addEventListener('click', () => {
    introSection.classList.add('ocultar');
    sections[0].classList.remove('ocultar');
    updateProgressBar(0); // Inicia a barra no início
});

function goToNextSection(currentIndex) {
    sections[currentIndex].classList.add('ocultar');
    if (currentIndex + 1 < sections.length) {
        sections[currentIndex + 1].classList.remove('ocultar');
        updateProgressBar(currentIndex + 1); // Atualiza a barra conforme o índice da seção
    } else {
        showLoadingScreen();
    }
}

sections.forEach((section, index) => {
    const buttons = section.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            goToNextSection(index);
        });
    });
});

function showLoadingScreen() {
    loadingSection.classList.remove('ocultar');
    setTimeout(() => {
        loadingSection.classList.add('ocultar');
        resultSection.classList.remove('ocultar');
    }, 3000);
}

checkoutButton.addEventListener('click', () => {
    window.location.href = checkoutUrl;
});

let lastProgress = 0;

function updateProgressBar(currentSectionIndex) {
    const progressBar = document.querySelector('.progress-bar');
    const totalSections = sections.length;
    const progress = ((currentSectionIndex + 1) / totalSections) * 100;

    progressBar.style.width = '0%'; // Inicia a animação do zero
    setTimeout(() => {
        progressBar.style.width = `${progress}%`;
    }, 100); 
    lastProgress = progress;
}

let currentSection = 0;

document.querySelectorAll('.buttonPg1, .buttonPg2, .buttonPg3, .buttonPg4, .buttonPg5').forEach(button => {
    button.addEventListener('click', () => {
        currentSection++;
        updateProgressBar(currentSection);
    });
});

function toggleProgressBar(show) {
    if (show) {
        progressBarContainer.classList.remove('ocultar');
    } else {
        progressBarContainer.classList.add('ocultar');
    }
}

introButton.addEventListener('click', () => {
    introSection.classList.add('ocultar');
    toggleProgressBar(true); 
    sections[0].classList.remove('ocultar');
    updateProgressBar(0);
});

function goToNextSection(currentIndex) {
    sections[currentIndex].classList.add('ocultar');
    if (currentIndex + 1 < sections.length) {
        sections[currentIndex + 1].classList.remove('ocultar');
        updateProgressBar(currentIndex + 1);
    } else {
        toggleProgressBar(false); 
        showLoadingScreen();
    }
}

function showLoadingScreen() {
    loadingSection.classList.remove('ocultar');
    toggleProgressBar(false);
    setTimeout(() => {
        loadingSection.classList.add('ocultar');
        resultSection.classList.remove('ocultar');
    }, 3000);
}

toggleProgressBar(false);