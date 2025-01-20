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
  window.location.href = 'pages/orderlist.html'; 
});
