var pageHeader = document.querySelector(".page-header");
var navToggle = pageHeader.querySelector(".nav-toggle");
var navMain = pageHeader.querySelector(".main-nav");
var shipTo = pageHeader.querySelector(".ship-to");
var navSearch = pageHeader.querySelector(".nav-search");


var openMenu = function () {
  navMain.classList.remove("main-nav--closed");
  navMain.classList.add("main-nav--opened");
  navToggle.classList.remove("nav-toggle--closed");
  navToggle.classList.add("nav-toggle--opened");
  shipTo.classList.remove("ship-to--closed");
  shipTo.classList.add("ship-to--opened");
  navSearch.classList.remove("nav-search--closed");
  navSearch.classList.add("nav-search--opened");
};

var closeMenu = function () {
  navMain.classList.add("main-nav--closed");
  navMain.classList.remove("main-nav--opened");
  navToggle.classList.add("nav-toggle--closed");
  navToggle.classList.remove("nav-toggle--opened");
  shipTo.classList.add("ship-to--closed");
  shipTo.classList.remove("ship-to--opened");
  navSearch.classList.add("nav-search--closed");
  navSearch.classList.remove("nav-search--opened");
};


pageHeader.classList.remove("page-header--nojs");
closeMenu();

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    openMenu();
  } else {
    closeMenu();
  }
});
