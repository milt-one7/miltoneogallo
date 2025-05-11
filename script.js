// Function to toggle the visibility of the Education and Services sections
function toggleSection(section) {
    // Hide both sections initially
    const educationSection = document.getElementById('education');
    const servicesSection = document.getElementById('services');

    // Check which section to show
    if (section === 'education') {
        educationSection.style.display = (educationSection.style.display === "block") ? "none" : "block";
        servicesSection.style.display = "none";  // Hide Services if Education is clicked
    } else if (section === 'services') {
        servicesSection.style.display = (servicesSection.style.display === "block") ? "none" : "block";
        educationSection.style.display = "none";  // Hide Education if Services is clicked
    }
}

// JavaScript for form validation
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields!");
        return false;
    }

    alert("Thank you for reaching out! Your message has been sent.");
    return true; // submit the form
}

