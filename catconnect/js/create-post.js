"use strict";

// -------------------------------------------------------
// CatConnect - Create Post
// This file controls image preview, caption counter,
// mood selection validation and publish feedback.
// -------------------------------------------------------

const createPostForm = document.querySelector("#createPostForm");
const catPhotoInput = document.querySelector("#catPhotoInput");
const imagePreview = document.querySelector("#imagePreview");
const uploadLabel = document.querySelector(".upload-label");
const captionInput = document.querySelector("#captionInput");
const captionCounter = document.querySelector("#captionCounter");

const postSuccessModal = new bootstrap.Modal(document.querySelector("#postSuccessModal"));
const postErrorModal = new bootstrap.Modal(document.querySelector("#postErrorModal"));

let selectedImage = "";

// Image preview
catPhotoInput.addEventListener("change", () => {
  const file = catPhotoInput.files[0];

  if (!file) {
    selectedImage = "";
    imagePreview.hidden = true;
    uploadLabel.hidden = false;
    return;
  }

  selectedImage = URL.createObjectURL(file);

  imagePreview.src = selectedImage;
  imagePreview.alt = "Preview of uploaded cat photo";
  imagePreview.hidden = false;
  uploadLabel.hidden = true;
});

// Caption counter
captionInput.addEventListener("input", () => {
  const captionLength = captionInput.value.length;
  captionCounter.textContent = `${captionLength} / 200`;
});

// Form submit
createPostForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const caption = captionInput.value.trim();
  const selectedMood = document.querySelector('input[name="mood"]:checked');

  if (!selectedImage || !caption || !selectedMood) {
    postErrorModal.show();
    return;
  }

  postSuccessModal.show();

  createPostForm.reset();
  captionCounter.textContent = "0 / 200";
  imagePreview.hidden = true;
  uploadLabel.hidden = false;
  selectedImage = "";
});
