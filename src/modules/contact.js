import contactImage from "./images/contactImage.webp";

function contactLoad() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const hero = createElement("div", { class: "hero" });
  const heroContent = createElement("div", { class: "hero-content" });

  const heroImage = createElement("img", {
    class: "hero-image",
    src: contactImage,
    alt: "Contact image",
  });

  const title = createElement("h1", { textContent: "Contact us" });
  const description = createElement("p", {
    textContent: "We are open Monday to Sunday from 11H to 16H.",
  });
  const descriptionReserv = createElement("p", {
    textContent:
      "Secure your spot today! Reserve your table with us and enjoy an unforgettable dining experience. Whether it's a special occasion or a casual meal, we’re here to make it memorable.",
  });

  const form = createContactForm();
  const contactInfo = createContactInfo();

  heroContent.appendChild(title);
  heroContent.appendChild(description);
  heroContent.appendChild(descriptionReserv);
  heroContent.appendChild(form);
  heroContent.appendChild(contactInfo);

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

function createContactForm() {
  const form = createElement("form", { class: "contact-form" });

  const nameLabel = createElement("label", { textContent: "Name:" });
  const nameInput = createElement("input", {
    type: "text",
    name: "name",
    required: true,
  });

  const emailLabel = createElement("label", { textContent: "Email:" });
  const emailInput = createElement("input", {
    type: "email",
    name: "email",
    required: true,
  });

  const messageLabel = createElement("label", { textContent: "Message:" });
  const messageInput = createElement("textarea", {
    name: "message",
    required: true,
  });

  const submitButton = createElement("button", {
    type: "submit",
    textContent: "Send Message",
  });

  form.appendChild(nameLabel);
  form.appendChild(nameInput);
  form.appendChild(emailLabel);
  form.appendChild(emailInput);
  form.appendChild(messageLabel);
  form.appendChild(messageInput);
  form.appendChild(submitButton);

  return form;
}

function createContactInfo() {
  const contactInfo = createElement("div", { class: "contact-info" });

  const phone = createElement("p", { textContent: "Phone: +33 234 567 890" });
  const email = createElement("p", {
    textContent: "Email: jorgesfood@example.com",
  });

  const socialMedia = createElement("div", { class: "social-media" });
  const socialLinks = [
    { href: "https://facebook.com", text: "Facebook" },
    { href: "https://twitter.com", text: "Twitter" },
    { href: "https://instagram.com", text: "Instagram" },
  ];

  socialLinks.forEach((link) => {
    const socialLink = createElement("a", {
      href: link.href,
      textContent: link.text,
    });
    socialMedia.appendChild(socialLink);
  });

  contactInfo.appendChild(phone);
  contactInfo.appendChild(email);
  contactInfo.appendChild(socialMedia);

  return contactInfo;
}

export default contactLoad;
