const burgir = document.querySelector(".burgir__menu"); 
const headernav = document.querySelector(".header__nav"); 
burgir.addEventListener("click", () => {
    burgir.classList.toggle("open");// trns the burgir to x
headernav.classList.toggle("open");// header nav appears
})
