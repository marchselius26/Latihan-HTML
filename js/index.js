const text = document.getElementById("text");
let number = 0;

function increment(){
    number++;
    text.innerText = `${number}`;
}

function decrement(){
    number--;
    text.innerText = `${number}`;
}