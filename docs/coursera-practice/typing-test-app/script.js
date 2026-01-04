let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

//this function checks the state of the input field, this will decides whether to start or end the test. Also change the button text accordingly.
function checkState() {
    let userInput = document.getElementById("userInput");
    let actionButton = document.getElementById("actionButton");

    // When the input is readOnly the test is not running, so button should start the test.
    if (userInput.readOnly) {
        actionButton.textContent = "Start Test";
    } else {
        actionButton.textContent = "End Test";
    }
}

//execute when the test starts or ends
function executeTest() {
   let userInput = document.getElementById("userInput");
    let actionButton = document.getElementById("actionButton");

    if (userInput.readOnly) {
        startTest();
    } else {
        endTest();
    } 
}

// Initialize button state on page load
document.addEventListener('DOMContentLoaded', checkState);

function startTest() {
    // Set the test text
    document.getElementById("inputText").value = testText;

    // Reset user input and output
    let userInput = document.getElementById("userInput");
    userInput.value = "";
    userInput.readOnly = false;
    userInput.focus();

    document.getElementById("output").innerHTML = "";

    // Start timer
    startTime = new Date().getTime();

    // Update button text to reflect running state
    checkState();
}


function endTest() {
    endTime = new Date().getTime();

    // Disable user input
    document.getElementById("userInput").readOnly = true;

    // Calculate time elapsed and words per minute (WPM)
    var timeElapsed = (endTime - startTime) / 1000; // in seconds
    var userTypedText = document.getElementById("userInput").value;

    // Split the text using regex to count words correctly
    var typedWords = userTypedText.split(/\s+/).filter(function (word) {
        return word !== "";
    }).length;

    var wpm = 0; // Default value

    if (timeElapsed !== 0 && !isNaN(typedWords)) {
        wpm = Math.round((typedWords / timeElapsed) * 60);
    }

    // Display the results
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h2>Typing Test Results:</h2>" +
        "<p>Words Typed: " + typedWords + "</p>" +
        "<p>Time Elapsed: " + timeElapsed.toFixed(2) + " seconds</p>" +
        "<p>Words Per Minute (WPM): " + wpm + "</p>";

    // Update button text to reflect idle state
    checkState();
}