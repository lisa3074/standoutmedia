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

  document.querySelectorAll(".menu_burger li:nth-child(1), .menu li:nth-child(1)").forEach((li) => {
    li.addEventListener("click", function () {
      document.querySelector("#tilbud").scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
  document.querySelectorAll(".menu_burger li:nth-child(2), .menu li:nth-child(2)").forEach((li) => {
    li.addEventListener("click", function () {
      velkommenLink();
    });
  });

  document.querySelectorAll(".menu_burger li:nth-child(3), .menu li:nth-child(3)").forEach((li) => {
    li.addEventListener("click", function () {
      console.log("click");
      velkommenLink();
    });
  });
  document.querySelectorAll(".menu_burger li:nth-child(4), .menu li:nth-child(4)").forEach((li) => {
    li.addEventListener("click", function () {
      velkommenLink();
    });
  });
  document.querySelectorAll(".menu_burger li:nth-child(5), .menu li:nth-child(5)").forEach((li) => {
    li.addEventListener("click", function () {
      velkommenLink();
    });
  });
  document.querySelectorAll(".menu_burger li:nth-child(6), .menu li:nth-child(6)").forEach((li) => {
    li.addEventListener("click", function () {
      document.querySelector("#trægulv").scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
  document.querySelectorAll(".menu_burger li:nth-child(7), .menu li:nth-child(7)").forEach((li) => {
    li.addEventListener("click", function () {
      document.querySelector("#vådrum").scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
}

function velkommenLink() {
  document.querySelector("#velkommen").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
