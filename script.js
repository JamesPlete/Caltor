//elements
let btns = document.querySelectorAll("button");
const dScreen = document.querySelector("#screen-box");
const ceBtn = document.querySelector("#ce");
const equalsBtn = document.querySelector("#orange-btn");
const validChars = "1234567890*%/.+-()";

//functions

function displayChecker() {
    if (dScreen.value.length >= 14){
        dScreen.style.paddingTop = "0.4rem";
    } else {
        dScreen.style.paddingTop = "1.8rem";
    }
}

function toScreen(e) {
    displayChecker();
    if (dScreen.value.length <= 38){
        if (e.type === "click")
            dScreen.value += e.target.textContent;
        else if (e.type === "keydown")
            dScreen.value += e.key;
    }
}
function del(){
    let sVal = dScreen.value;

    dScreen.value = sVal.slice(0, -1);
}

function clear(){
    dScreen.value = "";
}

function getResult(){
    try {
       dScreen.value = eval(dScreen.value);
    } catch (error) {
        dScreen.value = "Syntax Error";
    }
}

btns.forEach(btn => {
    if (!(btn.textContent === "C/CE" || btn.textContent === "=")){
        btn.classList.add("normal");
    }
});

btns = [...btns].filter(btn => btn.classList.contains("normal"));

btns.forEach(btn => {
    btn.addEventListener('click', toScreen);
});

ceBtn.addEventListener('click', clear);

equalsBtn.addEventListener('click', getResult);

document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === "backspace"){
        del();
    }
});

document.addEventListener('keydown', (e) => {
    if (validChars.includes(e.key.toLowerCase())){
        toScreen(e);
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === "enter"){
        getResult();
    }
});










