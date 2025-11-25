document.addEventListener("DOMContentLoaded", () => {
  // ----- ДАННЫЕ ФОТО -----
  const items = [
    {
      itemId: 0,
      imgSrc: "img/interior/interior-1.png",
      imgAlt: "Наш прекрасный ресторан до реставрации"
    },
    {
      itemId: 1,
      imgSrc: "img/interior/interior-2.png",
      imgAlt: "Наш умопомрачительный ресторан после реставрации"
    },
    {
      itemId: 2,
      imgSrc: "img/interior/interior-3.png",
      imgAlt: "Причина реставрации ресторана"
    },
    {
      itemId: 3,
      imgSrc: "img/interior/interior-4.png",
      imgAlt: "Кухонная мебель также важна..."
    }
  ];

  // ----- ЭЛЕМЕНТЫ -----
  const collageViewImg = document.querySelector(".js-collage__view-box-img");
  const collageViewText = document.querySelector(".js-collage__view-text");
  const collageItemsList = document.querySelector(".js-collage__collage-items-list");

  // если секции нет на странице — выходим
  if (!collageViewImg || !collageViewText || !collageItemsList) return;

  let collageItems = [];
  let collageActiveItem = null;
  let activeItemId = items[0].itemId;

  // ----- СОЗДАЁМ МИНИАТЮРЫ -----
  function setItems() {
    const fragment = document.createDocumentFragment();

    items.forEach(item => {
      const li = document.createElement("li");
      li.className = "js-collage-item collage-item shadow-out";
      li.dataset.collageId = item.itemId;

      li.innerHTML = `
        <img
          class="collage-item__img collage-item__img_touchable"
          src="${item.imgSrc}"
          alt="${item.imgAlt}"
        >
      `;

      fragment.appendChild(li);
    });

    collageItemsList.appendChild(fragment);
    collageItems = document.querySelectorAll(".js-collage-item");

    // выставляем первый активный элемент без анимации
    setCollageActive(activeItemId, false);
  }

  // ----- СМЕНА АКТИВНОГО ЭЛЕМЕНТА -----
  function setCollageActive(id, withFade = true) {
    activeItemId = id;
    collageActiveItem = document.querySelector(`.js-collage-item[data-collage-id="${activeItemId}"]`);

    const activeArrayItem = items.find(i => i.itemId === activeItemId);
    if (!collageActiveItem || !activeArrayItem) return;

    const startFade = () => {
      collageViewImg.classList.add("anim-no-opacity");
      collageViewText.classList.add("anim-no-opacity");
    };

    const updateContent = () => {
      collageViewImg.setAttribute("src", activeArrayItem.imgSrc);
      collageViewImg.setAttribute("alt", activeArrayItem.imgAlt);
      collageViewText.textContent = activeArrayItem.imgAlt;

      collageViewImg.classList.remove("anim-no-opacity");
      collageViewText.classList.remove("anim-no-opacity");
    };

    if (withFade) {
      startFade();
      setTimeout(updateContent, 300);
    } else {
      updateContent();
    }

    // выделение активной миниатюры
    collageItems.forEach(item => item.classList.remove("collage-item_active"));
    collageActiveItem.classList.add("collage-item_active");
  }

  // ----- ЛИСТЕНЕРЫ -----
  function addListeners() {
    collageItemsList.addEventListener("click", (event) => {
      const item = event.target.closest(".js-collage-item");
      if (!item) return;

      const id = Number(item.dataset.collageId);
      if (id === activeItemId) return;

      setCollageActive(id, true);
    });
  }

  // ----- СТАРТ -----
  setItems();
  addListeners();
});
