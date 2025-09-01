// ================== Prevent text selection (Mobile & PC) ==================
document.body.style.userSelect = "none";
document.body.style.webkitUserSelect = "none";
document.body.style.msUserSelect = "none";
document.body.style.mozUserSelect = "none";
document.body.style.webkitTouchCallout = "none";

// Prevent default touch/mouse behavior to avoid selection
['touchstart', 'touchmove', 'mousedown', 'selectstart', 'contextmenu'].forEach(evt => {
    document.addEventListener(evt, function(e){
        e.preventDefault();
    }, {passive:false});
});

// ================== Yes Button Animation ==================
yesBtn.addEventListener('click', () => {
    // Note flies away
    note.style.transform = "translateY(-200px)";
    note.style.opacity = "0";

    // Floating hearts
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.classList.add('hearts');
        heart.textContent = '💖';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = Math.random() * window.innerHeight + 'px';
        body.appendChild(heart);
        setTimeout(() => heart.remove(), 3000);
    }

    // Continuous floating love texts
    setInterval(() => {
        const text = document.createElement('div');
        text.classList.add('loveText');
        // Randomly pick a love quote or "Manish + Sayani"
        if (Math.random() < 0.5) {
            text.textContent = loveQuotes[Math.floor(Math.random() * loveQuotes.length)];
        } else {
            text.textContent = "Manish + Sayani 💕";
        }
        text.style.left = Math.random() * (window.innerWidth - 150) + 'px';
        text.style.top = Math.random() * (window.innerHeight - 50) + 'px';
        body.appendChild(text);
        setTimeout(() => text.remove(), 4000);
    }, 1000);

    // Cute cartoon (emoji hug)
    const cartoon = document.createElement('div');
    cartoon.classList.add('cartoon');
    cartoon.textContent = '🤗💑';
    cartoon.style.left = (window.innerWidth / 2 - 40) + 'px';
    cartoon.style.top = (window.innerHeight / 2 - 40) + 'px';
    body.appendChild(cartoon);
    setTimeout(() => cartoon.remove(), 4000);

    // Hide Yes/No buttons if you want
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
});