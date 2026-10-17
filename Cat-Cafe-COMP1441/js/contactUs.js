// ------------------------------
// Contact form validation 
// ------------------------------
// University Of Worcester (2026) Handling Forms with JavaScript COMP1441 Web Technologies. Available at: https://worcesterbb.blackboard.com/ultra/courses/_56065_1/outline/file/_2970200_1 (Accessed: 30 April 2026)
document.addEventListener("DOMContentLoaded", function () { // Event listener checks all HTML elements exist from the DOM
    const form = document.getElementById("contactForm");
    const message = document.getElementById("errorMessage");

    form.addEventListener("submit", function (event) { // Event listener for form submission
        event.preventDefault(); // Prevents default form submission
        message.classList.add("hidden"); // Hides the message
        message.classList.remove("error", "success");
        message.innerText = "";

        try { // try…catch…finally statement to handle thrown errors
            const email = document.getElementById("email1").value.trim();
            const name = document.getElementById("name1").value.trim();
            const phoneNumber = document.getElementById("phone1").value.trim();
            const contactMessage = document.getElementById("message1").value;
            const reason = document.getElementById("reason1").value;

            // Regular expressions for validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const numbersOnly = /^[0-9]+$/;

            // Validation checks for each form field
            if (name.length < 2 || name.length > 50) {
                message.innerText = "Name must be between 2 and 50 characters.";
                message.classList.remove("hidden");
                message.classList.add("error");
                return;
            }

            if (email.length < 5 || email.length > 30 || !emailRegex.test(email)) {
                message.innerText = "Email must be valid and between 5-30 characters.";
                message.classList.remove("hidden");
                message.classList.add("error");
                return;
            }

            if (contactMessage.length > 200 || contactMessage.length < 1) {
                message.innerText = "Contact message must be between 1 and 200 characters.";
                message.classList.remove("hidden");
                message.classList.add("error");
                return;
            }

            if (reason === "") {
                message.innerText = "Please select a reason for contact.";
                message.classList.remove("hidden");
                message.classList.add("error");
                return;
            }

            if (phoneNumber) {
                if (phoneNumber.length !== 11 || !numbersOnly.test(phoneNumber)) {
                    message.innerText = "Phone number must be 11 digits and contain only numbers.";
                    message.classList.remove("hidden");
                    message.classList.add("error");
                    return;
                }
            }

            // If all validations pass, display success message
            message.innerText = "Success! Form submitted";
            message.classList.remove("hidden", "error");
            message.classList.add("success");

        } catch (error) { // Catches any errors during validation
            message.classList.remove("hidden");
            message.classList.add("error");
        } finally {
            console.log("Validation attempt completed."); // Message to the console when submission has been attempted
        }
    });
});