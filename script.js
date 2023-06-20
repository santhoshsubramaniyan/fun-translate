"use strict";

const userInputEl = document.getElementById("user-input");
const btnButton = document.getElementById("btn-button");
const outputContainer = document.getElementById("output-container");

// global variables

const url = `https://api.funtranslations.com/translate/dothraki.json?text=`;

const showOutput = (str) => {
  outputContainer.innerText = str;
};

const getTranslatedText = (input) => {
  console.log(input);
  try {
    fetch(url + input)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        showOutput(data.contents.translated);
      });
  } catch (err) {
    alert("there is an error");
  }
};

// event listeners

btnButton.addEventListener("click", () => {
  const userInput = userInputEl.value;

  if (userInput.trim()) {
    getTranslatedText(userInput);
  } else {
    alert("input is mandatory");
  }

  userInputEl.value = null;
});

// initial settings
init();
