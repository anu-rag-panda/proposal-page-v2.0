// Add floating hearts
function createHearts() {
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDelay = Math.random() * 5 + 's';
        document.querySelector('#proposalPage').appendChild(heart);
    }
}

// Add confetti
function createConfetti() {
    const colors = ['#FFD700', '#FFA500', '#FF69B4', '#87CEEB'];
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        document.querySelector('#celebrationPage').appendChild(confetti);
    }
}

// Add rain effect
function createRain() {
    for (let i = 0; i < 30; i++) {
        const raindrop = document.createElement('div');
        raindrop.className = 'raindrop';
        raindrop.style.left = Math.random() * 100 + 'vw';
        raindrop.style.animationDelay = Math.random() * 2 + 's';
        document.querySelector('#sorrowPage').appendChild(raindrop);
    }
}

// Show/hide pages
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

// Initialize
window.onload = function() {
    createHearts();
    createConfetti();
    createRain();
};

//emailJS integration

//Initialize emailJS
emailjs.init("y7SnAZJbe8P1xOUth"); //replace with YOUR_PUBLIC_KEY

//function to send email
function sendYesEmail(responseType) {
    const message = responseType ==="yes" ? "I accept your proposal!" : "I decline your proposal!";

    emailjs.send("service_o4eecwj", "template_47mwvv8", {
        Response: message,
    })
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
    })
    .catch(function(error) {
        console.log('FAILED...', error);
    });
}

function sendNoEmail(responseType) {
    const message = responseType ==="no" ? "I decline your proposal!" : "I accept your proposal!";

    emailjs.send("service_o4eecwj", "template_dbiv8w9", {
        Response: message,
    })
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
    })
    .catch(function(error) {
        console.log('FAILED...', error);
    });
}

//add event listeners to buttons
document.getElementById("yesButton").addEventListener("click", function() {
    sendYesEmail("yes");
});

document.getElementById("noButton").addEventListener("click", function() {
    sendNoEmail("no");
});

