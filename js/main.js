
let select = document.querySelector("select");
let level = document.querySelector(".level");
let second = document.querySelector(".second");
let le_ar = document.querySelector(".le_ar");
let start = document.querySelector(".start a");
let word = document.querySelector(".wrd");
let input = document.querySelector("input");
let time = document.querySelector(".tm");
let score = document.querySelector(".scr");
let overlay = document.querySelector(".overlay")
let levels = {
    "Normal": 3,
    "Esay": 6,
    "Hard": 12
}
let arrayWords = [
    "Hello",
    "programming",
    "code",
    "javascript",
    "Town",
    "country",
    "testing",
    "youtube",
    "linkdein",
    "twitter",
    "github",
    "leetCode",
    "internet",
    "python",
    "scala",
    "destructuring",
    "paradigm",
    "styling",
    "cascode",
    "documentation",
    "coding",
    "funny",
    "working",
    "dependencies",
    "task",
    "runner",
    "roles",
    "test",
    "rust",
    "playing",
    "lesson",
    "codewars"
]
//change select
var arr2 = []

function selectlevel() {
    // select.onchange = function () {
    level.innerHTML = select.value;
    second.innerHTML = levels[select.value];
    if (level.innerHTML == ["Normal"]) {
        word.innerHTML = "";
        startPlay(arrayWords);
        arr2 = arrayWords
        le_ar.innerHTML = arrayWords.length;
    }
    if (level.innerHTML == ["Esay"]) {
        var arrayEasy = arrayWords.filter(el => el.length >= 4 && el.length <= 7);
        word.innerHTML = "";
        startPlay(arrayEasy);
        arr2 = arrayEasy
        le_ar.innerHTML = arrayEasy.length;
    }
    if (level.innerHTML == ["Hard"]) {
        var arrayHard = arrayWords.filter(el => el.length >= 11);
        word.innerHTML = "";
        startPlay(arrayHard);
        arr2 = arrayHard
        le_ar.innerHTML = arrayHard.length;
    }
    // }
}

//start playGame
start.onclick = function () {
    input.focus();
    start.parentElement.remove();
    selectlevel();
    startPlay(arrfltr)
}
function startPlay(arr2) {
    arr2.forEach(el => {
        let span = document.createElement("span");
        let spanText = document.createTextNode(el);
        span.appendChild(spanText);
        word.appendChild(span);
    })

    let randomWIndex = Math.floor(Math.random() * arr2.length);
    let randomWors = arr2[randomWIndex];
    let indexWord = arr2.indexOf(randomWors);
    arr2.splice(indexWord, 1);
    let allspn = document.querySelectorAll(".wrd span")
    allspn.forEach(el => {
        if (randomWors == el.innerHTML) {
            el.remove();
        }
    })
    let count = setInterval(() => {
        time.innerHTML--;
        var check = false
        if (time.innerHTML <= 0) {
            time.innerHTML = 5;
            if (input.value == randomWors) {
                score.innerHTML++;
                check = true
                window.localStorage.setItem("score", score.innerHTML);
            }
            randomWIndex = Math.floor(Math.random() * arr2.length);
            randomWors = arr2[randomWIndex];
            indexWord = arr2.indexOf(randomWors);
            arr2.splice(indexWord, 1)
            let allspn = document.querySelectorAll(".wrd span")
            allspn.forEach(el => {
                if (randomWors == el.innerHTML) {
                    el.remove();
                }
            })
            if (input.value !== randomWIndex && check == false) {
                let div = document.createElement("div");
                div.className = "over";
                let txt = document.createTextNode("Game Over");
                div.appendChild(txt);
                document.body.append(div);
                overlay.classList.add("active");
                clearInterval(count)
            }
            if (arr2.length == "") {
                let div = document.createElement("div");
                div.className = "success";
                let txt = document.createTextNode("success");
                div.appendChild(txt);
                document.body.append(div);
                overlay.classList.add("active");
                clearInterval(count)
            }
        }

    }, 2000)
}

