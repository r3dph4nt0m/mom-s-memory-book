document.querySelectorAll('.page').forEach(page => {
    page.addEventListener('click', () => {
        page.classList.toggle('flipped');
    });
});
