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
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const registration = {
        name: form.elements["name"].value,
        email: form.elements["email"].value,
        phone: form.elements["phone"].value,
        event: form.elements["event"].value,
        source: form.elements["source"].value
    };

    registrations.push(registration);

    localStorage.setItem(
        "registrations",
        JSON.stringify(registrations)
    );

    displayRegistrations();

    message.textContent = "Registration saved successfully!";

    form.reset();
});