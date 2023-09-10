const buttonList = document.querySelectorAll(".according-head");
const accordingItem = document.querySelectorAll(".according-item");
const IconButton = document.querySelector(".iconToButton");
// const topIconButton = document.querySelector(".fa-chevron-top");

const footerYear = document.querySelector(".footer-year");

// ========================
buttonList.forEach((btn) => {
  btn.addEventListener("click", function () {
    const currentAccordionItem = btn.closest(".according-item");
    accordingItem.forEach((item) => {
      if (item === currentAccordionItem) {
        item.classList.toggle("show");
        item.classList.toggle("hidden");
      }
    });
  });
});

// ========================
function showText(btn) {}
// ========================
footerYear.textContent = new Date().getFullYear();
