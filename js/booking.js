// ------------------------------
// Booking form validation 
// ------------------------------
// University Of Worcester (2026) Handling Forms with JavaScript COMP1441 Web Technologies. Available at: https://worcesterbb.blackboard.com/ultra/courses/_56065_1/outline/file/_2970200_1 (Accessed: 30 April 2026)
document.addEventListener("DOMContentLoaded", function () { // Event listener checks all HTML elements exist from the DOM
  const form = document.getElementById("bookingForm");
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
      const date = document.getElementById("date1").value;
      const time = document.getElementById("time1").value;
      const numberOfPeople = document.getElementById("numberOfPeople1").value;
      const additionalMessage = document.getElementById("message1").value.trim();
      const terms = document.getElementById("terms").checked;
      // w3schools (2026). JavaScript String trim(). Available at: https://www.w3schools.com/jsref/jsref_trim_string.asp (11 April 2026)
      // w3schools (2026). Input Checkbox checked Property. Available at : https://www.w3schools.com/jsref/prop_checkbox_checked.asp (11 April 2026)


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

      if (phoneNumber.length !== 11 || !numbersOnly.test(phoneNumber)) {
        message.innerText = "Phone number must be 11 digits and contain only numbers.";
        message.classList.remove("hidden");
        message.classList.add("error");
        return;
      }
      if (!date) {
        message.innerText = "Please select a date.";
        message.classList.remove("hidden");
        message.classList.add("error");
        return;
      } 
      if (new Date(date) < new Date()) {
        message.innerText = "Date cannot be in the past.";
        message.classList.remove("hidden");
        message.classList.add("error");
        return;
      }
      //w3schools (2026). JavaScript Dates. Available at : https://www.w3schools.com/js/js_dates.asp (11 April 2026)
      
      if (!time) {
        message.innerText = "Please select a time slot.";
        message.classList.remove("hidden");
        message.classList.add("error");
        return;
      }
      if (!numberOfPeople) {
          message.innerText = "Please select the number of people.";
          message.classList.remove("hidden");
          message.classList.add("error");
          return;
      }
      if (additionalMessage.length > 200) {
          message.innerText = "Additional message must be less than 200 characters.";
          message.classList.remove("hidden");
          message.classList.add("error");
          return;
      }
      if (!terms) {
        message.innerText = "You must accept the terms and conditions.";
        message.classList.remove("hidden");
        message.classList.add("error");
        return;
      }

      // If all validations pass, display success message
      message.innerText = "Success! Form submitted";
      message.classList.remove("hidden", "error");
      message.classList.add("success");
    } 
    catch (error) // Catches any errors during validation
    {
      message.classList.add("error"); // Displays an error message
      message.classList.remove("hidden"); // Shows the message
    }
    finally 
    {
      console.log("Validation attempt completed."); // Message to the console when submission has been attempted
    }
  });
});