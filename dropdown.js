document.querySelector('.dropdown-btn').addEventListener('click', function() {
    const dropdownContent = this.nextElementSibling;
    dropdownContent.classList.toggle('show');
});

// Close dropdown when clicking outside
window.addEventListener('click', function(e) {
    if (!e.target.matches('.dropdown-btn') && !e.target.matches('.dropdown-arrow')) {
        const dropdowns = document.getElementsByClassName('dropdown-content');
        Array.from(dropdowns).forEach(dropdown => {
            if (dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            }
        });
    }
});