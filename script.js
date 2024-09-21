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
