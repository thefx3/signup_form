const button = document.querySelector("button");
const form = document.querySelector("form");

const password = document.getElementById("password");
password.addEventListener("input", function() {
    if (password.validity.patternMismatch) {
        password.setCustomValidity("Le mot de passe doit contenir au moins 8 caractères, une lettre majuscule, une lettre minuscule et un chiffre.");
    } else {
        password.setCustomValidity("");
    }
});

const confirmPassword = document.getElementById("confirm-password");
confirmPassword.addEventListener("input", function() {
    if (password.value === "") {
        confirmPassword.setCustomValidity("Veuillez d'abord saisir un mot de passe.");
    }
    if (password.value !== confirmPassword.value && password.value !== "") {
        confirmPassword.setCustomValidity("Les mots de passe ne correspondent pas.");
    } else {
        confirmPassword.setCustomValidity("");
    }
});


button.addEventListener("click", function(event) {
    event.preventDefault(); // Empêche l'envoi immédiat du formulaire

    if (form.checkValidity()) {
        form.submit(); // Soumet si tout est valide
    } else {
        form.reportValidity(); // Affiche les messages d'erreur HTML5
    }
});


