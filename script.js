const menuItems = document.querySelectorAll('li');
const filterInput = document.getElementById('filter');

filterInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    menuItems.forEach((item) => {
        const itemName = item.querySelector('h3').textContent.toLowerCase();
        if (itemName.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});