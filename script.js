// Setting the password as per your request
const SECRET_PASS = "1811";
let currentInput = "";

// Handles visual feedback and input
function inputDigit(digit) {
    if (currentInput.length >= SECRET_PASS.length) return; // Prevent extra entry

    currentInput += digit;
    
    // 1. Identify and activate the tapped button's glow
    const buttons = document.querySelectorAll('.num-btn');
    buttons.forEach(btn => {
        if (btn.innerText === digit) {
            btn.classList.add('glow-on-tap');
            // Remove glow after a brief period
            setTimeout(() => btn.classList.remove('glow-on-tap'), 300);
        }
    });

    // 2. Update the PIN placeholder dots
    updatePinDots();
}

function updatePinDots() {
    const dots = document.querySelectorAll('.pin-display span');
    dots.forEach((dot, index) => {
        if (index < currentInput.length) {
            dot.classList.add('dot-filled');
            dot.classList.remove('dot-empty');
        } else {
            dot.classList.remove('dot-filled');
            dot.classList.add('dot-empty');
        }
    });
}

function clearInput() {
    currentInput = "";
    updatePinDots();
}

function verifyPassword() {
    // Only check if all digits were entered
    if (currentInput.length !== SECRET_PASS.length) {
        alert("Enter a 4-digit code.");
        return;
    }

    if (currentInput === SECRET_PASS) {
        unlockSite();
    } else {
        alert("ACCESS DENIED. PLEASE RETRY.");
        clearInput();
    }
}

// Seamless transition between screens
function unlockSite() {
    const screen = document.getElementById('password-screen');
    const content = document.getElementById('main-content');
    
    // Smooth transition
    screen.style.transition = "opacity 0.6s ease, filter 0.6s ease";
    screen.style.opacity = "0";
    screen.style.filter = "blur(10px)";
    
    setTimeout(() => {
        screen.style.display = "none";
        content.classList.remove('hidden');
        content.style.display = "flex";
    }, 600);
}
