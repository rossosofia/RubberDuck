const button = document.getElementById("box");

function playSound(){
    const duckSound = document.getElementById("duckSound")
    duckSound.play()
}

setTimeOut(function stopSound(){
   duckSound.pause();
   duckSound.currentTime = 0;
}, 1000)

// Manipulating the DOM
function createProblem() {
    const newProblemText = document.getElementById("newProblem").value;
    const newLi = document.createElement("li");

    newLi.textContent = newProblemText;
    document.getElementById("problemsList").appendChild(newLi);
    playSound()
    
}

document.getElementById("addButton").addEventListener("click", function () {
    createProblem();
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

