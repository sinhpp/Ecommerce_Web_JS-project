document.addEventListener('DOMContentLoaded', function() {
    // Remove item from cart
    const removeButtons = document.querySelectorAll('.remove-item');
    removeButtons.forEach(button => {
        button.addEventListener('click', function(event) {
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
                }
            });
        });
    });

    // Move item to wishlist
    const wishlistButtons = document.querySelectorAll('.wishlist-item');
    wishlistButtons.forEach(button => {
        button.addEventListener('click', function(event) {
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
                }
            });
        });
    });
});
