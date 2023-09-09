const toggleBtn = document.querySelector(".toggle_btn i");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".menu");
const scrollBtn = document.querySelector(".scroll-top");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

// first function
window.addEventListener("scroll", function () {
  if (
    this.document.body.scrollTop > 100 ||
    this.document.documentElement.scrollTop > 100
  ) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});
//second function
scrollBtn.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});
