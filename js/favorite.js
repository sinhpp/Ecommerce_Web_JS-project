document.addEventListener('DOMContentLoaded', function () {
    // Remove item from cart
    const removeButtons = document.querySelectorAll('.remove-item');
    removeButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default action
            event.stopPropagation(); // Stop event propagation

            Swal.fire({
                title: 'Are you sure?',
                text: 'Do you want to remove this item from your cart?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, remove it!',
                cancelButtonText: 'No, keep it'
            }).then((result) => {
                if (result.isConfirmed) {
                    // Logic to remove item goes here
                    Swal.fire(
                        'Removed!',
                        'The item has been removed from your cart.',
                        'success'
                    );
                    // Optionally remove the item from the DOM
                    event.target.closest('.cart-item').remove();
                    updateTotal(); // Update total after item removal
                }
            });
        });
    });

    // Move item to wishlist
    const wishlistButtons = document.querySelectorAll('.wishlist-item');
    wishlistButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default action
            event.stopPropagation(); // Stop event propagation

            Swal.fire({
                title: 'Are you sure?',
                text: 'Do you want to move this item to your wishlist?',
                icon: 'info',
                showCancelButton: true,
                confirmButtonText: 'Yes, move it!',
                cancelButtonText: 'No, keep it in the cart'
            }).then((result) => {
                if (result.isConfirmed) {
                    // Logic to move item to wishlist goes here
                    Swal.fire(
                        'Moved!',
                        'The item has been moved to your wishlist.',
                        'success'
                    );
                    // Optionally remove the item from the cart
                    event.target.closest('.cart-item').remove();
                    updateTotal(); // Update total after item removal
                }
            });
        });
    });

    // Function to update the total number of products and total price
    function updateTotal() {
        const quantityInputs = document.querySelectorAll('.quantity-input');
        const priceElements = document.querySelectorAll('.item-price p');
        const totalProductsElement = document.querySelector('.total-products');
        const totalPriceElement = document.querySelector('.total-price');

        let totalProducts = 0;
        let totalPrice = 0;

        quantityInputs.forEach((input, index) => {
            const quantity = parseInt(input.value);
            const price = parseFloat(priceElements[index].textContent.replace('$', ''));
            totalProducts += quantity;
            totalPrice += quantity * price;
        });

        // Update the total products and total price
        totalProductsElement.innerText = `Total Products: ${totalProducts}`;
        totalPriceElement.innerText = `Total Price: $${totalPrice.toFixed(2)}`;
    }

    // Insert total products and total price elements
    const cartSummary = document.querySelector('.cart-summary');
    const totalProductsElement = document.createElement('p');
    totalProductsElement.classList.add('total-products');
    totalProductsElement.innerText = `Total Products: 0`;
    cartSummary.appendChild(totalProductsElement);

    const totalPriceElement = document.createElement('p');
    totalPriceElement.classList.add('total-price');
    totalPriceElement.innerText = `Total Price: $0.00`;
    cartSummary.appendChild(totalPriceElement);

    // Add event listener to each quantity input
    const quantityInputs = document.querySelectorAll('.quantity-input');
    quantityInputs.forEach(input => {
        input.addEventListener('input', updateTotal);
    });

    // Initial update
    updateTotal();
});
