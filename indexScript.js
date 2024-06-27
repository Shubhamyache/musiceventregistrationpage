document.addEventListener("DOMContentLoaded", function () {
    fetch("events.json")
        .then((response) => response.json())
        .then((events) => {
            const eventsList = document.getElementById("events-list");
            events.forEach((event, index) => {
                const eventDiv = document.createElement("div");
                eventDiv.classList.add("col-md-4");
                eventDiv.innerHTML = `
            <div class="card event-card mb-4">
              <div class="card-body">
                ${index < 2 ? '<span class="badge badge-new">New</span>' : ""}
                <h5 class="card-title">${event.name}</h5>
                <p class="card-text"><strong>Artist:</strong> ${event.artist}</p>
                <p class="card-text"><strong>Organizer:</strong> ${event.organizer}</p>
                <button onclick="location.href='registration.html?id=${event.id}'" class="btn btn-primary">Register</button>
              </div>
            </div>
          `;
                eventsList.appendChild(eventDiv);
            });
        });
});
