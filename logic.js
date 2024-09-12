window.addEventListener("load", function () {
    const userName = prompt("What's your name?");
    
    if (userName) {
        const duckMessage = document.querySelector("h3");
        duckMessage.textContent = `Hello, ${userName}! Mr. Duck is here to help you solve problems.`;
    }
});

const button = document.getElementById("box");

function playSound(){
    const duckSound = document.getElementById("duckSound")
    duckSound.play()
}

// setTimeOut(function stopSound(){
//    duckSound.pause();
//    duckSound.currentTime = 0;
// }, 1000)

// Manipulating the DOM
function createProblem(newProblemText) {
    const newLi = document.createElement("li");

    newLi.textContent = newProblemText;
    document.getElementById("problemsList").appendChild(newLi);
    // playSound()
    
}

document.getElementById("addButton").addEventListener("click", function () {
    const newProblemText = document.getElementById("newProblem").value;
    if (newProblemText.trim() === "") {
        alert("Please enter a problem.");
        return; 
    }
    createProblem(newProblemText);
});

const duckImg = document.getElementById("duck")

duckImg.addEventListener("mouseover", function(){
    const duckSound = document.getElementById("duckSound")
    duckSound.play();
})

duckImg.addEventListener("mouseout", function(){
    const duckSound = document.getElementById("duckSound")
    duckSound.pause();
})

