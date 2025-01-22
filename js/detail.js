// Image gallery navigation
const prevImageBtn = document.getElementById('prev-image');
const nextImageBtn = document.getElementById('next-image');
const mainImage = document.getElementById('main-image');
const thumbnailImages = document.querySelectorAll('.thumbnail');

let currentImageIndex = 0;

function changeImage(index) {
  mainImage.src = thumbnailImages[index].src;
  currentImageIndex = index;
}

// Next and Previous image navigation
prevImageBtn.addEventListener('click', () => {
  if (currentImageIndex > 0) {
    changeImage(currentImageIndex - 1);
  }
});

nextImageBtn.addEventListener('click', () => {
  if (currentImageIndex < thumbnailImages.length - 1) {
    changeImage(currentImageIndex + 1);
  }
});

// Thumbnail click to change main image
thumbnailImages.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    changeImage(index);
  });
});

// Size selection
const sizeButtons = document.querySelectorAll('.size-button');
const totalPrice = document.getElementById('total-price');
const priceElement = document.getElementById('price');

sizeButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove selected class from all buttons
    sizeButtons.forEach(btn => btn.classList.remove('selected'));

    // Add selected class to the clicked button
    button.classList.add('selected');

    // Update price based on size
    const size = button.getAttribute('data-size');
    let newPrice = 15; // Default price

    if (size === 'M') {
      newPrice = 20; // Example price for Medium
    } else if (size === 'L') {
      newPrice = 25; // Example price for Large
    }

    priceElement.textContent = `$${newPrice}`;
    totalPrice.textContent = `$${newPrice}`;
  });
});

// Add to Cart button functionality (optional)
const addToCartBtn = document.querySelector('.add-to-cart');
addToCartBtn.addEventListener('click', () => {
  Swal.fire({
    icon: 'success',
    title: 'Added to Cart',
    text: 'The product has been added to your cart.',
    showConfirmButton: true,
    timer: 1500
  });
});

// Select the "Add your Favorite" button
const addToFavoriteButton = document.querySelector('.add-to-cart');

// Select the heart icon's count element
const favoriteCount = document.querySelector('.header-user-actions .action-btn:nth-child(2) .count');

// Add a click event listener to the button
addToFavoriteButton.addEventListener('click', () => {
  // Get the current count
  let currentCount = parseInt(favoriteCount.textContent);

  // Increment the count
  favoriteCount.textContent = currentCount + 1;

  // Show SweetAlert confirmation
  Swal.fire({
    icon: 'success',
    title: 'Added to Favorites',
    text: 'The product has been added to your favorites!',
    showConfirmButton: true,
    timer: 1500
  });
});
