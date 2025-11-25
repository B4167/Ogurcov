document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('reviews__toggle');
    const hiddenReviews = document.querySelectorAll('.review.hidden');

    let expanded = false;

    btn.addEventListener('click', () => {
        expanded = !expanded;

        hiddenReviews.forEach(el => {
            if (expanded) {
                el.classList.remove('review--hidden');
                el.classList.remove('hidden');   // чтобы не ломался флекс
            } else {
                el.classList.add('review--hidden');
                setTimeout(() => el.classList.add('hidden'), 350);
            }
        });

        btn.textContent = expanded ? 'Скрыть' : 'Показать ещё';
    });

    // Изначально скрываем плавно
    hiddenReviews.forEach(el => el.classList.add('review--hidden'));
});
