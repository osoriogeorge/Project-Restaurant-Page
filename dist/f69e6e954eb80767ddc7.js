import homeLoad from "./modules/home";
import menuLoad from "./modules/menu";
import contactLoad from "./modules/contact";

function initializePage() {
  const content = document.getElementById("content");

  const header = document.createElement("header");
  const nav = document.createElement("nav");

  const homeButton = document.createElement("button");
  homeButton.textContent = "Home";
  homeButton.classList.add("home-btn");
  homeButton.addEventListener("click", () => {
    content.innerHTML = "";
    homeLoad();
  });

  const menuButton = document.createElement("button");
  menuButton.textContent = "Menu";
  menuButton.classList.add("menu-btn");
  menuButton.addEventListener("click", () => {
    content.innerHTML = "";
    menuLoad();
  });

  const contactButton = document.createElement("button");
  contactButton.textContent = "Contact";
  contactButton.classList.add("contact-btn");
  contactButton.addEventListener("click", () => {
    content.innerHTML = "";
    contactLoad();
  });

  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);
  header.appendChild(nav);
  document.body.insertBefore(header, content);

  homeLoad();
}

initializePage();
