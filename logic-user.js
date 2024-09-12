// Function to validate the email field
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@cphbusiness\.com$/;
    return regex.test(email);
}

function handleSubmit() {
    const email = document.forms["myForm"]["email"].value;
    const username = document.forms["myForm"]["username"].value;
    
    if (!validateEmail(email)) {
        alert("Please enter a valid email address ending with @cphbusiness.com");
        return; 
    }

    // Store the username in localStorage
    localStorage.setItem("username", username);

    // Redirect to the index.html page
    window.location.href = "index.html";
    console.log("Form submitted successfully");
}

const form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    handleSubmit();
});
