/* ==========================================================================
   PREMIUM SLIDER — улучшенный код под твой дизайн
   ========================================================================== */

/* === МАССИВ С ОТЗЫВАМИ ==================================================== */

const itemsList = [
  {
    imgSrc: "img/rev-1.jpg",
    imgAlt: "Фото клиента",
    clientInfo: "Дядя Игорь, г. Москва",
    clientGrade: 5,
    clientComment:
      "Я вне себя от радости! Пицца нереально вкусная! Особенно колбасная! Колбасило не по-детски! Порекомендую мужикам с завода!",
    altData: {
      clientGrade: 1,
      clientComment:
        "Меня тошнит от ваших колбасных пицц! я не шучу! Меня буквально тошнит и мне плохо!"
    }
  },

  {
    imgSrc: "img/rev-2.jpg",
    imgAlt: "Фото клиента",
    clientInfo: "Антонио Багратто, г. Флоренция",
    clientGrade: 5,
    clientComment:
      "Я здесь и ем и живу и работаю и ем и живу и работаю. Я обожаю это место!",
    altData: {
      clientGrade: 1,
      clientComment:
        "Я здесь и ем и живу и работаю и ем и живу и работаю. Я ненавижу это место!"
    }
  },

  {
    imgSrc: "img/rev-3.jpg",
    imgAlt: "Фото клиента",
    clientInfo: "Иван Иван, г. Тверь",
    clientGrade: 5,
    clientComment:
      "Я люблю это пицца этот расположение и покупать вся еда дешево, нравится!",
    altData: {
      clientGrade: 2,
      clientComment:
        "Я простой рабочий Иван город Тверь. Жить Россия устать много налог мало зарплат, порций рис не хватать"
    }
  },

  {
    imgSrc: "img/rev-4.jpg",
    imgAlt: "Фото клиента",
    clientInfo: "Сергей, г. Сочи",
    clientGrade: 4,
    clientComment: "Вкусно, быстро и по-домашнему. Спасибо!",
    altData: {
      clientGrade: 2,
      clientComment: "Сегодня было не так вкусно, как обычно."
    }
  },

  {
    imgSrc: "img/rev-5.jpg",
    imgAlt: "Фото клиента",
    clientInfo: "Моника, г. Нью-Йорк",
    clientGrade: 5,
    clientComment: "Pizza here is perfect! I'm in love!",
    altData: {
      clientGrade: 3,
      clientComment: "Last time it was too salty…"
    }
  },

  {
    imgSrc: "img/rev-6.jpg",
    imgAlt: "Фото клиента",
    clientInfo: "Денис, г. Омск",
    clientGrade: 5,
    clientComment: "Заказываю каждую неделю! Лучшие в городе!",
    altData: {
      clientGrade: 2,
      clientComment: "Пару раз приезжало холодным…"
    }
  },

  {
    imgSrc: "img/rev-7.jpg",
    imgAlt: "Фото клиента",
    clientInfo: "Марина, г. Самара",
    clientGrade: 4,
    clientComment: "Вкусно, красиво, обслуживание топ!",
    altData: {
      clientGrade: 2,
      clientComment: "Сегодня было жирно("
    }
  },

  {
    imgSrc: "img/rev-8.jpg",
    imgAlt: "Фото клиента",
    clientInfo: "Александр, г. Казань",
    clientGrade: 5,
    clientComment: "Прекрасная атмосфера и вкус!",
    altData: {
      clientGrade: 3,
      clientComment: "Чуть подгорело тесто…"
    }
  },

  {
    imgSrc: "img/rev-9.jpg",
    imgAlt: "Фото клиента",
    clientInfo: "Света, г. Минск",
    clientGrade: 5,
    clientComment: "Лучшее место в районе ❤️",
    altData: {
      clientGrade: 1,
      clientComment: "Сегодня расстроили…"
    }
  }
];

/* === ПЕРЕМЕННЫЕ =========================================================== */

let elementIndex = 0;
const sliderLine = document.querySelector(".js-reviews__sliderLine");

let reviewItems = [];
const buttonPrev = document.querySelector(".js-slider-btn-prev");
const buttonNext = document.querySelector(".js-slider-btn-next");

/* === СОЗДАНИЕ ОТЗЫВОВ ===================================================== */

function setItems() {
  if (!sliderLine) return;

  sliderLine.innerHTML = ""; 

  itemsList.forEach((item) => {
    const alt = item.altData;

    sliderLine.innerHTML += `
      <div class="js-review-item review-item">

        <!-- основной отзыв -->
        <div class="review-item__head">
          <div class="review-item__img-container">
            <img class="review-item__img" src="${item.imgSrc}" alt="${item.imgAlt}">
          </div>
          <span class="review-item__visitor-info">${item.clientInfo}</span>

          <div class="review-item__grade-block">
            <span class="review-item__grade-icon material-symbols-outlined">kid_star</span>
            <span class="review-item__grade-value">${item.clientGrade}</span>
          </div>
        </div>

        <p class="review-item__review-text">${item.clientComment}</p>

        ${
          alt
            ? `
        <!-- альтернативный отзыв (ВНУТРИ основного блока) -->
        <div class="review-item_alt">
          <div class="review-item__head">
            <div class="review-item__img-container">
              <img class="review-item__img" src="${alt.imgSrc || item.imgSrc}" alt="${item.imgAlt}">
            </div>

            <span class="review-item__visitor-info">${item.clientInfo}</span>

            <div class="review-item__grade-block">
              <span class="review-item__grade-icon review-item__grade-icon_alt material-symbols-outlined">kid_star</span>
              <span class="review-item__grade-value">${alt.clientGrade}</span>
            </div>
          </div>

          <p class="review-item__review-text">${alt.clientComment}</p>
        </div>
        `
            : ""
        }

      </div>
    `;
  });

  reviewItems = document.querySelectorAll(".js-review-item");
}


/* === ФУНКЦИЯ ПРОКРУТКИ ==================================================== */

function slide(index) {
  if (!sliderLine || !reviewItems.length) return;

  const percent = (-100 / reviewItems.length) * index;
  sliderLine.style.transform = `translateX(${percent}%)`;
}

/* === АНИМАЦИЯ ПОЯВЛЕНИЯ ОТЗЫВОВ ========================================== */

function animateReviews() {
  document.querySelectorAll(".review-item").forEach((el, i) => {
    setTimeout(() => el.classList.add("animated"), i * 120);
  });
}

/* === ИНИЦИАЛИЗАЦИЯ ======================================================== */

setItems();
setTimeout(animateReviews, 200);

/* === СЛУШАТЕЛИ КНОПОК ===================================================== */

buttonNext?.addEventListener("click", () => {
  elementIndex++;
  if (elementIndex > reviewItems.length - 1) elementIndex = 0;
  slide(elementIndex);
});

buttonPrev?.addEventListener("click", () => {
  elementIndex--;
  if (elementIndex < 0) elementIndex = reviewItems.length - 1;
  slide(elementIndex);
});
