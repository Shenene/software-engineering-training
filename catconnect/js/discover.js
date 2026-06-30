"use strict";

// -------------------------------------------------------
// CatConnect - Discover Cats
// This file loads breed data from The Cat API.
// -------------------------------------------------------

// Access HTML elements
const breedSearchInput = document.querySelector("#breedSearchInput");
const filterSelect = document.querySelector("#filterSelect");
const sortSelect = document.querySelector("#sortSelect");

const recommendedBreedsContainer = document.querySelector("#recommendedBreeds");
const popularBreedsContainer = document.querySelector("#popularBreeds");
const allBreedsContainer = document.querySelector("#allBreeds");

const breedItemTemplate = document.querySelector("#breedItemTemplate");

// API endpoint
const CAT_API_URL = "https://api.thecatapi.com/v1/breeds";

// Store all breeds here after loading
let allBreeds = [];

// -------------------------------------------------------
// Load breeds from The Cat API
// -------------------------------------------------------
async function loadBreeds() {
  try {
    showLoadingState();

    const response = await fetch(CAT_API_URL);

    if (!response.ok) {
      throw new Error("Could not load breeds.");
    }

    const breeds = await response.json();

    allBreeds = breeds;

    displayBreedSections(allBreeds);
  } catch (error) {
    console.error(error);
    showErrorState();
  }
}

// -------------------------------------------------------
// Display breed sections
// -------------------------------------------------------
function displayBreedSections(breeds) {
  clearBreedContainers();

  if (breeds.length === 0) {
    showNoResultsState();
    return;
  }

  const recommendedBreeds = breeds.slice(0, 4);
  const popularBreeds = breeds.slice(4, 8);
  const allBreedResults = breeds.slice(0, 12);

  recommendedBreeds.forEach((breed) => {
    recommendedBreedsContainer.appendChild(createBreedItem(breed));
  });

  popularBreeds.forEach((breed) => {
    popularBreedsContainer.appendChild(createBreedItem(breed));
  });

  allBreedResults.forEach((breed) => {
    allBreedsContainer.appendChild(createBreedItem(breed));
  });
}

// -------------------------------------------------------
// Created one breed item from the template
// -------------------------------------------------------
function createBreedItem(breed) {
  const breedClone = breedItemTemplate.content.cloneNode(true);

  const breedLink = breedClone.querySelector(".breed-item");
  const breedName = breedClone.querySelector(".breed-name");

  breedName.textContent = breed.name;

  breedLink.href = `breed-details.html?id=${breed.id}`;
  breedLink.setAttribute("aria-label", `View details for ${breed.name}`);

  return breedClone;
}

// -------------------------------------------------------
// Search / filter / sort (Update breed results)
// -------------------------------------------------------
function updateBreedResults() {
  // Get current user selections
  const searchText = breedSearchInput.value.toLowerCase().trim();
  const selectedFilter = filterSelect.value;
  const selectedSort = sortSelect.value;

  // Search breeds
  let filteredBreeds = allBreeds.filter((breed) => {
    return breed.name.toLowerCase().includes(searchText);
  });

  // Apply filters
  if (selectedFilter === "energy") {
    filteredBreeds = filteredBreeds.filter((breed) => breed.energy_level >= 4);
  }

  if (selectedFilter === "affection") {
    filteredBreeds = filteredBreeds.filter((breed) => breed.affection_level >= 4);
  }

  if (selectedFilter === "intelligence") {
    filteredBreeds = filteredBreeds.filter((breed) => breed.intelligence >= 4);
  }

  if (selectedFilter === "childFriendly") {
    filteredBreeds = filteredBreeds.filter((breed) => breed.child_friendly >= 4);
  }

  if (selectedFilter === "origin") {
    filteredBreeds = filteredBreeds.filter((breed) => breed.origin);
  }

  // Apply sorting
  if (selectedSort === "nameAZ") {
    filteredBreeds.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (selectedSort === "nameZA") {
    filteredBreeds.sort((a, b) => b.name.localeCompare(a.name));
  }

  if (selectedSort === "highestEnergy") {
    filteredBreeds.sort((a, b) => b.energy_level - a.energy_level);
  }

  if (selectedSort === "highestIntelligence") {
    filteredBreeds.sort((a, b) => b.intelligence - a.intelligence);
  }

  if (selectedSort === "highestAffection") {
    filteredBreeds.sort((a, b) => b.affection_level - a.affection_level);
  }

  // Display results
  displayBreedSections(filteredBreeds);
}

// -------------------------------------------------------
// UI states
// -------------------------------------------------------
function clearBreedContainers() {
  recommendedBreedsContainer.innerHTML = "";
  popularBreedsContainer.innerHTML = "";
  allBreedsContainer.innerHTML = "";
}

function showLoadingState() {
  clearBreedContainers();
  recommendedBreedsContainer.innerHTML = `
    <div class="state-message">
      <p>Loading breeds...</p>
    </div>
  `;
}

function showNoResultsState() {
  clearBreedContainers();
  recommendedBreedsContainer.innerHTML = `
    <div class="state-message">
      <p>No breeds found.</p>
      <p>Try another search.</p>
    </div>
  `;
}

function showErrorState() {
  clearBreedContainers();
  recommendedBreedsContainer.innerHTML = `
    <div class="state-message error-state">
      <i class="bi bi-exclamation-triangle"></i>
      <p>Unable to load breeds.</p>
      <p>Try again.</p>
    </div>
  `;
}

// -------------------------------------------------------
// Event listeners
// -------------------------------------------------------
breedSearchInput.addEventListener("input", updateBreedResults);
filterSelect.addEventListener("change", updateBreedResults);
sortSelect.addEventListener("change", updateBreedResults);

// Load breeds when page opens
loadBreeds();
