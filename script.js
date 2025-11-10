// Tab Switching
document.querySelectorAll('.tab').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.menu-list').forEach(l => l.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');
    });
});

// Search Functionality
const searchIcon = document.getElementById('searchIcon');
const searchBar = document.getElementById('searchBar');
const closeSearch = document.getElementById('closeSearch');
const searchInput = document.getElementById('searchInput');

searchIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    searchBar.classList.toggle('active');
    if (searchBar.classList.contains('active')) searchInput.focus();
});

closeSearch.addEventListener('click', () => {
    searchBar.classList.remove('active');
    searchInput.value = '';
    showAll();
});

document.addEventListener('click', (e) => {
    if (!searchBar.contains(e.target) && !searchIcon.contains(e.target)) {
        searchBar.classList.remove('active');
        searchInput.value = '';
        showAll();
    }
});

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();
    document.querySelectorAll('.item').forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = query === '' || text.includes(query) ? 'flex' : 'none';
    });
});

function showAll() {
    document.querySelectorAll('.item').forEach(item => {
        item.style.display = 'flex';
    });
}