"use strict";

// console.log("connected");

// const template = document.getElementById("card-template").content.cloneNode(true);

// template.querySelector(".card-title").textContent = "Card Title 1";
// template.querySelector(".card-text").textContent = "This is the card description...";

// document.querySelector("#card-list").appendChild(template);

// ===================================================================================

// ⁡⁣⁣⁢Exercise 1 - Dynamic cards⁡

function addCard(title, text) {
  // clone the template
  const template = document.getElementById("card-template").content.cloneNode(true);
  // populate the template
  template.querySelector(".card-title").innerText = title;
  template.querySelector(".card-text").innerText = text;

  // include the populated template into the page
  document.querySelector("#card-list").appendChild(template);
}
// addCard();

addCard("Card 1", "This is my card 1 description");

addCard("Card 2", "This is my card 2 description");

//
// ----------------------------------------------------------------------------------
// ⁡⁣⁣⁢

// Exercise 2 - Dynamic cards from an array⁡

const data = [
  { name: "bob", age: 23 },
  { name: "alice", age: 39 },
];

data.forEach((person) => {
  addCard(person.name, `Age: ${person.age}`);
});

//
// ----------------------------------------------------------------------------------
// ⁡⁣⁣⁢

// ⁡⁣⁣⁢Exercise 3⁡
const artists = [
  {
    name: "Van Gogh",
    portfolio: [
      { title: "portrait", url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image" },
      { title: "sky", url: "https://mymodernmet.com/wp/wpcontent/uploads/2020/11/White-house-night-van-goh-worldwide-2.jpg" },
    ],
  },

  {
    name: "Artist 2",
    portfolio: [
      { title: "portrait 1", url: "#" },
      { title: "portrait 2", url: "#" },
    ],
  },
];

// addCard(artist.name, "Artist profile");

artists.forEach((artist) => {
  addCard(artist.name, "Artist profile");

  artist.portfolio.forEach((painting) => {
    addCard(painting.title, `url: ${painting.url}`);
  });
});
