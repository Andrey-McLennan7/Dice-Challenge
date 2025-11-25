// Functions
function random(min, max) {
    return Math.floor((Math.random() * max)) + min;
}

function changeDice(selectorName, randomNumber) {
    $(String(selectorName)).attr("src", "./images/dice" + randomNumber + ".png");
}

// Data
const $h1 = $("h1");

// Main code
$("button").on("click", () => {
    const randomNumber1 = random(1, 6);
    const randomNumber2 = random(1, 6);

    changeDice(".img1", randomNumber1);
    changeDice(".img2", randomNumber2);

    $h1.html(
        randomNumber1 > randomNumber2 ? "Player 1 Wins!" :
        randomNumber1 < randomNumber2 ? "Player 2 Wins!" :
        "Draw!"
    );
});