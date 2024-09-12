// Function to validate the email field
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@cphbusiness\.com$/;
    return regex.test(email);
}

function handleSubmit() {
    const email = document.forms["myForm"]["email"].value;
    
    if (!validateEmail(email)) {
        alert("Please enter a valid email address ending with @cphbusiness.com");
        return; 
    }

    console.log("Form submitted successfully");
}

const form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    handleSubmit();
});
