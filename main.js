// all boxes
let b = 0
let g = 0
let r = 0
const body = document.querySelector('body')
let spanBlue1
let spanBlue2
let spanGreen1
let spanGreen2
let spanRed1
let spanRed2
randomSquares()

// victory message
const victory = document.createElement('div')
victory.innerText = "You win!"
victory.style.fontSize = "150px"
victory.style.width = "800px"
victory.style.height = "200px"
victory.style.textAlign = "center"
victory.style.border = "3px solid white"
victory.style.borderRadius = "10%"
victory.style.position = "absolute"
victory.style.top = "50%"
victory.style.left = "50%"
victory.style.transform = "translate(-50%, -50%)"
victory.style.backgroundColor = "rgb(20, 20, 20)"
victory.style.color = "#393E46"
// play again button


// all functions
function Blue1() {
    spanBlue1.style.backgroundColor = "#0E5E6F";
    b++;
    if (b === 1) {
        if (g === 1) {
            setTimeout(Brown, 300)
        }
        else if (r === 1) {
            setTimeout(Brown, 300)
        }
    }
    if (b >= 2 && g >= 2 && r >= 2) {
        body.append(victory)
        victory.style.visibility = "visible"
        body.append(playAgain)
        playAgain.style.visibility = "visible"
    }
}
function Blue2() {
    spanBlue2.style.backgroundColor = "#0E5E6F";
    b++;
    if (b === 1) {
        if (g === 1) {
            setTimeout(Brown, 300)
        }
        else if (r === 1) {
            setTimeout(Brown, 300)
        }
    }
    if (b >= 2 && g >= 2 && r >= 2) {
        body.append(victory)
        victory.style.visibility = "visible"
        body.append(playAgain)
        playAgain.style.visibility = "visible"
    }
}
function Green1() {
    spanGreen1.style.backgroundColor = "#54B435"
    g++;
    if (g === 1) {
        if (b === 1) {
            setTimeout(Brown, 300)
        }
        else if (r === 1) {
            setTimeout(Brown, 300)
        }
    }
    if (b >= 2 && g >= 2 && r >= 2) {
        body.append(victory)
        victory.style.visibility = "visible"
        body.append(playAgain)
        playAgain.style.visibility = "visible"
    }
}
function Green2() {
    spanGreen2.style.backgroundColor = "#54B435"
    g++;
    if (g === 1) {
        if (b === 1) {
            setTimeout(Brown, 300)
        }
        else if (r === 1) {
            setTimeout(Brown, 300)
        }
    }
    if (b >= 2 && g >= 2 && r >= 2) {
        body.append(victory)
        victory.style.visibility = "visible"
        body.append(playAgain)
        playAgain.style.visibility = "visible"
    }
}
function Red1() {
    spanRed1.style.backgroundColor = "#B73E3E"
    r++;
    if (r === 1) {
        if (g === 1) {
            setTimeout(Brown, 300)
        }
        else if (b === 1) {
            setTimeout(Brown, 300)
        }
    }
    if (b >= 2 && g >= 2 && r >= 2) {
        body.append(victory)
        victory.style.visibility = "visible"
        body.append(playAgain)
        playAgain.style.visibility = "visible"
    }
}
function Red2() {
    spanRed2.style.backgroundColor = "#B73E3E"
    r++;
    if (r === 1) {
        if (g === 1) {
            setTimeout(Brown, 300)
        }
        else if (b === 1) {
            setTimeout(Brown, 300)
        }
    }
    if (b >= 2 && g >= 2 && r >= 2) {
        body.append(victory)
        victory.style.visibility = "visible"
        body.append(playAgain)
        playAgain.style.visibility = "visible"
    }
}
function Brown() {
    if (b < 2) {
        spanBlue1.style.backgroundColor = "rgb(104, 64, 36)"
        spanBlue1.style.border = "double black 10px"
        spanBlue2.style.backgroundColor = "rgb(104, 64, 36)"
        spanBlue2.style.border = "double black 10px"
        b = 0
    }
    if (g < 2) {
        spanGreen1.style.backgroundColor = "rgb(104, 64, 36)"
        spanGreen1.style.border = "double black 10px"
        spanGreen2.style.backgroundColor = "rgb(104, 64, 36)"
        spanGreen2.style.border = "double black 10px"
        g = 0
    }
    if (r < 2) {
        spanRed1.style.backgroundColor = "rgb(104, 64, 36)"
        spanRed1.style.border = "double black 10px"
        spanRed2.style.backgroundColor = "rgb(104, 64, 36)"
        spanRed2.style.border = "double black 10px"
        r = 0
    }
}
function getRandom() {
    random = Math.floor(Math.random() * 6)
    return random
}
function randomSquares() {
    let random = -1
    let numberAlreadyPicked = []
    random =  getRandom()
    if (!numberAlreadyPicked.includes(random)) {
        spanBlue1 = document.querySelector(`#span-${random}`)
        numberAlreadyPicked.push(random)
    }
    while (numberAlreadyPicked.includes(random)) {
        random = getRandom()
    }
    if (!numberAlreadyPicked.includes(random)) {
        spanBlue2 = document.querySelector(`#span-${random}`)
        numberAlreadyPicked.push(random)
    }
    while (numberAlreadyPicked.includes(random)) {
        random = getRandom()
    }
    if (!numberAlreadyPicked.includes(random)) {
        spanGreen1 = document.querySelector(`#span-${random}`)
        numberAlreadyPicked.push(random)
    }
    while (numberAlreadyPicked.includes(random)) {
        random = getRandom()
    }
    if (!numberAlreadyPicked.includes(random)) {
        spanGreen2 = document.querySelector(`#span-${random}`)
        numberAlreadyPicked.push(random)
    }
    while (numberAlreadyPicked.includes(random)) {
        random = getRandom()
    }
    if (!numberAlreadyPicked.includes(random)) {
        spanRed1 = document.querySelector(`#span-${random}`)
        numberAlreadyPicked.push(random)
    }
    while (numberAlreadyPicked.includes(random)) {
        random = getRandom()
    }
    if (!numberAlreadyPicked.includes(random)) {
        spanRed2 = document.querySelector(`#span-${random}`)
        numberAlreadyPicked.push(random)
    }
}

//events
spanBlue1.addEventListener("click", Blue1)
spanBlue2.addEventListener("click", Blue2)
spanGreen1.addEventListener("click", Green1)
spanGreen2.addEventListener("click", Green2)
spanRed1.addEventListener("click", Red1)
spanRed2.addEventListener("click", Red2)
