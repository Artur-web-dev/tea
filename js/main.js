const menuBtn = document.querySelector(".menu__btn");
const menuClose = document.querySelector(".menu__close");
const menuList = document.querySelector(".menu__list");
const menuShadow = document.querySelector(".menu-bg");
const body = document.body;

menuBtn.addEventListener("click", () => {
	body.style.overflow = "hidden";
	menuList.classList.add("menu__list_open");
	menuShadow.classList.add("menu-bg_open");
});
menuClose.addEventListener("click", () => {
	menuList.classList.remove("menu__list_open");
	menuShadow.classList.remove("menu-bg_open");
	body.style.overflow = "visible";
});
menuShadow.addEventListener("click", () => {
	menuList.classList.remove("menu__list_open");
	menuShadow.classList.remove("menu-bg_open");
	body.style.overflow = "visible";
});
