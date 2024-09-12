const duckImg = document.getElementById("duck")
// const button = document.getElementById("box");
const duckSound = document.getElementById("duckSound")
const quackSound = document.getElementById("quackSound")



// window.addEventListener("load", function () {
//     const userName = prompt("What's your name?");
    
//     if (userName) {
//         const duckMessage = document.querySelector("h3");
//         duckMessage.textContent = `Hello, ${userName}! Mr. Duck is here to help you solve your problems. (not all of them)`;
//         quackSound.play();
//     }
// });


// Manipulating the DOM
function createProblem(newProblemText) {
    const newLi = document.createElement("li");
    const timestamp = getFormattedDate();

    newLi.textContent = newProblemText;
    newLi.title = `Submitted on ${timestamp}`; 

    const problemsList = document.getElementById("problemsList");
    problemsList.insertBefore(newLi, problemsList.firstChild);
    duckSound.play();
}

// Format of that Date: “DD/MM/YYYY, hh:mm”
function getFormattedDate(){
    const now = new Date();
    const day = now.getDate();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // now.getMonth() + 1; this was my original solution, but this is more precise
    const year = now.getFullYear();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    return `${day}/${month}/${year}, ${hour}:${minutes}`;
}



// Submit question - Ask a question
const askButton = document.getElementById("askButton");

askButton.addEventListener("click", function() {
    const newProblemText = document.getElementById("newProblem").value;
    if (newProblemText.trim() === "") {
        alert("Please enter a problem.");
        return; 
    }
    createProblem(newProblemText);
});


// Sound on image
duckImg.addEventListener("mouseover", function(){
    quackSound.play();
})



