const form = document.getElementById("registration-form");
const message = document.getElementById("message");
const list = document.getElementById("registration-list");
const clearButton = document.getElementById("clear-all");
let registrations = JSON.parse(
    localStorage.getItem("registrations")
) || [];
function displayRegistrations() {
    list.innerHTML = "";

    registrations.forEach(function(registration) {
        const item = document.createElement("li");

       item.textContent =
    registration.name + " - " +
    registration.email + " - " +
    registration.phone + " - " +
    registration.event + " - " +
    registration.source;

        list.appendChild(item);
    });
}