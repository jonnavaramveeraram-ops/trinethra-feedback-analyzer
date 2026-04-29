function analyzeFeedback() {
    let text = document.getElementById("feedback").value.toLowerCase();

    let positiveWords = ["good", "excellent", "great", "well done"];
    let negativeWords = ["bad", "poor", "slow", "worst"];

    let score = 0;

    positiveWords.forEach(word => {
        if (text.includes(word)) score++;
    });

    negativeWords.forEach(word => {
        if (text.includes(word)) score--;
    });

    let result = "";

    if (score > 0) {
        result = "Positive Feedback 😊";
    } else if (score < 0) {
        result = "Negative Feedback 😞";
    } else {
        result = "Neutral Feedback 😐";
    }

    document.getElementById("result").innerText = result;
}
