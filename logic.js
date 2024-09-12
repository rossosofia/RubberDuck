const duckImg = document.getElementById("duck")
const duckSound = document.getElementById("duckSound")
const quackSound = document.getElementById("quackSound")
const logButton = document.getElementById("user");

window.addEventListener("load", function () {
    const userName = localStorage.getItem("username");
    console.log(userName);
    
    if (userName) {
        const duckMessage = document.querySelector("h3");
        logButton.textContent = "Log out"
        duckMessage.innerHTML = `<span class="username">Hello, ${userName}!</span><br>
        <span class="help-text">Mr. Duck is here to help you solve your problems. <i>(not all of them)</i></span>`;
        quackSound.play();
    } else {
        logButton.textContent = "Log in";
        logButton.addEventListener("click", function() {
            localStorage.clear();
        });
    }
});


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

// async - API
const forceAnswerButton = document.getElementById("force");
const duckMessage = document.querySelector("h3"); 


async function fetchJoke() {
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Dark,Pun?blacklistFlags=racist,sexist,explicit');
        const data = await response.json();
        
        let joke = "";
        if (data.type === "single") {
            joke = data.joke;
        } else {
            joke = `${data.setup} <br> ${data.delivery}`;
        }

        duckMessage.innerHTML = `Mr. Duck's joke: <br> ${joke}`;
    } catch (error) {
        duckMessage.innerHTML = "Mr. Duck is left speechless";
        console.error("Error fetching joke:", error);
    }
}

// Add event listener to the "Force Answer" button
forceAnswerButton.addEventListener("click", fetchJoke);



