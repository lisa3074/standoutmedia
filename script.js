"use strict";

window.addEventListener("DOMContentLoaded", delegation);

function delegation() {
  console.log("delegation");
  document.querySelector(".close_burger").addEventListener("click", burgerMenu);
  document.querySelector(".open_burger").addEventListener("click", burgerMenu);
  document.querySelectorAll("li").forEach((li) => {
    li.addEventListener("click", burgerMenu);
  });
  setHeight();
  scrollMenu();
}

function burgerMenu() {
  console.log("burgerMenu");
  document.querySelector(".burger").classList.toggle("fade_in");
  document.querySelector(".burger").classList.toggle("fade_out");
}

function setHeight() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  console.log(vh);
}

function scrollMenu() {
  console.log("scrollMenu");
  document.querySelectorAll(".logo").forEach((logo) => {
    logo.addEventListener("click", function () {
      console.log("click");
      document.querySelector("main").scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  });

  document.querySelectorAll(".menu_burger li, .menu li").forEach((li) => {
    li.addEventListener("click", function () {
      removeValgt();
      checkForDesktop();
      if (event.target.classList[0] == "vel") {
        const id = "#tilbud";
        velkommenLink(id);
      } else if (event.target.classList[0] == "slib" || event.target.classList[0] == "lin" || event.target.classList[0] == "vaad" || event.target.classList[0] == "trae") {
        const id = "#velkommen";
        velkommenLink(id);
      } else if (event.target.classList[0] == "om") {
        const id = "#trægulv";
        velkommenLink(id);
      } else {
        const id = "#vådrum";
        velkommenLink(id);
      }
    });
  });
}

function velkommenLink(id) {
  document.querySelector(id).scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
function removeValgt() {
  document.querySelectorAll(".menu li").forEach((li) => {
    li.classList.remove("valgt");
  });
}

function checkForDesktop() {
  console.log("desktopMenu");
  let desktop = event.target.parentNode.classList[0];
  if (desktop == "menu") {
    console.log("menu parent");
    event.target.classList.add("valgt");
  }
}
