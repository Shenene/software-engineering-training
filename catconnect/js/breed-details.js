"use strict";

// -------------------------------------------------------
// CatConnect - Breed Details
// This file displays one selected breed from The Cat API.
// -------------------------------------------------------

// Access HTML elements
const breedDetailsContainer = document.querySelector("#breedDetailsContainer");
const breedDetailsTemplate = document.querySelector("#breedDetailsTemplate");

// API endpoint
const CAT_API_URL = "https://api.thecatapi.com/v1/breeds";

// Store the current selected breed
let selectedBreed = null;

// Storing the chart, so I can control it if needed
let breedStatsChart = null;

// -------------------------------------------------------
// Get breed id from URL
// Example URL: breed-details.html?id=ragd
// -------------------------------------------------------
function getBreedIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);

  return urlParams.get("id");
}

// -------------------------------------------------------
// Load selected breed
// -------------------------------------------------------
async function loadBreedDetails() {
  try {
    const breedId = getBreedIdFromUrl();

    if (!breedId) {
      showErrorState("No breed selected.");
      return;
    }

    const response = await fetch(CAT_API_URL);

    if (!response.ok) {
      throw new Error("Could not load breed details.");
    }

    const breeds = await response.json();

    selectedBreed = breeds.find((breed) => breed.id === breedId);

    if (!selectedBreed) {
      showErrorState("Breed could not be found.");
      return;
    }

    displayBreedDetails(selectedBreed);
  } catch (error) {
    console.error(error);
    showErrorState("Unable to load breed details.");
  }
}

// -------------------------------------------------------
// Display selected breed details
// -------------------------------------------------------
function displayBreedDetails(breed) {
  breedDetailsContainer.innerHTML = "";

  const breedClone = breedDetailsTemplate.content.cloneNode(true);

  const breedImage = breedClone.querySelector(".breed-image");
  const breedTitle = breedClone.querySelector(".breed-title");
  const breedOrigin = breedClone.querySelector(".breed-origin");
  const breedDescription = breedClone.querySelector(".breed-description");
  const breedLifeSpan = breedClone.querySelector(".breed-life-span");
  const breedWeight = breedClone.querySelector(".breed-weight");
  const traitList = breedClone.querySelector(".trait-list");
  const wikipediaBtn = breedClone.querySelector("#wikipediaBtn");

  const imageUrl = getBreedImageUrl(breed);

  breedImage.src = imageUrl;
  breedImage.alt = `${breed.name} cat breed`;

  breedTitle.textContent = breed.name;
  breedOrigin.textContent = `Origin: ${breed.origin ?? "Unknown"}`;
  breedDescription.textContent = breed.description ?? "No description available.";
  breedLifeSpan.textContent = breed.life_span ? `${breed.life_span} years` : "Unknown";
  breedWeight.textContent = breed.weight?.metric ? `${breed.weight.metric} kg` : "Unknown";

  displayTraits(breed, traitList);

  if (breed.wikipedia_url) {
    wikipediaBtn.href = breed.wikipedia_url;
  } else {
    wikipediaBtn.href = "#";
    wikipediaBtn.classList.add("disabled");
    wikipediaBtn.setAttribute("aria-disabled", "true");
  }

  breedDetailsContainer.appendChild(breedClone);

  setupSaveBreedButton(breed);
  createBreedChart(breed);
}

// -------------------------------------------------------
// Get breed image
// -------------------------------------------------------
function getBreedImageUrl(breed) {
  const imageId = breed.reference_image_id;

  if (imageId) {
    return `https://cdn2.thecatapi.com/images/${imageId}.jpg`;
  }

  return "assets/images/placeholder.jpg";
}

// -------------------------------------------------------
// Display traits as chips/tags
// -------------------------------------------------------
function displayTraits(breed, traitList) {
  traitList.innerHTML = "";

  const temperament = breed.temperament ?? "Friendly, Curious, Calm";

  const traits = temperament.split(",").slice(0, 4);

  traits.forEach((trait) => {
    const traitBadge = document.createElement("span");

    traitBadge.classList.add("trait-badge");
    traitBadge.textContent = trait.trim();

    traitList.appendChild(traitBadge);
  });
}

// -------------------------------------------------------
// Chart.js chart
// -------------------------------------------------------
function createBreedChart(breed) {
  const chartCanvas = document.querySelector("#breedStatsChart");

  // Chart Data
  const chartData = {
    labels: ["Affection", "Energy", "Intelligence", "Grooming", "Child Friendly"],
    datasets: [
      {
        label: "Breed Rating",
        data: [breed.affection_level ?? 0, breed.energy_level ?? 0, breed.intelligence ?? 0, breed.grooming ?? 0, breed.child_friendly ?? 0],
        borderWidth: 1,
      },
    ],
  };

  // New Chart
  breedStatsChart = new Chart(chartCanvas, {
    type: "bar",
    data: chartData,
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          max: 5,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
}

// -------------------------------------------------------
// Save breed to localStorage
// -------------------------------------------------------
function setupSaveBreedButton(breed) {
  const saveBreedBtn = document.querySelector("#saveBreedBtn");

  const savedBreeds = getSavedBreeds();

  const isAlreadySaved = savedBreeds.some((savedBreed) => savedBreed.id === breed.id);

  updateSaveButton(saveBreedBtn, isAlreadySaved);

  saveBreedBtn.addEventListener("click", () => {
    const currentSavedBreeds = getSavedBreeds();

    const alreadySaved = currentSavedBreeds.some((savedBreed) => savedBreed.id === breed.id);

    if (alreadySaved) {
      const updatedBreeds = currentSavedBreeds.filter((savedBreed) => savedBreed.id !== breed.id);

      localStorage.setItem("catconnect-saved-breeds", JSON.stringify(updatedBreeds));
      updateSaveButton(saveBreedBtn, false);
    } else {
      const breedToSave = {
        id: breed.id,
        name: breed.name,
        origin: breed.origin,
      };

      currentSavedBreeds.push(breedToSave);

      localStorage.setItem("catconnect-saved-breeds", JSON.stringify(currentSavedBreeds));
      updateSaveButton(saveBreedBtn, true);
    }
  });
}

// -------------------------------------------------------
// Get saved breeds from localStorage
// -------------------------------------------------------
function getSavedBreeds() {
  const savedBreeds = localStorage.getItem("catconnect-saved-breeds");

  return JSON.parse(savedBreeds ?? "[]");
}

// -------------------------------------------------------
// Update Save button
// -------------------------------------------------------
function updateSaveButton(button, isSaved) {
  if (isSaved) {
    button.innerHTML = `
      <i class="bi bi-heart-fill"></i>
      <span>Saved</span>
    `;

    button.classList.add("is-saved");
  } else {
    button.innerHTML = `
      <i class="bi bi-heart"></i>
      <span>Save Breed</span>
    `;

    button.classList.remove("is-saved");
  }
}

// -------------------------------------------------------
// Error state
// -------------------------------------------------------
function showErrorState(message) {
  breedDetailsContainer.innerHTML = `
    <div class="state-message error-state">
      <i class="bi bi-exclamation-triangle"></i>
      <p>${message}</p>
      <p>Please go back and choose another breed.</p>
    </div>
  `;
}

// Load breed details when page opens
loadBreedDetails();
