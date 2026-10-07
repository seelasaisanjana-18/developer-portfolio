// ================= CONTACT FORM VALIDATION =================

const contactForm = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

const successMessage = document.getElementById("successMessage");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    let isValid = true;


    // Clear previous messages
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";


    // ================= NAME VALIDATION =================

    if (nameInput.value.trim() === "") {

        nameError.textContent = "Please enter your name.";

        isValid = false;

    }


    // ================= EMAIL VALIDATION =================

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput.value.trim() === "") {

        emailError.textContent = "Please enter your email.";

        isValid = false;

    } 
    else if (!emailPattern.test(emailInput.value.trim())) {

        emailError.textContent = "Please enter a valid email address.";

        isValid = false;

    }


    // ================= MESSAGE VALIDATION =================

    if (messageInput.value.trim() === "") {

        messageError.textContent = "Please enter a message.";

        isValid = false;

    } 
    else if (messageInput.value.trim().length < 10) {

        messageError.textContent =
            "Message must be at least 10 characters long.";

        isValid = false;

    }


    // ================= SUCCESS =================

    if (isValid) {

        successMessage.textContent =
            "Form submitted successfully! 🎉";

        contactForm.reset();

        console.log("Form submitted successfully!");

    }

});