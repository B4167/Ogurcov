// ----- ДАННЫЕ МЕНЮ -----
const menuLists = [
    {
        menuListId: 0,
        menuListName: "Pizza",
        menuListItems: [
            {
                itemName: "Пепперони",
                itemImgSrc: "img/pizza-1.jpg",
                itemImgAlt: "Пицца Пепперони",
                itemComposition: "Острая пепперони и сыр моцарелла",
                itemPrice: "550 ₽"
            },
            {
                itemName: "4 сыра",
                itemImgSrc: "img/pizza-2.jpg",
                itemImgAlt: "Пицца 4 сыра",
                itemComposition: "Пармезан, дор-блю, моцарелла, чеддер",
                itemPrice: "490 ₽"
            },
            {
                itemName: "Маргарита",
                itemImgSrc: "img/pizza-3.jpg",
                itemImgAlt: "Пицца Маргарита",
                itemComposition: "Томаты, базилик, оливковое масло",
                itemPrice: "450 ₽"
            }
        ]
    },

    {
        menuListId: 1,
        menuListName: "Salads",
        menuListItems: [
            {
                itemName: "Салат №1",
                itemImgSrc: "img/Salads1.jpg",
                itemImgAlt: "Салат 1",
                itemComposition: "Свежие овощи и зелень",
                itemPrice: "300 ₽"
            },
            {
                itemName: "Салат №2",
                itemImgSrc: "img/Salads2.jpg",
                itemImgAlt: "Салат 2",
                itemComposition: "Курица, салат айсберг, соус Цезарь",
                itemPrice: "350 ₽"
            },
            {
                itemName: "Салат №3",
                itemImgSrc: "img/Salads3.jpg",
                itemImgAlt: "Салат 3",
                itemComposition: "Томаты, сыр, зелень",
                itemPrice: "250 ₽"
            }
        ]
    },

    {
        menuListId: 2,
        menuListName: "Drinks",
        menuListItems: [
            {
                itemName: "Напиток №1",
                itemImgSrc: "img/Drinks1.jpg",
                itemImgAlt: "Напиток 1",
                itemComposition: "Газированный напиток",
                itemPrice: "150 ₽"
            },
            {
                itemName: "Напиток №2",
                itemImgSrc: "img/Drinks2.jpg",
                itemImgAlt: "Напиток 2",
                itemComposition: "Фруктовый сок",
                itemPrice: "180 ₽"
            },
            {
                itemName: "Напиток №3",
                itemImgSrc: "img/Drinks3.jpg",
                itemImgAlt: "Напиток 3",
                itemComposition: "Холодный чай",
                itemPrice: "160 ₽"
            }
        ]
    }
];


// ----- ЭЛЕМЕНТЫ -----
const menuNavList = document.querySelectorAll(".js-menu__nav-item");
const menuItemsBlock = document.querySelector(".js-menu__menu-items-block");

let menuItems = [];
let activeMenuId = 0;


// ----- ПОСТРОЕНИЕ МЕНЮ -----
function setMenu() {
    menuLists.forEach(menuList => {
        let listHtml = `
            <ul class="js-menu__menu-items-list menu__menu-items-list menu__menu-items-list_hidden" 
                data-menu-id="${menuList.menuListId}">
        `;

        menuList.menuListItems.forEach(item => {
            listHtml += `
                <li class="menu-item">
                    <div class="menu-item__img-container">
                        <img class="menu-item__img" src="${item.itemImgSrc}" alt="${item.itemImgAlt}">
                    </div>
                    <div class="menu-item__info-block">
                        <span class="menu-item__name">${item.itemName}</span>
                        <span class="menu-item__composition">${item.itemComposition}</span>
                        <span class="menu-item__price">${item.itemPrice}</span>
                    </div>
                </li>
            `;
        });

        listHtml += `</ul>`;

        menuItemsBlock.innerHTML += listHtml;
    });

    // Сохраняем ссылки
    menuItems = document.querySelectorAll(".js-menu__menu-items-list");

    // Включаем первую вкладку
    setActiveMenu(0);
}


// ----- АКТИВНАЯ ВКЛАДКА -----
function setActiveMenu(id) {
    activeMenuId = id;

    menuItems.forEach(list => {
        list.classList.add("menu__menu-items-list_hidden");
    });

    menuNavList.forEach(nav => {
        nav.classList.remove("menu__nav-item_active");
    });

    document
        .querySelector(`.js-menu__menu-items-list[data-menu-id="${id}"]`)
        .classList.remove("menu__menu-items-list_hidden");

    document
        .querySelector(`.js-menu__nav-item[data-menu-list-id="${id}"]`)
        .classList.add("menu__nav-item_active");
}


// ----- СЛУШАТЕЛИ -----
menuNavList.forEach(nav => {
    nav.addEventListener("click", () => {
        let id = nav.getAttribute("data-menu-list-id");
        if (id != activeMenuId) setActiveMenu(id);
    });
});


// ----- СТАРТ -----
setMenu();
