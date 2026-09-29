
const show = document.getElementById('show');
const game = document.getElementById('game');
const movie = document.getElementById('movie');

function filterMedia(category) {
    if (category === 'all') {
        game.style.display = 'block';
        movie.style.display = 'block';
        show.style.display = 'block';
    } else if (category === 'game') {
        game.style.display = 'block';
        movie.style.display = 'none';
        show.style.display = 'none';
    } else if (category === 'movie') {
        game.style.display = 'none';
        movie.style.display = 'block';
        show.style.display = 'none';
    } else if (category === 'show') {
        game.style.display = 'none';
        movie.style.display = 'none';
        show.style.display = 'block';
    }
}