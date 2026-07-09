"use strict";

// 𝗨𝘀𝗶𝗻𝗴 / 𝗔𝗰𝗰𝗲𝘀𝘀𝗶𝗻𝗴
const productsContainer = document.getElementById("productsContainer");
const categorySelect = document.getElementById("categorySelect");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");

// ----------------------------------------------------------------------

// 𝗦𝘁𝗼𝗿𝗲 𝗮𝗹𝗹 𝗽𝗿𝗼𝗱𝘂𝗰𝘁𝘀 𝗵𝗲𝗿𝗲 𝗮𝗳𝘁𝗲𝗿 𝗹𝗼𝗮𝗱𝗶𝗻𝗴 𝗳𝗿𝗼𝗺 𝗔𝗣𝗜
let allProducts = [];

// Get products from Express backend
axios.get("api/products").then((response) => {
  allProducts = response.data;

  // console.log(allProducts);

  // pass allProducts into function
  displayProducts(allProducts); // ⁡⁢⁣⁣creates product cards⁡
  createCategoryDropdown(allProducts); // creates the category dropdown
});

// ----------------------------------------------------------------------

// ⁡⁢⁣⁣Display products as Bootstrap cards⁡
function displayProducts(products) {
  productsContainer.innerHTML = ""; // clear page

  // loop through products
  products.forEach((product) => {
    // Create Bootstrap column
    const productCard = document.createElement("div");
    productCard.classList.add("col-md-4");

    // Add card HTML
    productCard.innerHTML = `
      <div class="card shadow-sm">
        <img src="${product.image}" class="card-img-top" alt="${product.title}" />

        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${product.title}</h5>

          <p class="price">$${product.price.toFixed(2)}</p>

          <p class="card-text">
            ${product.description}
          </p>

          <p class="mt-auto">
            <span class="category-icon">${getCategoryIcon(product.category)}</span>
            <small class="text-muted">${product.category}</small>
          </p>
        </div>
      </div>
    `;

    // Add card to page
    productsContainer.appendChild(productCard);
  });
}

// ----------------------------------------------------------------------

// ⁡⁢⁢⁡⁣⁣𝗖𝗿𝗲𝗮𝘁𝗲 𝗰𝗮𝘁𝗲𝗴𝗼𝗿𝘆 𝗱𝗿𝗼𝗽𝗱𝗼𝘄𝗻 𝗼𝗽𝘁𝗶𝗼𝗻𝘀
function createCategoryDropdown(products) {
  const categories = [];

  // check if the category exists, if not then add it
  products.forEach((product) => {
    if (!categories.includes(product.category)) {
      categories.push(product.category);
    }
  });

  // add each category to the dropdown
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;

    categorySelect.appendChild(option);
  });
}

// --------------------------------------------

// 𝗙𝗶𝗹𝘁𝗲𝗿, 𝘀𝗲𝗮𝗿𝗰𝗵, 𝗮𝗻𝗱 𝘀𝗼𝗿𝘁 𝗽𝗿𝗼𝗱𝘂𝗰𝘁𝘀⁡
function updateProducts() {
  let filteredProducts = [...allProducts];

  const selectedCategory = categorySelect.value;
  const searchText = searchInput.value.toLowerCase();
  const selectedSort = sortSelect.value;

  // Filter by category
  if (selectedCategory !== "all") {
    filteredProducts = filteredProducts.filter((product) => {
      return product.category === selectedCategory;
    });
  }

  // Search by title
  if (searchText !== "") {
    filteredProducts = filteredProducts.filter((product) => {
      return product.title.toLowerCase().includes(searchText);
    });
  }

  // Sort products
  if (selectedSort === "priceLowHigh") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (selectedSort === "priceHighLow") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (selectedSort === "titleAZ") {
    filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
  } else if (selectedSort === "titleZA") {
    filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
  }

  // re-display updated products
  displayProducts(filteredProducts);
}

// ----------------------------------------------------------------------

// 𝗚𝗲𝘁 𝗶𝗰𝗼𝗻 𝗯𝗮𝘀𝗲𝗱 𝗼𝗻 𝗰𝗮𝘁𝗲𝗴𝗼𝗿𝘆 - 𝗶𝗰𝗼𝗻𝘀 𝗳𝗿𝗼𝗺 𝗵𝘁𝘁𝗽𝘀://𝗶𝗰𝗼𝗻𝘀.𝗴𝗲𝘁𝗯𝗼𝗼𝘁𝘀𝘁𝗿𝗮𝗽.𝗰𝗼𝗺/
function getCategoryIcon(category) {
  if (category === "men's clothing") {
    return `<i class="bi bi-person-standing"></i>`;
  } else if (category === "women's clothing") {
    return `<i class="bi bi-person-standing-dress"></i>`;
  } else if (category === "jewelery") {
    return `<i class="bi bi-gem"></i>`;
  } else if (category === "electronics") {
    return `<i class="bi bi-laptop"></i>`;
  } else {
    return `<i class="bi bi-bag"></i>`;
  }
}

// ----------------------------------------------------------------------

// 𝗘𝘃𝗲𝗻𝘁 𝗹𝗶𝘀𝘁𝗲𝗻𝗲𝗿𝘀
categorySelect.addEventListener("change", updateProducts);
searchInput.addEventListener("input", updateProducts);
sortSelect.addEventListener("change", updateProducts);
