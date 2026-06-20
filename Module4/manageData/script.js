"use strict";

let news = [
  { id: 1, title: "Election Results", content: "Newly elected minister..." },
  { id: 2, title: "Sporting Success", content: "World Cup winners..." },
  { id: 3, title: "Tornado Warning", content: "Residents should prepare..." },
];

// Using / Accessing:
const newsContainerEl = document.getElementById("newsContainer");
const newsFormEl = document.getElementById("newsForm");
const newsTitleEl = document.getElementById("newsTitle");
const newsContentEl = document.getElementById("newsContent");
const stopBtnEl = document.getElementById("stopBtn");

// Display all news items:
function displayNews() {
  // console.log("News refreshed");
  // clear previous news items
  newsContainerEl.innerHTML = "";

  // Loop through & create news cards
  news.forEach((item) => {
    const newsItem = document.createElement("div");
    newsItem.classList.add("news-item");

    newsItem.innerHTML = `<h2>${item.title}</h2>
    <p>${item.content}</p>`;

    newsContainerEl.appendChild(newsItem);
  });
}

// Display news when page loads
displayNews();

// check the array every 5 sec.
const newsInterval = setInterval(displayNews, 5000);

// Add new news item from the form
newsFormEl.addEventListener("submit", function (event) {
  event.preventDefault();

  const newNewsItem = {
    id: news.length + 1,
    title: newsTitleEl.value,
    content: newsContentEl.value,
  };
  news.push(newNewsItem);
  // console.log(news);

  newsTitleEl.value = "";
  newsContentEl.value = "";

  displayNews();
});

// Stop interval
stopBtnEl.addEventListener("click", function () {
  clearInterval(newsInterval);
});
