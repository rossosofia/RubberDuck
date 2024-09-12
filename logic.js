const button = document.getElementById("box");
const duckSound = document.getElementById("duckSound")
const quackSound = document.getElementById("quackSound")

window.addEventListener("load", function () {
    const userName = prompt("What's your name?");
    
    if (userName) {
        const duckMessage = document.querySelector("h3");
        duckMessage.textContent = `Hello, ${userName}! Mr. Duck is here to help you solve problems.`;
        quackSound.play();
    }
});

const duckImg = document.getElementById("duck")

duckImg.addEventListener("mouseover", function(){
    quackSound.play();
})

// Manipulating the DOM
function createProblem(newProblemText) {
    const newLi = document.createElement("li");

    newLi.textContent = newProblemText;
    document.getElementById("problemsList").appendChild(newLi);
    duckSound.play();
}

document.getElementById("addButton").addEventListener("click", function () {
    const newProblemText = document.getElementById("newProblem").value;
    if (newProblemText.trim() === "") {
        alert("Please enter a problem.");
        return; 
    }
    createProblem(newProblemText);
});




