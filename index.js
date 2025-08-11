const form = document.getElementById("form");

// Get input elements (not just values!)
const nameInput = document.getElementById("name");
const username = document.getElementById("user");
const phoneInput = document.getElementById("phonenumber");
const emailInput = document.getElementById("email");
const password = document.getElementById("pass");
const confirmPassword = document.getElementById("conpass");

// Form submit listener
form.addEventListener("submit", function (event) {
    event.preventDefault();
    clearAllErrors();

    const name = nameInput.value.trim();
    const user = username.value.trim();
    const phone = phoneInput.value.trim();
    const mail = emailInput.value.trim();
    const pass = password.value;
    const confirm = confirmPassword.value;

    let hasError = false;
    if (name === "") {
        showError("nameError", "Name field cannot be empty!");
        hasError = true;
    }

    if (user === "") {
        showError("userError", "Username field cannot be empty!");
        hasError = true;
    }

    if (!validatePhone(phone)) {
        showError("phoneError", "Enter a valid Nigerian phone number!");
        hasError = true;
    }

    if (!validateEmail(mail)) {
        showError("emailError", "Email is not valid!");
        hasError = true;
    }

    if (pass === "") {
        showError("passError", "Password field cannot be empty!");
        hasError = true;
    } else if (pass.length < 8) {
        showError("passError", "Password must be at least 8 characters!");
        hasError = true;
    }

    if (confirm !== pass) {
        showError("confirmError", "Password mismatch!");
        hasError = true;
    }

    if (!hasError) {
        alert("Form submitted successfully!");
        form.reset();
    }
});

// Live validation (corrected)
nameInput.addEventListener("input", () => {
    if (nameInput.value.trim() !== "") clearError("nameError");
});

username.addEventListener("input", () => {
    if (username.value.trim() !== "") clearError("userError");
});

phoneInput.addEventListener("input", () => {
    if (validatePhone(phoneInput.value.trim())) clearError("phoneError");
});

emailInput.addEventListener("input", () => {
    if (validateEmail(emailInput.value.trim())) clearError("emailError");
});

password.addEventListener("input", () => {
    if (password.value.length >= 8) clearError("passError");
});

confirmPassword.addEventListener("input", () => {
    if (confirmPassword.value === password.value) clearError("confirmError");
});

// Show error
function showError(id, message) {
    document.getElementById(id).textContent = message;
}

// Clear single error
function clearError(id) {
    document.getElementById(id).textContent = "";
}

// Clear all errors
function clearAllErrors() {
    clearError("nameError");
    clearError("userError");
    clearError("phoneError");
    clearError("emailError");
    clearError("passError");
    clearError("confirmError");
}

// Validate email
function validateEmail(email) {
    return email.includes("@") && email.includes(".") && email.length > 6;
}

// Nigerian phone number validation
function validatePhone(phone) {
    const phoneRegex = /^0[789][01]\d{8}$/; 
    return phoneRegex.test(phone);
}



