/*
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, onValue, runTransaction } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyC1gaoQ5cxn6rMJroJgKxo0E1t-aDAejm0",
    authDomain: "city-clicker-v1.firebaseapp.com",
    databaseURL: "https://city-clicker-v1-default-rtdb.firebaseio.com",
    projectId: "city-clicker-v1",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

// sign in user
signInAnonymously(auth);

// reference to the global score
const scoreRef = ref(db, "globalScore");

// listen for changes
onValue(scoreRef, (snapshot) => {
  document.getElementById("score").innerText = snapshot.val() ?? 0;
});

// increment safely
document.getElementById("btn").onclick = () => {
  runTransaction(scoreRef, (current) => {
    return (current || 0) + 1;
  });
};
*/

const grid = document.getElementById("grid");
const rows = 20;
const cols = 40;
const buttons = document.querySelectorAll("#colorSelector button");

let scores = { red: 0, blue: 0, green: 0, yellow: 0, none: rows * cols };


let selectedColor = "red"; // default color

// Create the grid
for (let r = 0; r < rows; r++) {
  for (let c = 0; c < cols; c++) {
    const square = document.createElement("div");
    square.classList.add("square");

    // Store ownership in a property
    square.dataset.owner = "none";

    // Add click listener
    square.addEventListener("click", () => {
    if (square.dataset.owner !== selectedColor) {
      scores[square.dataset.owner]--;
      square.dataset.owner = selectedColor; // store color as owner
      square.style.backgroundColor = selectedColor; // update visual
      scores[selectedColor]++;
      for (const color in scores) {
        //nothing yet
      }
      document.getElementById("score").innerText = JSON.stringify(scores);
    }
  });

    grid.appendChild(square);
  }
}

//Color selection
buttons.forEach(button => {
  button.addEventListener("click", () => {
    selectedColor = button.dataset.color;
    console.log("Selected color:", selectedColor); // optional for testing
  });
});

