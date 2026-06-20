"use strict";

const postList = document.querySelector("#post-list");
const postTemplate = document.querySelector("#post-template");

const defaultLimit = 10;

function addPostCard(title, body) {
  const template = postTemplate.content.cloneNode(true);

  template.querySelector(".card-title").textContent = title;
  template.querySelector(".card-text").textContent = body;

  postList.appendChild(template);
}

async function fetchPosts(limit = defaultLimit) {
  const response = await fetch(`http://jsonplaceholder.typicode.com/posts?_limit=${limit}`);

  const posts = await response.json();

  posts.forEach((post) => {
    addPostCard(post.title, post.body);
  });
}

fetchPosts();
