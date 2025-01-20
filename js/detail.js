 // Thumbnail image click functionality
 const thumbnails = document.querySelectorAll('.thumbnail-images img');
 const mainImage = document.getElementById('main-image');

 thumbnails.forEach((thumbnail) => {
   thumbnail.addEventListener('click', () => {
     mainImage.src = thumbnail.src;
   });
 });

 // Size selection functionality
 const sizeButtons = document.querySelectorAll('.size-button');
 let selectedSize = 'S'; // Default size

 sizeButtons.forEach((button) => {
   button.addEventListener('click', () => {
     // Remove the active class from all buttons
     sizeButtons.forEach((btn) => btn.classList.remove('active'));
     
     // Add the active class to the clicked button
     button.classList.add('active');
     
     // Update the selected size
     selectedSize = button.getAttribute('data-size');
     document.querySelector('.total-price').textContent = `Total Price: $${calculatePrice(selectedSize)}`;
   });
 });

 // Price calculation based on size
 function calculatePrice(size) {
   let price = 15; // Base price
   if (size === 'M') {
     price = 18;
   } else if (size === 'L') {
     price = 20;
   }
   return price;
 }

 // Image navigation functionality
 const prevButton = document.getElementById('prev-image');
 const nextButton = document.getElementById('next-image');
 const images = [
   'images/image.png',
   'images/image copy 2.png',
   'images/image copy 3.png',
   'images/image copy 4.png',
   'images/image copy 5.png',
   'images/image copy 6.png',
   'images/image copy 7.png',
   'images/image copy 8.png'
 ];
 let currentIndex = 0;

 function updateMainImage(index) {
   mainImage.src = images[index];
 }

 prevButton.addEventListener('click', () => {
   currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
   updateMainImage(currentIndex);
 });

 nextButton.addEventListener('click', () => {
   currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
   updateMainImage(currentIndex);
 });
