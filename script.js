import categories from "./categories.json" with {type: "json"};

const categoriesSelect = document.querySelector("[aria-categories]");
const choice = document.querySelector("[aria-choice]");
const choiceCard = document.querySelector("[aria-choice-card]");
const resetBtn = document.querySelector("[aria-reset]");
const startBtn = document.querySelector("[aria-start]");
const resetGameBtn = document.querySelector("[aria-reset-game]");
const cards = document.querySelector("[aria-cards]");

categoriesSelect.addEventListener("change", () => {
    choiceCard.innerHTML = "";
    resetBtn.classList.remove("game__choice-btn--active");
    startBtn.classList.remove("game__choice-btn--active");
    resetGameBtn.classList.remove("game__choice-btn--active");
    cards.innerHTML = "";
    cards.classList.remove("game__cards--active");

    choice.classList.add("game__choice--active");

    let category = categoriesSelect.value;
    category = categories[category];

    category.map((item) => {
        const card = `<div class="game__card"><img class="game__card-img" src="${item.image}" alt="${item.title}"></div>`;
        cards.insertAdjacentHTML("beforeend", card);
    })
    cards.classList.add("game__cards--active");
})

cards.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        if (choiceCard.innerHTML === "") {
            const card = `<div class="game__card"><img class="game__card-img" src="${e.target.src}" alt="${e.target.alt}"></div>`;
            choiceCard.insertAdjacentHTML("beforeend", card);

            resetBtn.classList.add("game__choice-btn--active");
            startBtn.classList.add("game__choice-btn--active");
        }
    }

    if (resetGameBtn.classList.contains("game__choice-btn--active")) {
        if (e.target.tagName === "IMG") {
            e.target.parentElement.style.visibility = "hidden";
        }
    }
})

resetBtn.addEventListener("click", () => {
    choiceCard.innerHTML = "";
    resetBtn.classList.remove("game__choice-btn--active");
    startBtn.classList.remove("game__choice-btn--active");
})

startBtn.addEventListener("click", () => {
    resetBtn.classList.remove("game__choice-btn--active");
    startBtn.classList.remove("game__choice-btn--active");
    resetGameBtn.classList.add("game__choice-btn--active");
})

resetGameBtn.addEventListener("click", () => {
    choiceCard.innerHTML = "";
    resetBtn.classList.remove("game__choice-btn--active");
    startBtn.classList.remove("game__choice-btn--active");
    resetGameBtn.classList.remove("game__choice-btn--active");
    cards.innerHTML = "";

    let category = categoriesSelect.value;
    category = categories[category];

    category.map((item) => {
        const card = `<div class="game__card"><img class="game__card-img" src="${item.image}" alt="${item.title}"></div>`;
        cards.insertAdjacentHTML("beforeend", card);
    })
})




