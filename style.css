:root {
    --glass-bg: rgba(255, 255, 255, 0.08);
    --glass-border: rgba(255, 255, 255, 0.1);
    --pink-glow-vibrant: #ff007f; /* Vibrant pink for the intense glow */
    --accent-pink-soft: rgba(255, 182, 193, 0.3); /* For text/headings */
}

/* Widescreen Container (16:9 Aspect Ratio) */
.main-widescreen-container {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
    background-color: #121212;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Base Style for All Glass Containers (Mirrors Control Center image) */
.glass {
    background: var(--glass-bg);
    backdrop-filter: blur(25px); /* Increased blur for deep glass effect */
    -webkit-backdrop-filter: blur(25px);
    border: 1.5px solid var(--glass-border);
    border-radius: 20px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.4);
}

/* 1. PASSWORD SCREEN */
#password-screen {
    position: absolute;
    inset: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    /* Soft pink/red gradient in the centre */
    background: radial-gradient(circle at center, var(--accent-pink-soft) 0%, #121212 70%);
}

.glass-pin-card {
    extend: .glass; /* Inherit glass properties */
    padding: 30px;
    text-align: center;
    max-width: 320px;
}

.prompt-text {
    color: white;
    font-size: 1.2rem;
    letter-spacing: 2px;
    margin-bottom: 20px;
}

.numpad {
    display: grid;
    grid-template-columns: repeat(3, 80px);
    gap: 15px;
    justify-content: center;
}

.num-btn {
    width: 80px;
    height: 80px;
    font-size: 1.8rem;
    cursor: pointer;
    transition: background 0.2s ease, transform 0.1s ease;
}

.action-btn { font-size: 1.4rem; color: #ffcccc; }

/* The Intense Pink Button Glow (On Tap) */
.num-btn.glow-on-tap {
    background: var(--pink-glow-vibrant);
    border-color: #ff66b2;
    box-shadow: 0 0 25px 5px var(--pink-glow-vibrant);
    transform: scale(0.95);
    transition: 0.05s ease;
}

/* PIN Dots Display */
.pin-display {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 25px;
}

.dot-empty {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1.5px solid #666;
}

.dot-filled {
    border-color: var(--pink-glow-vibrant);
    background: var(--pink-glow-vibrant);
    box-shadow: 0 0 8px var(--pink-glow-vibrant);
}


/* 2. MAIN VIDEO PAGE */
.hidden { display: none !important; }

#main-content {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 5;
    background: radial-gradient(circle at center, rgba(30,30,30,1) 0%, rgba(10,10,10,1) 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.glass-video-card {
    extend: .glass; /* Inherit glass properties */
    width: 90%;
    max-width: 900px;
    height: auto;
    max-height: 80%;
    display: flex;
    flex-direction: column;
    padding: 20px;
}

.main-title {
    color: var(--accent-pink-soft);
    text-shadow: 0 0 8px rgba(255, 182, 193, 0.4);
    margin-bottom: 20px;
    text-align: center;
    font-size: 1.5rem;
    letter-spacing: 1px;
}

video {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0,0,0,0.5);
}
