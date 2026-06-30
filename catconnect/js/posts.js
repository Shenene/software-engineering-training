"use strict";

// -------------------------------------------------------
// CatConnect - Home Feed Posts
// This file loads local cat post data from data/cats.json
// -------------------------------------------------------

// Using / Accessing
const postsContainer = document.querySelector("#postsContainer");
const postTemplate = document.querySelector("#postTemplate");
const postSearchInput = document.querySelector("#postSearchInput");

// Storing all posts after they are loaded from cats.json
let allPosts = [];

const moodIcons = {
  happy: "assets/moods/selected/happy.svg",
  sleepy: "assets/moods/selected/hungry.svg",
  royal: "assets/moods/selected/royal.svg",
  playful: "assets/moods/selected/playful.svg",
  hungry: "assets/moods/selected/sleepy.svg",
};

const moodLabels = {
  happy: "Happy",
  sleepy: "Sleepy",
  royal: "Royal",
  playful: "Playful",
  hungry: "Hungry",
};

// -------------------------------------------------------
// Load posts from local JSON file
// -------------------------------------------------------
async function loadPosts() {
  try {
    // Fetch local JSON data
    const response = await fetch("data/cats.json");

    // If the file cannot be loaded, show an error
    if (!response.ok) {
      throw new Error("Could not load cat posts.");
    }

    // Convert JSON response into JavaScript data
    const posts = await response.json();

    // Save the posts into the global array
    allPosts = posts;

    // Display all posts on the page
    displayPosts(allPosts);
  } catch (error) {
    console.error(error);

    postsContainer.innerHTML = `
      <p class="text-danger">Unable to load cat posts.</p>
    `;
  }
}

// -------------------------------------------------------
// Display posts on the page
// -------------------------------------------------------
function displayPosts(posts) {
  // Clear anything currently inside the posts container
  postsContainer.innerHTML = "";

  // If there are no posts to show, display an empty message
  if (posts.length === 0) {
    postsContainer.innerHTML = `
      <div class="empty-state">
        <p>No cat posts found.</p>
        <p>Try another search.</p>
      </div>
    `;

    return;
  }

  // Looping through each post and creating a card from the template
  posts.forEach((post) => {
    // Cloning the template
    const postClone = postTemplate.content.cloneNode(true);

    // Finding the elements inside the cloned card
    const catNameEl = postClone.querySelector(".post-cat-name");
    const timeEl = postClone.querySelector(".post-time");
    const moodEl = postClone.querySelector(".post-mood");
    const imageEl = postClone.querySelector(".post-image");
    const captionEl = postClone.querySelector(".post-caption");

    // Adding data into the cloned card
    catNameEl.textContent = post.catName;
    timeEl.textContent = post.time;

    // -------------------------------------------------------

    const moodIcon = moodIcons[post.mood] ?? moodIcons.happy;
    const moodLabel = moodLabels[post.mood] ?? "Happy";

    moodEl.innerHTML = `
  <img class="post-mood-icon" src="${moodIcon}" alt="" aria-hidden="true" />
  <span>${moodLabel}</span>
  `;

    moodEl.setAttribute("aria-label", `Mood: ${moodLabel}`);

    // -------------------------------------------------------

    imageEl.src = post.image;
    imageEl.alt = `${post.catName} cat post image`;
    captionEl.textContent = post.caption;

    // Adding the finished card to the page
    postsContainer.appendChild(postClone);
  });
}

// -------------------------------------------------------
// Search cat posts
// -------------------------------------------------------
function searchPosts() {
  const searchText = postSearchInput.value.toLowerCase().trim();

  const filteredPosts = allPosts.filter((post) => {
    const catName = post.catName.toLowerCase();
    const caption = post.caption.toLowerCase();
    const breed = post.breed.toLowerCase();
    const mood = post.mood.toLowerCase();

    return catName.includes(searchText) || caption.includes(searchText) || breed.includes(searchText) || mood.includes(searchText);
  });

  displayPosts(filteredPosts);
}

// -------------------------------------------------------
// Event Listeners
// -------------------------------------------------------
postSearchInput.addEventListener("input", searchPosts);

// Load posts when the page first opens
loadPosts();
