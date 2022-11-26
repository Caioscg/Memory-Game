// all boxes
let b = 0
let g = 0
let r = 0
let y = 0
let w = 0
let p = 0


let b1 = 0
let g1 = 0
let r1 = 0
let b2 = 0
let g2 = 0
let r2 = 0
let y1 = 0
let w1 = 0
let p1 = 0
let y2 = 0
let w2 = 0
let p2 = 0

const body = document.querySelector('body')
let spanBlue1
let spanBlue2
let spanGreen1
let spanGreen2
let spanRed1
let spanRed2
let spanYellow1
let spanYellow2
let spanWhite1
let spanWhite2
let spanPreto1
let spanPreto2

let breakTime = 0
let count = 0
randomSquares()
// victory message
const victory = document.createElement('div')
victory.innerText = "You win!"
victory.style.fontSize = "150px"
victory.style.width = "800px"
victory.style.height = "200px"
victory.style.textAlign = "center"
victory.style.border = "3px solid white"
victory.style.borderRadius = "20px"
victory.style.position = "absolute"
victory.style.top = "50%"
victory.style.left = "50%"
victory.style.transform = "translate(-50%, -50%)"
victory.style.backgroundColor = "rgb(20, 20, 20)"
victory.style.color = "#393E46"
// play again button

// count of plays
const plays = document.querySelector("#count")

// all functions
function Blue1() {
    b1++;
    if (b1 > 1) return
    if (breakTime>1) return
    if (b === 2) return
    breakTime++;

    count++
    if (count % 2 === 0) plays.textContent = `Count of plays: ${count/2}`

    spanBlue1.style.animation= "rotate-diagonal-1 0.4s linear both"
    spanBlue1.style.backgroundColor = "#0E5E6F"
    b++;
    if (b === 1) {
        if (p === 1) {
            setTimeout(Brown, 800)
            return
        }
        else if (g === 1) {
            setTimeout(Brown, 800)
            return
        }
        else if (w === 1) {
            setTimeout(Brown, 800)
            return
        }
        else if (y === 1) {
            setTimeout(Brown, 800)
            return
        }
        else if (r === 1) {
            setTimeout(Brown, 800)
            return
        }
    }
    else if (b >= 2 && g >= 2 && r >= 2 && y >= 2 && w >= 2 && p >= 2) {
        setTimeout(() => {
            body.append(victory)
            victory.style.visibility = "visible"
            body.append(playAgain)
            playAgain.style.visibility = "visible"
        }, 300)
    }
    setTimeout (() => {
        breakTime = 0
    }, 800)
}

function Blue2() {
    b2++;
    if (b2 > 1) return
    if (breakTime>1) return
    if (b === 2) return
    breakTime++;

    count++
    if (count % 2 === 0) plays.textContent = `Count of plays: ${count/2}`

    spanBlue2.style.animation= "rotate-diagonal-1 0.4s linear both"
    spanBlue2.style.backgroundColor = "#0E5E6F"
    b++;
    if (b === 1) {
        if (p === 1) {
            setTimeout(Brown, 800)
            return
        }
        else if (g === 1) {
            setTimeout(Brown, 800)
            return
        }
        else if (w === 1) {
            setTimeout(Brown, 800)
            return
        }
        else if (y === 1) {
            setTimeout(Brown, 800)
            return
        }
        else if (r === 1) {
            setTimeout(Brown, 800)
            return
        }
    }
    else if (b >= 2 && g >= 2 && r >= 2 && y >= 2 && w >= 2 && p >= 2) {
        setTimeout(() => {
            body.append(victory)
            victory.style.visibility = "visible"
            body.append(playAgain)
            playAgain.style.visibility = "visible"
        }, 300)
    }
    setTimeout (() => {
        breakTime = 0
    }, 800)
}

function Green1() {
    g1++;
    if (g1 > 1) return
    if (breakTime>1) return
    if (g === 2) return
    breakTime++;

    count++
    if (count % 2 === 0) plays.textContent = `Count of plays: ${count/2}`

    spanGreen1.style.animation= "rotate-diagonal-1 0.4s linear both"
    spanGreen1.style.backgroundColor = "#54B435"
    g++;
    if (g === 1) {
        if (p === 1) {
            setTimeout(Brown, 800)
            return
        }
        else if (b === 1) {
            setTimeout(Brown, 800)
            return
        }
        else if (w === 1) {
            setTimeout(Brown, 800)
            return
        }
        else if (y === 1) {
            setTimeout(Brown, 800)
            return
        }
        else if (r === 1) {
            setTimeout(Brown, 800)
            return
        }
    }
    else if (b >= 2 && g >= 2 && r >= 2 && y >= 2 && w >= 2 && p >= 2) {
        setTimeout(() => {
            body.append(victory)
            victory.style.visibility = "visible"
            body.append(playAgain)
            playAgain.style.visibility = "visible"
        }, 300)
    }
    setTimeout (() => {
        breakTime = 0
    }, 800)
}

function Green2() {
    g2++;
    if (g2 > 1) return
    if (breakTime>1) return
    if (g === 2) return
    breakTime++;

    count++
    if (count % 2 === 0) plays.textContent = `Count of plays: ${count/2}`

    spanGreen2.style.animation= "rotate-diagonal-1 0.4s linear both"
    spanGreen2.style.backgroundColor = "#54B435"
    g++;
    if (g === 1) {
        if (p === 1) {
            setTimeout(Brown, 800)
            return
        }
        else if (b === 1) {
            setTimeout(Brown, 800)
            return
        }
        else if (w === 1) {
            setTimeout(Brown, 800)
            return
        }
        else if (y === 1) {
            setTimeout(Brown, 800)
            return
        }
        else if (r === 1) {
            setTimeout(Brown, 800)
            return
        }
    }
    else if (b >= 2 && g >= 2 && r >= 2 && y >= 2 && w >= 2 && p >= 2) {
        setTimeout(() => {
            body.append(victory)
            victory.style.visibility = "visible"
            body.append(playAgain)
            playAgain.style.visibility = "visible"
        }, 300)
    }
    setTimeout (() => {
        breakTime = 0
    }, 800)
}

function Red1() {
    r1++;
    if (r1 > 1) return
    if (breakTime>1) return
    if (r === 2) return
    breakTime++;

    count++
    if (count % 2 === 0) plays.textContent = `Count of plays: ${count/2}`

    spanRed1.style.animation= "rotate-diagonal-1 0.4s linear both"
    spanRed1.style.backgroundColor = "#B73E3E"
    r++;
    if (r === 1) {
        if (g === 1) {
            setTimeout(Brown, 800)
            return
        }
        else if (b === 1) {
            setTimeout(Brown, 800)
            return
        }
        else if (w === 1) {
            setTimeout(Brown, 800)
            return
        }
        else if (y === 1) {
            setTimeout(Brown, 800)
            return
        }
        else if (p === 1) {
            setTimeout(Brown, 800)
            return
        }
    }
    else if (b >= 2 && g >= 2 && r >= 2 && y >= 2 && w >= 2 && p >= 2) {
        setTimeout(() => {
            body.append(victory)
            victory.style.visibility = "visible"
            body.append(playAgain)
            playAgain.style.visibility = "visible"
        }, 300)
    }
    setTimeout (() => {
        breakTime = 0
    }, 800)
}

function Red2() {
    r2++;
    if (r2 > 1) return
    if (breakTime>1) return
    if (r === 2) return
    breakTime++;

    count++
    if (count % 2 === 0) plays.textContent = `Count of plays: ${count/2}`

    spanRed2.style.animation= "rotate-diagonal-1 0.4s linear both"
    spanRed2.style.backgroundColor = "#B73E3E"
    r++;
    if (r === 1) {
        if (g === 1) {
            setTimeout(Brown, 800)
            return
        }
        else if (b === 1) {
            setTimeout(Brown, 800)
            return
        }
        else if (w === 1) {
            setTimeout(Brown, 800)
            return
        }
        else if (y === 1) {
            setTimeout(Brown, 800)
            return
        }
        else if (p === 1) {
            setTimeout(Brown, 800)
            return
        }
    }
    else if (b >= 2 && g >= 2 && r >= 2 && y >= 2 && w >= 2 && p >= 2) {
        setTimeout(() => {
            body.append(victory)
            victory.style.visibility = "visible"
            body.append(playAgain)
            playAgain.style.visibility = "visible"
        }, 300)
    }
    setTimeout (() => {
        breakTime = 0
    }, 800)
}

function Yellow1() {
    y1++;
    if (y1 > 1) return
    if (breakTime>1) return
    if (y === 2) return
    breakTime++;

    count++
    if (count % 2 === 0) plays.textContent = `Count of plays: ${count/2}`

    spanYellow1.style.animation= "rotate-diagonal-1 0.4s linear both"
    spanYellow1.style.backgroundColor = "#beab21"
    y++;
    if (y === 1) {
        if (g === 1) {
            setTimeout(Brown, 800)
            return
        }
        else if (b === 1) {
            setTimeout(Brown, 800)
            return
        }
        else if (p === 1) {
            setTimeout(Brown, 800)
            return
        }
        else if (w === 1) {
            setTimeout(Brown, 800)
            return
        }
        else if (r === 1) {
            setTimeout(Brown, 800)
            return
        }
    }
    else if (b >= 2 && g >= 2 && r >= 2 && y >= 2 && w >= 2 && p >= 2) {
        setTimeout(() => {
            body.append(victory)
            victory.style.visibility = "visible"
            body.append(playAgain)
            playAgain.style.visibility = "visible"
        }, 300)
    }
    setTimeout (() => {
        breakTime = 0
    }, 800)
}

function Yellow2() {
    y2++;
    if (y2 > 1) return
    if (breakTime>1) return
    if (y === 2) return
    breakTime++;

    count++
    if (count % 2 === 0) plays.textContent = `Count of plays: ${count/2}`

    spanYellow2.style.animation= "rotate-diagonal-1 0.4s linear both"
    spanYellow2.style.backgroundColor = "#beab21"
    y++;
    if (y === 1) {
        if (g === 1) {
            setTimeout(Brown, 800)
            return
        }
        else if (b === 1) {
            setTimeout(Brown, 800)
            return
        }
        else if (p === 1) {
            setTimeout(Brown, 800)
            return
        }
        else if (w === 1) {
            setTimeout(Brown, 800)
            return
        }
        else if (r === 1) {
            setTimeout(Brown, 800)
            return
        }
    }
    else if (b >= 2 && g >= 2 && r >= 2 && y >= 2 && w >= 2 && p >= 2) {
        setTimeout(() => {
            body.append(victory)
            victory.style.visibility = "visible"
            body.append(playAgain)
            playAgain.style.visibility = "visible"
        }, 300)
    }
    setTimeout (() => {
        breakTime = 0
    }, 800)
}

function White1() {
    w1++;
    if (w1 > 1) return
    if (breakTime>1) return
    if (w === 2) return
    breakTime++;

    count++
    if (count % 2 === 0) plays.textContent = `Count of plays: ${count/2}`

    spanWhite1.style.animation= "rotate-diagonal-1 0.4s linear both"
    spanWhite1.style.backgroundColor = "#ddd8b3"
    w++;
    if (w === 1) {
        if (g === 1) {
            setTimeout(Brown, 800)
            return
        }
        else if (b === 1) {
            setTimeout(Brown, 800)
            return
        }
        else if (p === 1) {
            setTimeout(Brown, 800)
            return
        }
        else if (y === 1) {
            setTimeout(Brown, 800)
            return
        }
        else if (r === 1) {
            setTimeout(Brown, 800)
            return
        }
    }
    else if (b >= 2 && g >= 2 && r >= 2 && y >= 2 && w >= 2 && p >= 2) {
        setTimeout(() => {
            body.append(victory)
            victory.style.visibility = "visible"
            body.append(playAgain)
            playAgain.style.visibility = "visible"
        }, 300)
    }
    setTimeout (() => {
        breakTime = 0
    }, 800)
}

function White2() {
    w2++;
    if (w2 > 1) return
    if (breakTime>1) return
    if (w === 2) return
    breakTime++;

    count++;
    if (count % 2 === 0) plays.textContent = `Count of plays: ${count/2}`

    
    spanWhite2.style.animation= "rotate-diagonal-1 0.4s linear both"
    spanWhite2.style.backgroundColor = "#ddd8b3"
    w++;
    if (w === 1) {
        if (g === 1) {
            setTimeout(Brown, 800)
            return
        }
        else if (b === 1) {
            setTimeout(Brown, 800)
            return
        }
        else if (p === 1) {
            setTimeout(Brown, 800)
            return
        }
        else if (y === 1) {
            setTimeout(Brown, 800)
            return
        }
        else if (r === 1) {
            setTimeout(Brown, 800)
            return
        }
    }
    else if (b >= 2 && g >= 2 && r >= 2 && y >= 2 && w >= 2 && p >= 2) {
        setTimeout(() => {
            body.append(victory)
            victory.style.visibility = "visible"
            body.append(playAgain)
            playAgain.style.visibility = "visible"
        }, 300)
    }
    setTimeout (() => {
        breakTime = 0
    }, 800)
}

function Preto1() {
    p1++;
    if (p1 > 1) return
    if (breakTime>1) return
    if (p === 2) return
    breakTime++;

    count++
    if (count % 2 === 0) plays.textContent = `Count of plays: ${count/2}`

    spanPreto1.style.animation= "rotate-diagonal-1 .4s linear both"
    spanPreto1.style.backgroundColor = "#30302c"
    p++;
    if (p === 1) {
        if (g === 1) {
            setTimeout(Brown, 800)
            return
        }
        else if (b === 1) {
            setTimeout(Brown, 800)
            return
        }
        else if (w === 1) {
            setTimeout(Brown, 800)
            return
        }
        else if (y === 1) {
            setTimeout(Brown, 800)
            return
        }
        else if (r === 1) {
            setTimeout(Brown, 800)
            return
        }
    }
    else if (b >= 2 && g >= 2 && r >= 2 && y >= 2 && w >= 2 && p >= 2) {
        setTimeout(() => {
            body.append(victory)
            victory.style.visibility = "visible"
            body.append(playAgain)
            playAgain.style.visibility = "visible"
        }, 300)
    }
    setTimeout (() => {
        breakTime = 0
    }, 800)
}

function Preto2() {
    p2++;
    if (p2 > 1) return
    if (breakTime>1) return
    if (p === 2) return
    breakTime++;

    count++
    if (count % 2 === 0) plays.textContent = `Count of plays: ${count/2}`

    spanPreto2.style.animation= "rotate-diagonal-1 .4s linear both"
    spanPreto2.style.backgroundColor = "#30302c"
    p++;
    if (p === 1) {
        if (g === 1) {
            setTimeout(Brown, 800)
            return
        }
        else if (b === 1) {
            setTimeout(Brown, 800)
            return
        }
        else if (w === 1) {
            setTimeout(Brown, 800)
            return
        }
        else if (y === 1) {
            setTimeout(Brown, 800)
            return
        }
        else if (r === 1) {
            setTimeout(Brown, 800)
            return
        }
    }
    else if (b >= 2 && g >= 2 && r >= 2 && y >= 2 && w >= 2 && p >= 2) {
        setTimeout(() => {
            body.append(victory)
            victory.style.visibility = "visible"
            body.append(playAgain)
            playAgain.style.visibility = "visible"
        }, 300)
    }
    setTimeout (() => {
        breakTime = 0
    }, 800)
}

function Brown() {
    if (b < 2) {
        spanBlue1.style.animation= "rotate-diagonal-2 0.4s linear both";
        spanBlue1.style.backgroundColor = "rgb(104, 64, 36)"
        spanBlue1.style.border = "double black 10px"

        spanBlue2.style.animation= "rotate-diagonal-2 0.4s linear both";
        spanBlue2.style.backgroundColor = "rgb(104, 64, 36)"
        spanBlue2.style.border = "double black 10px"
        b = 0
        b1 = 0
        b2 = 0
    }
    if (g < 2) {
        spanGreen1.style.animation= "rotate-diagonal-2 0.4s linear both";
        spanGreen1.style.backgroundColor = "rgb(104, 64, 36)"
        spanGreen1.style.border = "double black 10px"

        spanGreen2.style.animation= "rotate-diagonal-2 0.4s linear both";
        spanGreen2.style.backgroundColor = "rgb(104, 64, 36)"
        spanGreen2.style.border = "double black 10px"
        g = 0
        g1 = 0
        g2 = 0
    }
    if (r < 2) {
        spanRed1.style.animation= "rotate-diagonal-2 0.4s linear both";
        spanRed1.style.backgroundColor = "rgb(104, 64, 36)"
        spanRed1.style.border = "double black 10px"

        spanRed2.style.animation= "rotate-diagonal-2 0.4s linear both";
        spanRed2.style.backgroundColor = "rgb(104, 64, 36)"
        spanRed2.style.border = "double black 10px"
        r = 0
        r1 = 0
        r2 = 0
    }
    if (y < 2) {
        spanYellow1.style.animation= "rotate-diagonal-2 0.4s linear both";
        spanYellow1.style.backgroundColor = "rgb(104, 64, 36)"
        spanYellow1.style.border = "double black 10px"

        spanYellow2.style.animation= "rotate-diagonal-2 0.4s linear both";
        spanYellow2.style.backgroundColor = "rgb(104, 64, 36)"
        spanYellow2.style.border = "double black 10px"
        y = 0
        y1 = 0
        y2 = 0
    }
    if (w < 2) {
        spanWhite1.style.animation= "rotate-diagonal-2 0.4s linear both";
        spanWhite1.style.backgroundColor = "rgb(104, 64, 36)"
        spanWhite1.style.border = "double black 10px"

        spanWhite2.style.animation= "rotate-diagonal-2 0.4s linear both";
        spanWhite2.style.backgroundColor = "rgb(104, 64, 36)"
        spanWhite2.style.border = "double black 10px"
        w = 0
        w1 = 0
        w2 = 0
    }
    if (p < 2) {
        spanPreto1.style.animation= "rotate-diagonal-2 .4s linear both";
        spanPreto1.style.backgroundColor = "rgb(104, 64, 36)"
        spanPreto1.style.border = "double black 10px"

        spanPreto2.style.animation= "rotate-diagonal-2 .4s linear both";
        spanPreto2.style.backgroundColor = "rgb(104, 64, 36)"
        spanPreto2.style.border = "double black 10px"
        p = 0
        p1 = 0
        p2 = 0
    }
    breakTime = 0
}

function getRandom() {
    random = Math.floor(Math.random() * 12)
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
    while (numberAlreadyPicked.includes(random)) {
        random = getRandom()
    }
    if (!numberAlreadyPicked.includes(random)) {
        spanYellow1 = document.querySelector(`#span-${random}`)
        numberAlreadyPicked.push(random)
    }
    while (numberAlreadyPicked.includes(random)) {
        random = getRandom()
    }
    if (!numberAlreadyPicked.includes(random)) {
        spanYellow2 = document.querySelector(`#span-${random}`)
        numberAlreadyPicked.push(random)
    }
    while (numberAlreadyPicked.includes(random)) {
        random = getRandom()
    }
    if (!numberAlreadyPicked.includes(random)) {
        spanWhite1 = document.querySelector(`#span-${random}`)
        numberAlreadyPicked.push(random)
    }
    while (numberAlreadyPicked.includes(random)) {
        random = getRandom()
    }
    if (!numberAlreadyPicked.includes(random)) {
        spanWhite2 = document.querySelector(`#span-${random}`)
        numberAlreadyPicked.push(random)
    }
    while (numberAlreadyPicked.includes(random)) {
        random = getRandom()
    }
    if (!numberAlreadyPicked.includes(random)) {
        spanPreto1 = document.querySelector(`#span-${random}`)
        numberAlreadyPicked.push(random)
    }
    while (numberAlreadyPicked.includes(random)) {
        random = getRandom()
    }
    if (!numberAlreadyPicked.includes(random)) {
        spanPreto2 = document.querySelector(`#span-${random}`)
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
spanYellow1.addEventListener("click", Yellow1)
spanYellow2.addEventListener("click", Yellow2)
spanWhite1.addEventListener("click", White1)
spanWhite2.addEventListener("click", White2)
spanPreto1.addEventListener("click", Preto1)
spanPreto2.addEventListener("click", Preto2)
