import "./styles.css";
import homeLoad from "./modules/home";
import menuLoad from "./modules/menu";
import contactLoad from "./modules/contact";

function initializePage() {
  const content = document.getElementById("content");

  const homeButton = document.querySelector(".home-btn");
  const menuButton = document.querySelector(".menu-btn");
  const contactButton = document.querySelector(".contact-btn");

  homeButton.addEventListener("click", () => {
    content.innerHTML = "";
    homeLoad();
  });

  menuButton.addEventListener("click", () => {
    content.innerHTML = "";
    menuLoad();
  });

  contactButton.addEventListener("click", () => {
    content.innerHTML = "";
    contactLoad();
  });

  homeLoad();
}

initializePage();
