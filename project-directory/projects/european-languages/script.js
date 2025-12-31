const correctLanguage = "french";
const submitButton = document.getElementById("submit");
const guessInput = document.getElementById("guess");
const resultText = document.getElementById("result");

submitButton.addEventListener("click", () => {
    const userGuess = guessInput.value.toLowerCase();
  });
      
     if (userGuess === correctLanguage) {
          resultText.innerText = "Correct! 🎉";
     } else {
          resultText.innerText = "Incorrect, try again. ❌";
     }  