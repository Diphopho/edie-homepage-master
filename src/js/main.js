const hamburger = document.querySelector(".header__hamburger");
const menu = document.querySelector(".nav__menu");
const nav__list = document.querySelectorAll(".nav__list");
const close = document.querySelector(".nav__close");
const input = document.querySelector(".form__input");
const input_wrapper = document.querySelector(".input-wrapper");

const anim = document.querySelectorAll(".anim");
const work_gallery = document.querySelectorAll(".img-wrapper");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = `anim1 1s ${
        i * 0.3
      }s forwards ease-in-out`;
    } else {
      entry.target.style.animation = "none";
    }
  });
});

const obs = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    let parent = entry.target.parentNode;
    const index = Array.prototype.indexOf.call(parent.children, entry.target);
    if ((index + 1) % 2 === 0) {
      if (entry.intersectionRatio > 0) {
        entry.target.style.animation = `anim-left 1s forwards ease-in`;
      } else {
        entry.target.style.animation = "none";
      }
    } else {
      if (entry.intersectionRatio > 0) {
        entry.target.style.animation = `anim-right 1s forwards ease-in`;
      } else {
        entry.target.style.animation = "none";
      }
    }
  });
});

anim.forEach((a) => {
  observer.observe(a);
});

work_gallery.forEach((image) => {
  obs.observe(image);
});

hamburger.addEventListener("click", () => {
  open_menu();
});

nav__list.forEach((list) => {
  list.addEventListener("click", () => {
    close_menu();
  });
});

const open_menu = () => {
  menu.classList.toggle("nav__menu--active");
  for (let i = 0; i < nav__list.length; i++) {
    nav__list[i].classList.toggle("nav__list--active");
  }
  hamburger.classList.toggle("header__hamburger--hide");
};

const close_menu = () => {
  menu.classList.toggle("nav__menu--active");
  for (let i = 0; i < nav__list.length; i++) {
    nav__list[i].classList.toggle("nav__list--active");
  }
  hamburger.classList.toggle("header__hamburger--hide");
};
close.addEventListener("click", () => {
  close_menu();
});

input.addEventListener("focus", () => {
  input_wrapper.classList.toggle("input-wrapper--active");
});

input.addEventListener("blur", () => {
  input_wrapper.classList.toggle("input-wrapper--active");
});
