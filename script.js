
function filterMedia(category) {
    document.querySelectorAll('.card').forEach(card => {
        card.style.display = category === 'all' || card.classList.contains(category)
            ? 'flex'
            : 'none';
    });
}