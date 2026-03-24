// Configuration
const CORRECT_PASSCODE = "1811"; // The required sequence
let currentInput = "";           // Temporary storage of user taps

// Visual configuration for the physical light emission effect
const GLOW_DURATION_MS = 280; // Total time the button should 'emit' light

/**
 * Handles a single number input, adding it to the input string,
 * triggering the glow animation, and checking the password.
 * @param {string} digit - The number tapped (0-9).
 */
function addDigit(digit) {
    // 1. Log the input locally
    currentInput += digit;
    
    // 2. TRIGGER THE EMITTED LIGHT EFFECT
    // We locate the specific button using the 'data-num' attribute set in HTML
    const pressedButton = document.querySelector(`.glass-btn[data-num="${digit}"]`);
    
    if (pressedButton) {
        // Apply the CSS class that contains the radial gradients and box-shadows
        pressedButton.classList.add('active-glow');
        
        // Remove the effect smoothly after a short, realistic duration
        setTimeout(() => {
            pressedButton.classList.remove('active-glow');
        }, GLOW_DURATION_MS);
    }
    
    // 3. SECURELY CHECK THE INPUT (once full length is reached)
    if (currentInput.length === CORRECT_PASSCODE.length) {
        // Small delay so the user sees the final button 'glow' before screen changes
        setTimeout(verifyInput, 350);
    }
}

/**
 * Verifies if the collected input matches the master code.
 */
function verifyInput() {
    if (currentInput === CORRECT_PASSCODE) {
        unlockInterface(); // SUCCESS
    } else {
        triggerDeniedAnimation(); // FAILURE
    }
}

/**
 * Resets the entry attempt.
 */
function resetInput() {
    currentInput = "";
}

/**
 * Visual feedback for a failed password attempt.
 */
function triggerDeniedAnimation() {
    const numpadContainer = document.querySelector('.glass-numpad-container');
    const title = document.querySelector('.numpad-title');
    
    // 1. Briefly change colors to indicate an error
    title.style.color = '#ff8888'; // Soft red
    title.innerText = 'ACCESS DENIED';
    
    // 2. Shake the glass container to mimic physical rejection
    numpadContainer.style.animation = 'shake 0.4s ease-in-out';
    
    // 3. Reset everything back to normal after a short pause
    setTimeout(() => {
        numpadContainer.style.animation = ''; // Clean up animation
        title.style.color = 'white';
        title.innerText = 'ENTER KEY';
        resetInput(); // Clear previous failed input
    }, 1200);
}

/**
 * Transition the site from the lock state to the video content state.
 */
function unlockInterface() {
    const lockScreen = document.getElementById('lock-screen');
    const mainContent = document.getElementById('main-content');
    
    // Phase 1: Fade out the lock screen smoothly
    lockScreen.style.transition = 'opacity 0.6s ease';
    lockScreen.style.opacity = '0';
    lockScreen.style.pointerEvents = 'none'; // Prevent further interaction
    
    // Phase 2: Fade in the main content smoothly
    setTimeout(() => {
        lockScreen.style.display = 'none'; // Completely remove from layout
        mainContent.style.display = 'flex'; // Insert into layout
        
        // Use requestAnimationFrame for smoother paint execution
        requestAnimationFrame(() => {
            mainContent.style.opacity = '1'; // Final visible state
        });
    }, 600); // Wait for fade-out to complete
}
