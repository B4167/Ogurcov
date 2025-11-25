// ======================================================================
// HEADER — премиальный, оптимизированный, улучшенный
// ======================================================================

// Элементы
const mainHeader = document.querySelector(".js-body__header");
const hamburger = document.querySelector(".js-hamburger");
const navList = document.querySelector(".js-nav-list");
const navListItems = document.querySelectorAll(".js-nav-list__item");

// Настройки
const OFFSET_HIDE = 200;
const ADAPTIVE_WIDTH = 1000;

// Переменные состояния
let lastScroll = 0;
let menuOpen = false;

// Хэлперы
const scrollY = () => window.pageYOffset || document.documentElement.scrollTop;
const isAdaptive = () => window.innerWidth <= ADAPTIVE_WIDTH;

// ----------------------------------------------------------------------
// Функции меню
// ----------------------------------------------------------------------

function openMenu() {
    menuOpen = true;
    hamburger.classList.add("hamburger_active");
    navList.classList.remove("nav-list_hided");
}

function closeMenu() {
    menuOpen = false;
    hamburger.classList.remove("hamburger_active");
    navList.classList.add("nav-list_hided");
}

function toggleMenu() {
    menuOpen ? closeMenu() : openMenu();
}

// ----------------------------------------------------------------------
// Скрытие хедера при скролле
// ----------------------------------------------------------------------

window.addEventListener("scroll", () => {
    const current = scrollY();

    // Скрываем хедер только на адаптиве и только когда меню закрыто
    if (isAdaptive() && !menuOpen) {

        // скролл вниз — скрыть
        if (current > lastScroll && current > OFFSET_HIDE) {
            mainHeader.classList.add("body__header_hided");
        }
        // скролл вверх — показать
        else if (current < lastScroll) {
            mainHeader.classList.remove("body__header_hided");
        }

    }

    lastScroll = current;
});

// ----------------------------------------------------------------------
// Клик по бургеру
// ----------------------------------------------------------------------

hamburger.addEventListener("click", () => {
    if (isAdaptive()) toggleMenu();
});

// ----------------------------------------------------------------------
// Закрытие меню при клике по пункту
// ----------------------------------------------------------------------

navListItems.forEach(item => {
    item.addEventListener("click", () => {
        if (isAdaptive()) closeMenu();
    });
});

// ----------------------------------------------------------------------
// Автоматическое закрытие меню при ресайзе
// ----------------------------------------------------------------------

window.addEventListener("resize", () => {
    if (!isAdaptive()) {
        closeMenu();  // если выйти на ПК — меню должно быть закрыто
    }
});
