// all boxes
const spanBlue1 = document.querySelector('#span-blue1')
const spanBlue2 = document.querySelector('#span-blue2')
const spanGreen1 = document.querySelector('#span-green1')
const spanGreen2 = document.querySelector('#span-green2')
const spanRed1 = document.querySelector('#span-red1')
const spanRed2 = document.querySelector('#span-red2') 
let b = 0
let g = 0
let r = 0
const body = document.querySelector('body')

// victory message
const victory = document.createElement('div')
victory.innerText = "Você venceu!"
victory.style.fontSize = "100px"
victory.style.position = "absolute"
victory.style.top = "10px"
victory.style.left = "35%"
victory.style.backgroundColor = "lightgreen"

// play again button
const playAgain = document.createElement('button')
playAgain.innerText = "Jogar Novamente"
playAgain.style.width = '200px'
playAgain.style.height = '100px'
playAgain.style.fontSize = "30px"
playAgain.style.position = "absolute"
playAgain.style.bottom = "5px"
playAgain.style.backgroundColor = "lightgreen"
playAgain.addEventListener("click", Restart)

// all functions
function Blue1() {
    spanBlue1.style.backgroundColor = "blue";
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
    spanBlue2.style.backgroundColor = "blue";
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
    spanGreen1.style.backgroundColor = "green"
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
    spanGreen2.style.backgroundColor = "green"
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
    spanRed1.style.backgroundColor = "red"
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
    spanRed2.style.backgroundColor = "red"
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
        spanBlue1.style.backgroundColor = "saddlebrown"
        spanBlue1.style.border = "double black 10px"
        spanBlue2.style.backgroundColor = "saddlebrown"
        spanBlue2.style.border = "double black 10px"
        b = 0
    }
    if (g < 2) {
        spanGreen1.style.backgroundColor = "saddlebrown"
        spanGreen1.style.border = "double black 10px"
        spanGreen2.style.backgroundColor = "saddlebrown"
        spanGreen2.style.border = "double black 10px"
        g = 0
    }
    if (r < 2) {
        spanRed1.style.backgroundColor = "saddlebrown"
        spanRed1.style.border = "double black 10px"
        spanRed2.style.backgroundColor = "saddlebrown"
        spanRed2.style.border = "double black 10px"
        r = 0
    }
}
function Restart() {
    b = 0
    g = 0
    r = 0
    Brown()
    victory.style.visibility = "hidden"
    playAgain.style.visibility = "hidden"
}

//events
spanBlue1.addEventListener("click", Blue1)
spanBlue2.addEventListener("click", Blue2)
spanGreen1.addEventListener("click", Green1)
spanGreen2.addEventListener("click", Green2)
spanRed1.addEventListener("click", Red1)
spanRed2.addEventListener("click", Red2)


