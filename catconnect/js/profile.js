"use strict";

// -------------------------------------------------------
// CatConnect - Profile Page
// This file loads local cat data from cats.json//
// -------------------------------------------------------

const profileContainer = document.querySelector("#profileContainer");
const profileTemplate = document.querySelector("#profileTemplate");
const profilePostTemplate = document.querySelector("#profilePostTemplate");

let profilePosts = [];

// -------------------------------------------------------
// Load local JSON data
// -------------------------------------------------------
async function loadProfile() {
  try {
    const response = await fetch("data/cats.json");

    if (!response.ok) {
      throw new Error("Could not load profile data.");
    }

    const posts = await response.json();

    profilePosts = posts;

    const profileCat = posts.find((post) => post.catName === "Fudge") ?? posts[0];

    displayProfile(profileCat, posts);
  } catch (error) {
    console.error(error);

    profileContainer.innerHTML = `
      <div class="state-message error-state">
        <i class="bi bi-exclamation-triangle"></i>
        <p>Unable to load profile.</p>
        <p>Please try again later.</p>
      </div>
    `;
  }
}

// -------------------------------------------------------
// Display profile
// -------------------------------------------------------
function displayProfile(cat, posts) {
  profileContainer.innerHTML = "";

  const profileClone = profileTemplate.content.cloneNode(true);

  const profileAvatar = profileClone.querySelector(".profile-avatar");
  const profileName = profileClone.querySelector(".profile-name");
  const profileMeta = profileClone.querySelector(".profile-meta");
  const profileBreed = profileClone.querySelector(".profile-breed");
  const profileAge = profileClone.querySelector(".profile-age");

  profileAvatar.src = cat.image;
  profileAvatar.alt = `${cat.catName} profile photo`;

  profileName.textContent = cat.catName;
  profileMeta.textContent = `${cat.breed} | ${cat.age} Years`;
  profileBreed.textContent = cat.breed;
  profileAge.textContent = `${cat.age} Years`;

  profileContainer.appendChild(profileClone);

  displayRecentPosts(posts);
}

// -------------------------------------------------------
// Display recent posts
// -------------------------------------------------------
function displayRecentPosts(posts) {
  const profilePostsContainer = document.querySelector("#profilePostsContainer");

  profilePostsContainer.innerHTML = "";

  posts.forEach((post) => {
    const postClone = profilePostTemplate.content.cloneNode(true);

    const postImage = postClone.querySelector(".profile-post-image");
    const postCaption = postClone.querySelector(".profile-post-caption");

    postImage.src = post.image;
    postImage.alt = `${post.catName} recent post image`;
    postCaption.textContent = post.caption;

    profilePostsContainer.appendChild(postClone);
  });
}

// Load profile when page opens
loadProfile();
