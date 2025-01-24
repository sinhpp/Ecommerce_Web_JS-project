// Select all heart icons and the favorites counter
const heartIcons = document.querySelectorAll('.far.fa-heart');
const favoritesCounter = document.querySelector('.header-user-actions .count');

// Initialize a variable to keep track of favorites count
let favoritesCount = 0;

// Add event listeners to all heart icons
heartIcons.forEach((icon) => {
  icon.addEventListener('click', () => {
    // Toggle the 'favorited' state
    icon.classList.toggle('fas'); // Change to solid heart
    icon.classList.toggle('far'); // Change to outline heart

    // Update the counter based on the state
    if (icon.classList.contains('fas')) {
      favoritesCount++; // Increment if added to favorites
    } else {
      favoritesCount--; // Decrement if removed from favorites
    }

    // Update the counter display
    favoritesCounter.textContent = favoritesCount;
  });
});
document.addEventListener("DOMContentLoaded", () => {
    // Select the wishlist and bag counters
    const wishlistCounter = document.querySelector(".action-btn ion-icon[name='heart-outline'] + .count");
    const bagCounter = document.querySelector(".action-btn ion-icon[name='bag-handle-outline'] + .count");
  
    // Initialize counters
    let wishlistCount = 0;
    let bagCount = 0;
  
    // Add event listeners to wishlist icons
    document.querySelectorAll(".far.fa-heart").forEach((wishlistIcon) => {
      wishlistIcon.addEventListener("click", () => {
        wishlistCount++;
        wishlistCounter.textContent = wishlistCount;
  
        // Show SweetAlert popup for wishlist
        Swal.fire({
          icon: "success",
          title: "Added to Wishlist",
          text: "This item has been added to your wishlist!",
          showConfirmButton: false,
          timer: 1500,
        });
      });
    });
  
    // Add event listeners to bag icons
    document.querySelectorAll(".fas.fa-shopping-bag").forEach((bagIcon) => {
      bagIcon.addEventListener("click", () => {
        bagCount++;
        bagCounter.textContent = bagCount;
  
        // Show SweetAlert popup for bag
        Swal.fire({
          icon: "success",
          title: "Added to Bag",
          text: "This item has been added to your bag!",
          showConfirmButton: false,
          timer: 1500,
        });
      });
    });
  });
  
