console.log("Welcome to Tic Toc Toe");
let turn = "X";
let gameOver = false

const changTurn = () => {
    return turn === "X" ? "O" : "X";
}

const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        console.log("x->event", e, boxtext[e[0]], boxtext[e[1]], boxtext[e[2]])
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && boxtext[e[0]].innerText !== "") {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
            gameOver = true;
            return;
        }
    })
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changTurn();
            // console.log("x-->", turn)
            checkWin();
            if (!gameOver) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

let reset = document.getElementsByClassName("btn")[0];
reset.addEventListener('click', changText)

function changText() {
    console.log(Array.from(boxes))
    Array.from(boxes).forEach(elm => {
        let boxtext = elm.querySelector('.boxtext');
        boxtext.innerText = '';
        turn = "X";
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    })
}