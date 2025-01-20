document.addEventListener("DOMContentLoaded", function () {
    // For Card Number formatted input
    const cardNum = document.getElementById("cr_no");
    cardNum.addEventListener("keyup", function (e) {
        if (this.value === this.lastValue) return;
        let caretPosition = this.selectionStart;
        const sanitizedValue = this.value.replace(/[^0-9]/gi, "");
        const parts = [];

        for (let i = 0, len = sanitizedValue.length; i < len; i += 4) {
            parts.push(sanitizedValue.substring(i, i + 4));
        }

        for (let i = caretPosition - 1; i >= 0; i--) {
            const c = this.value[i];
            if (c < "0" || c > "9") {
                caretPosition--;
            }
        }
        caretPosition += Math.floor(caretPosition / 4);

        this.value = this.lastValue = parts.join("-");
        this.selectionStart = this.selectionEnd = caretPosition;
    });

    // For Date formatted input
    const expDate = document.getElementById("exp");
    expDate.addEventListener("keyup", function (e) {
        if (this.value === this.lastValue) return;
        let caretPosition = this.selectionStart;
        const sanitizedValue = this.value.replace(/[^0-9]/gi, "");
        const parts = [];

        for (let i = 0, len = sanitizedValue.length; i < len; i += 2) {
            parts.push(sanitizedValue.substring(i, i + 2));
        }

        for (let i = caretPosition - 1; i >= 0; i--) {
            const c = this.value[i];
            if (c < "0" || c > "9") {
                caretPosition--;
            }
        }
        caretPosition += Math.floor(caretPosition / 2);

        this.value = this.lastValue = parts.join("/");
        this.selectionStart = this.selectionEnd = caretPosition;
    });

    // Radio button
    document.querySelectorAll(".radio-group .radio").forEach(function (radio) {
        radio.addEventListener("click", function () {
            const siblings = this.parentElement.querySelectorAll(".radio");
            siblings.forEach(sibling => sibling.classList.remove("selected"));
            this.classList.add("selected");
        });
    });

    // Add event listener to "Make a Payment" button
    document.querySelector("input[type='submit']").addEventListener("click", function (e) {
        e.preventDefault();

        // Collect form data
        const nameOnCard = document.querySelector("input[name='holdername']").value;
        const cardNumber = document.querySelector("input[name='cardno']").value;
        const cvv = document.querySelector("input[name='cvcpwd']").value;
        const expirationDate = document.querySelector("input[name='exp']").value;
        const totalPrice = document.getElementById("total").textContent;

        // Validate form data
        if (!nameOnCard || !cardNumber || !cvv || !expirationDate) {
            Swal.fire({
                icon: "error",
                title: "Missing Information",
                text: "Please fill out all the fields before making a payment."
            });
            return;
        }

        // Save data to local storage
        const paymentData = {
            nameOnCard,
            cardNumber,
            cvv,
            expirationDate,
            totalPrice
        };
        localStorage.setItem("paymentData", JSON.stringify(paymentData));

        // Show payment success alert
        Swal.fire({
            icon: "success",
            title: "Payment Successful",
            text: `Your payment of ${totalPrice} has been processed successfully!`
        });
    });

    // Functionality to update total price dynamically
    const updateTotalPrice = () => {
        const newPrice = prompt("Enter the additional amount to add to the total price:");
        if (newPrice && !isNaN(newPrice)) {
            const totalPriceElement = document.getElementById("total");
            const currentPrice = parseFloat(totalPriceElement.textContent.replace(/[^0-9.]/g, ""));
            const updatedPrice = currentPrice + parseFloat(newPrice);
            totalPriceElement.textContent = `$ ${updatedPrice.toFixed(2)}`;
        } else {
            Swal.fire({
                icon: "error",
                title: "Invalid Input",
                text: "Please enter a valid numeric value."
            });
        }
    };

    // Add event listener to dynamically update price
    document.getElementById("total").addEventListener("click", updateTotalPrice);
});
