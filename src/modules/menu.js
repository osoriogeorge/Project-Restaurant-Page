import menuImage from "../images/menuImage.webp";

function loadMenu() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const hero = createElement("div", { class: "hero" });
  const heroContent = createElement("div", { class: "hero-content" });

  const heroImage = createElement("img", {
    class: "hero-image",
    src: menuImage,
    alt: "Menu image",
  });

  const title = createElement("h1", { textContent: "Menu" });

  const menuList = createElement("div", { class: "menu-cards" });

  const weeklyMenu = [
    {
      category: "Starters",
      items: [
        {
          name: "Mixed vegetable salad",
          description:
            "Fresh seasonal vegetables with olive oil and balsamic vinegar.",
        },
        {
          name: "Andalusian gazpacho",
          description: "Chilled tomato soup with cucumber, pepper, and garlic.",
        },
        {
          name: "Beef carpaccio",
          description: "Thinly sliced raw beef with parmesan and arugula.",
        },
      ],
    },
    {
      category: "First Course",
      items: [
        {
          name: "Fish soup",
          description: "Traditional fish soup with a variety of seafood.",
        },
        {
          name: "Cuban-style rice",
          description:
            "Rice cooked with tomatoes, peppers, and fried plantains.",
        },
        {
          name: "Mushroom risotto",
          description: "Creamy risotto with fresh mushrooms and parmesan.",
        },
      ],
    },
    {
      category: "Second Course",
      items: [
        {
          name: "Beef steak with roasted potatoes",
          description:
            "Grilled beef steak served with roasted potatoes and peppers.",
        },
        {
          name: "Roast chicken with vegetables",
          description:
            "Juicy roast chicken with a side of seasonal vegetables.",
        },
        {
          name: "Cod pil-pil",
          description: "Cod fillet in a garlic and olive oil sauce.",
        },
      ],
    },
    {
      category: "Dessert",
      items: [
        {
          name: "Tiramisu",
          description: "Classic Italian dessert with coffee and mascarpone.",
        },
        {
          name: "Chocolate mousse",
          description: "Light and creamy chocolate mousse.",
        },
        {
          name: "Catalan cream",
          description: "Caramelized custard with a hint of cinnamon.",
        },
      ],
    },
    {
      category: "Drinks",
      items: [
        { name: "Red wine", description: "A glass of fine Spanish red wine." },
        {
          name: "White wine",
          description: "A glass of refreshing white wine.",
        },
        {
          name: "Fresh orange juice",
          description: "100% natural orange juice.",
        },
      ],
    },
  ];

  weeklyMenu.forEach((category) => {
    const card = createMenuCard(category);
    menuList.appendChild(card);
  });

  heroContent.appendChild(title);
  heroContent.appendChild(menuList);

  hero.appendChild(heroImage);
  hero.appendChild(heroContent);

  content.appendChild(hero);
}

function createElement(type, attributes = {}) {
  const element = document.createElement(type);
  for (const [key, value] of Object.entries(attributes)) {
    if (key === "textContent") {
      element.textContent = value;
    } else {
      element.setAttribute(key, value);
    }
  }
  return element;
}

function createMenuCard(categoryData) {
  const card = createElement("div", { class: "menu-card" });

  const categoryTitle = createElement("h2", {
    textContent: categoryData.category,
  });
  card.appendChild(categoryTitle);

  const itemsList = createElement("ul");
  categoryData.items.forEach((item) => {
    const itemElement = createElement("li", { class: "dish-item" });
    itemElement.innerHTML = `<h3>${item.name}</h3><p>${item.description}</p>`;
    itemsList.appendChild(itemElement);
  });
  card.appendChild(itemsList);

  return card;
}

export default loadMenu;
