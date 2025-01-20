// Select the action buttons by their classes
const personIcon = document.querySelector('.header-user-actions .action-btn:nth-child(1)');
const heartIcon = document.querySelector('.header-user-actions .action-btn:nth-child(2)');
const bagIcon = document.querySelector('.header-user-actions .action-btn:nth-child(3)');

// Add click event listeners to navigate to the respective pages
personIcon.addEventListener('click', () => {
  window.location.href = 'pages/login.html'; 
});

heartIcon.addEventListener('click', () => {
  window.location.href = 'pages/bag.html'; 
});

bagIcon.addEventListener('click', () => {
  window.location.href = 'pages/payment.html'; 
});



// Add event listeners to all menu titles
const menuTitles = document.querySelectorAll(".menu-title");

// Function to handle navigation
const navigateToPage = (event) => {
  event.preventDefault(); // Prevent default anchor behavior
  const pageName = event.target.textContent.trim().toLowerCase(); // Get the menu title and normalize it
  const pageMap = {
    home: "../index.html", // Define the mapping between menu titles and pages
    "women's": "women.html",
    blog: "blog.html",
    contact: "../pages/contact.html"
  };

  // Check if the page exists in the mapping, then navigate
  if (pageMap[pageName]) {
    window.location.href = pageMap[pageName];
  } else {
    console.error(`Page not found for ${pageName}`);
  }
};

// Attach the click event listener to each menu title
menuTitles.forEach((menuTitle) => {
  menuTitle.addEventListener("click", navigateToPage);
});
