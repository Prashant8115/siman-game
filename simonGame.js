let gameSeq = []
let userSeq = []
let btns = ["red", "yellow", "green", "purple"]

let started = false;
let lavel = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", () => {
    if (started == false) {
        started = true;
        console.log("game started")
        lavelUp();
    }
})
function gameFlash(btn) {
    btn.classList.add("flash")
    setTimeout(function () {
        btn.classList.remove("flash")
    }, 250)
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash")
    }, 250)
}
function lavelUp() {
    userSeq = [];
    lavel++;
    h2.innerText = `lavel ${lavel}`;
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`)
    gameSeq.push(randColor);
    gameFlash(randBtn);
}
function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(lavelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your score was <b>${lavel}</b> <br> press any key to start.`
        document.querySelector("body").style.backgroundColor="red"
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"
        },200)
        reset();
    }
}
function btnPress() {
    console.log("button was pressed");
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}
    function reset() {
         started = false;
         gameSeq = []
         userSeq = []
         lavel = 0;
         console.log("reset hua")
    }


