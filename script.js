// General Script for All Pages
document.addEventListener("DOMContentLoaded", () => {
  console.log("Page Loaded");

  // Highlight active menu
  const menuItems = document.querySelectorAll(".menu-item");
  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      menuItems.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Dropdown functionality for menu
  const dropdowns = document.querySelectorAll(".dropdown");
  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("mouseenter", () => {
      const menu = dropdown.querySelector(".dropdown-menu");
      menu.style.display = "block";
    });
    dropdown.addEventListener("mouseleave", () => {
      const menu = dropdown.querySelector(".dropdown-menu");
      menu.style.display = "none";
    });
  });
});

// Search Bar Functionality
document.querySelector(".search-bar button")?.addEventListener("click", () => {
  const query = document.querySelector(".search-bar input").value;
  if (query.trim()) {
    alert(`Searching for: ${query}`);
    // Add logic to handle search queries (e.g., redirect to search results page)
  } else {
    alert("Please enter a search term.");
  }
});

// Product Page Script
if (document.querySelector(".product-grid")) {
  console.log("Product Page Loaded");

  const productContainer = document.querySelector(".product-grid");
  const nextButton = document.querySelector(".next-btn");
  const prevButton = document.querySelector(".prev-btn");

  let currentSlide = 0;

  nextButton?.addEventListener("click", () => {
    const totalSlides = productContainer.children.length;
    currentSlide = (currentSlide + 1) % totalSlides;
    productContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
  });

  prevButton?.addEventListener("click", () => {
    const totalSlides = productContainer.children.length;
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    productContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
  });
}

// Contact Page Script
if (document.querySelector(".contact-section")) {
  console.log("Contact Page Loaded");

  // Add interactivity to contact options
  const contactOptions = document.querySelectorAll(".contact-options .option");
  contactOptions.forEach((option) => {
    option.addEventListener("click", () => {
      alert(`You clicked on: ${option.querySelector("p").textContent}`);
    });
  });
}
