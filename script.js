const SECRET_PASS = "1811";
let currentInput = "";

function inputDigit(digit) {
    currentInput += digit;

    // Trigger visual glow effect
    const buttons = document.querySelectorAll('.num-btn');
    buttons.forEach(btn => {
        if (btn.innerText === digit) {
            btn.classList.add('glow-active');
            setTimeout(() => btn.classList.remove('glow-active'), 300);
        }
    });

    // Check if password length is reached
    if (currentInput.length === SECRET_PASS.length) {
        verifyPassword();
    }
}

function verifyPassword() {
    if (currentInput === SECRET_PASS) {
        unlockSite();
    } else {
        alert("Access Denied. Try again.");
        clearInput();
    }
}

function clearInput() {
    currentInput = "";
}

function unlockSite() {
    const screen = document.getElementById('password-screen');
    const content = document.getElementById('main-content');
    
    // Smooth transition
    screen.style.transition = "opacity 0.5s ease";
    screen.style.opacity = "0";
    
    setTimeout(() => {
        screen.style.display = "none";
        content.classList.remove('hidden');
        content.style.display = "block";
    }, 500);
}
