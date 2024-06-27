document
    .getElementById("payment-form")
    .addEventListener("submit", function (e) {
        e.preventDefault();

        const cardNumber = document.getElementById("card-number").value;
        const expiryDate = document.getElementById("expiry-date").value;
        const cvv = document.getElementById("cvv").value;

        // Additional validation can be added here if needed
        if (
            cardNumber.match(/^\d{16}$/) &&
            expiryDate.match(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/) &&
            cvv.match(/^\d{3}$/)
        ) {
            fetch("registeredUsers.json", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ status: "Paid" }),
            }).then(() => {
                window.location.href = "success.html";
            });
        } else {
            alert("Please check your input and try again.");
        }
    });