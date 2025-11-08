function randomNumberGenerator(min, max)
{
    return Math.floor((Math.random() * max)) + min;
}

function changeDice(selectorName, randomNumber)
{
    document.querySelector(String(selectorName)).setAttribute("src", "./images/dice" + randomNumber + ".png");
}

function whoWon(heading1, randomNumber1, randomNumber2)
{
    if (randomNumber1 > randomNumber2)
    {
        // If player 1 wins
        heading1.innerHTML = "Player 1 Wins!";
    }
    else if (randomNumber1 < randomNumber2)
    {
        // If player 2 wins
        heading1.innerHTML = "Player 2 Wins!";
    }
    else
    {
        // If it is a draw
        heading1.innerHTML = "Draw!";
    }
}

function buttonClicked()
{
    let randomNumber1 = randomNumberGenerator(1, 6);
    let randomNumber2 = randomNumberGenerator(1, 6);

    changeDice(".img1", randomNumber1);
    changeDice(".img2", randomNumber2);

    whoWon(document.querySelector("h1"), randomNumber1, randomNumber2);
}

document.querySelector("button").addEventListener("click", buttonClicked);