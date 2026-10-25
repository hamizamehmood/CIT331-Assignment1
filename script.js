const form = document.getElementById("registration-form");
const message = document.getElementById("message");
const list = document.getElementById("registration-list");
const clearButton = document.getElementById("clear-all");
let registrations = JSON.parse(
    localStorage.getItem("registrations")
) || [];