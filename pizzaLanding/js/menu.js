// ======================================================================
//   MENU — улучшенная версия
// ======================================================================

// ----- ДАННЫЕ МЕНЮ -----
const menuLists = [
    {
        id: 0,
        name: "Pizza",
        items: [
            {
                name: "Пепперони",
                img: "img/pizza-1.jpg",
                alt: "Пицца Пепперони",
                composition: "Острая пепперони и сыр моцарелла",
                price: "550 ₽"
            },
            {
                name: "4 сыра",
                img: "img/pizza-2.jpg",
                alt: "Пицца 4 сыра",
                composition: "Пармезан, дор-блю, моцарелла, чеддер",
                price: "490 ₽"
            },
            {
                name: "Маргарита",
                img: "img/pizza-3.jpg",
                alt: "Пицца Маргарита",
                composition: "Томаты, базилик, оливковое масло",
                price: "450 ₽"
            }
        ]
    },

    {
        id: 1,
        name: "Salads",
        items: [
            {
                name: "Салат №1",
                img: "img/Salads1.jpg",
                alt: "Салат 1",
                composition: "Свежие овощи и зелень",
                price: "300 ₽"
            },
            {
                name: "Салат №2",
                img: "img/Salads2.jpg",
                alt: "Салат 2",
                composition: "Курица, салат айсберг, соус Цезарь",
                price: "350 ₽"
            },
            {
                name: "Салат №3",
                img: "img/Salads3.jpg",
                alt: "Салат 3",
                composition: "Томаты, сыр, зелень",
                price: "250 ₽"
            }
        ]
    },

    {
        id: 2,
        name: "Drinks",
        items: [
            {
                name: "Напиток №1",
                img: "img/Drinks1.jpg",
                alt: "Напиток 1",
                composition: "Газированный напиток",
                price: "150 ₽"
            },
            {
                name: "Напиток №2",
                img: "img/Drinks2.jpg",
                alt: "Напиток 2",
                composition: "Фруктовый сок",
                price: "180 ₽"
            },
            {
                name: "Напиток №3",
                img: "img/Drinks3.jpg",
                alt: "Напиток 3",
                composition: "Холодный чай",
                price: "160 ₽"
            }
        ]
    }
];


// ===== ЭЛЕМЕНТЫ =====
const menuNavList = document.querySelectorAll(".js-menu__nav-item");
const menuItemsBlock = document.querySelector(".js-menu__menu-items-block");

let activeMenuId = 0;
let menuItemsHtmlLists = [];


// ======================================================================
//   СОЗДАНИЕ СПИСКОВ МЕНЮ
// ======================================================================

function buildMenuLists() {
    const fragment = document.createDocumentFragment();

    menuLists.forEach(list => {
        const ul = document.createElement("ul");
        ul.className = "js-menu__menu-items-list menu__menu-items-list menu__menu-items-list_hidden";
        ul.dataset.menuId = list.id;

        // Добавляем все пункты меню
        ul.innerHTML = list.items.map(item => `
            <li class="menu-item">
                <div class="menu-item__img-container">
                    <img class="menu-item__img" src="${item.img}" alt="${item.alt}">
                </div>
                <div class="menu-item__info-block">
                    <span class="menu-item__name">${item.name}</span>
                    <span class="menu-item__composition">${item.composition}</span>
                    <span class="menu-item__price">${item.price}</span>
                </div>
            </li>
        `).join("");

        fragment.appendChild(ul);
    });

    menuItemsBlock.appendChild(fragment);
    menuItemsHtmlLists = document.querySelectorAll(".js-menu__menu-items-list");
}


// ======================================================================
//   СМЕНА ВКЛАДКИ
// ======================================================================

function setActiveMenu(id) {
    id = Number(id);
    activeMenuId = id;

    // скрываем всё
    menuItemsHtmlLists.forEach(list => {
        list.classList.add("menu__menu-items-list_hidden");
    });

    menuNavList.forEach(nav => {
        nav.classList.remove("menu__nav-item_active");
    });

    // показываем нужный
    const activeList = document.querySelector(`.js-menu__menu-items-list[data-menu-id="${id}"]`);
    activeList.classList.remove("menu__menu-items-list_hidden");

    // активная кнопка
    const activeBtn = document.querySelector(`.js-menu__nav-item[data-menu-list-id="${id}"]`);
    activeBtn.classList.add("menu__nav-item_active");
}


// ======================================================================
//   СЛУШАТЕЛИ
// ======================================================================

menuNavList.forEach(nav => {
    nav.addEventListener("click", () => {
        const id = nav.dataset.menuListId;
        if (id != activeMenuId) {
            setActiveMenu(id);
        }
    });
});


// ======================================================================
//   СТАРТ
// ======================================================================

buildMenuLists();
setActiveMenu(0);
