document.getElementById('search-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        performSearch();
    }
});

document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    performSearch();
});

function performSearch() {
    const searchQuery = document.getElementById('search-input').value;
    if (searchQuery.trim() !== '') {
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
        window.location.href = searchUrl;
    }
}

// Add this new function at the end of the file
function createStars() {
    const starsContainer = document.querySelector('.stars');
    const starCount = 100;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.width = `${Math.random() * 3}px`;
        star.style.height = star.style.width;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 2}s`;
        starsContainer.appendChild(star);
    }
}

// Call the function when the page loads
window.addEventListener('load', createStars);
