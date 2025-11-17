const btn = document.getElementById('reviews__toggle');
const hiddenReviews = document.querySelectorAll('.review.hidden');

let expanded = false;

btn.addEventListener('click', () => {
    expanded = !expanded;

    hiddenReviews.forEach(el => {
        el.style.display = expanded ? 'flex' : 'none';
    });

    btn.textContent = expanded ? 'Скрыть' : 'Показать ещё';
});
