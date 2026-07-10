const heartGrid = document.getElementById('heart-grid');
const greetingText = document.getElementById('greeting-text');
const cakeContainer = document.getElementById('cake-container');
const card = document.querySelector('.card');
const char = document.getElementById('char');

// Coordinates to map out a heart shape on a grid [row, col]
const heartShapeCoords = [
    [0, 1], [0, 2], [0, 4], [0, 5],
    [1, 0], [1, 3], [1, 6],
    [2, 0], [2, 6],
    [3, 1], [3, 5],
    [4, 2], [4, 4],
    [5, 3]
];

let index = 0;

function spawnHearts() {
    if (index < heartShapeCoords.length) {
        // Change character to look like it's shooting a heart
        char.innerHTML = '🥺👉💖'; 
        
        const [row, col] = heartShapeCoords[index];
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.className = 'small-heart';
        
        // Position based on grid coordinates (spacing them by 25px)
        heart.style.top = (row * 25) + 'px';
        heart.style.left = (col * 25) + 'px';
        
        heartGrid.appendChild(heart);

        // Trigger animation
        setTimeout(() => {
            heart.style.opacity = '1';
            heart.style.transform = 'scale(1)';
        }, 10);

        index++;
        
        // Return character to normal slightly after shooting
        setTimeout(() => { char.innerHTML = '🥺👉'; }, 100);

        // Call the next heart
        setTimeout(spawnHearts, 150); 
    } else {
        // Step 2: Once the big heart is formed, show text and floating particles
        setTimeout(() => {
            greetingText.style.opacity = '1';
            startFloatingHearts();
        }, 500);

        // Step 3: Fade out the heart grid and fade in the cake
        setTimeout(() => {
            heartGrid.style.opacity = '0';
            cakeContainer.style.opacity = '1';
        }, 2500);
    }
}

function startFloatingHearts() {
    // Generate floating hearts from the bottom
    setInterval(() => {
        const floatHeart = document.createElement('div');
        floatHeart.innerHTML = '💖';
        floatHeart.className = 'floating-heart';
        
        // Random horizontal position within the card
        floatHeart.style.left = Math.random() * 90 + '%';
        floatHeart.style.bottom = '20px';
        
        card.appendChild(floatHeart);
        
        // Clean up DOM elements after animation ends
        setTimeout(() => {
            floatHeart.remove();
        }, 3000);
    }, 400); 
}

// Start the sequence after a short delay
setTimeout(spawnHearts, 1000);
