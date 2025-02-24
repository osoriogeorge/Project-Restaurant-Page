import restaurantImage from "../images/restaurantImage.webp";

function initialLoad() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const hero = document.createElement("div");
  hero.classList.add("hero");

  const heroImage = document.createElement("img");
  heroImage.classList.add("hero-image");
  heroImage.src = restaurantImage;
  heroImage.alt = "Restaurant image";

  const heroContent = document.createElement("div");
  heroContent.classList.add("hero-content");

  const title = document.createElement("h1");
  title.textContent = "Welcome to our restaurant";

  const description = document.createElement("p");
  description.textContent =
    "Enjoy the best food in a cozy and family-friendly atmosphere! Our restaurant offers a wide variety of delicious dishes that you'll love.";

  heroContent.appendChild(title);
  heroContent.appendChild(description);

  hero.appendChild(heroImage);
  hero.appendChild(heroContent);

  content.appendChild(hero);
}

export default initialLoad;
