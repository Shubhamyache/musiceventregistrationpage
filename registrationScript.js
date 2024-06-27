document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get("id");

    fetch("events.json")
        .then((response) => response.json())
        .then((events) => {
            const event = events.find((e) => e.id == eventId);
            if (event) {
                document.getElementById("event-info").innerHTML = `
                        <h3>${event.name}</h3>
                        <p><strong>Time:</strong> 7:00 PM</p>
                        <p><strong>Venue:</strong> Music Hall</p>
                    `;
                document.getElementById("members-list").innerHTML = `
                        <p><strong>Artist:</strong> ${event.artist}</p>
                        <p>${event.bio.artist}</p>
                        <p><strong>Contact:</strong> ${event.contact.artist}</p>
                        <hr>
                        <p><strong>Organizer:</strong> ${event.organizer}</p>
                        <p>${event.bio.organizer}</p>
                        <p><strong>Contact:</strong> ${event.contact.organizer}</p>
                    `;
            }
        });

    document
        .getElementById("registration-form")
        .addEventListener("submit", function (e) {
            e.preventDefault();

            const registrationData = {
                eventName: document.querySelector("#event-info h3").innerText,
                fullName: document.getElementById("full-name").value,
                email: document.getElementById("email").value,
                phone: document.getElementById("phone").value,
                age: document.getElementById("age").value,
                gender: document.getElementById("gender").value,
                tickets: document.getElementById("tickets").value,
                status: "Unpaid",
            };

            fetch("registeredUsers.json", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(registrationData),
            }).then(() => {
                window.location.href = "payment.html";
            });
        });
});