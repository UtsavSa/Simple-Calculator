
function appendToResult(value){

    if(value === '(' || value === ')'){
        document.getElementById("result").value += value;

    }
    else{

    document.getElementById("result").value +=value;
    }

}

function clearResult(){

    document.getElementById("result").value = "";

}

function calculateResult(){

    var result = eval(document.getElementById("result").value);
    document.getElementById("result").value = result;
}

function calculateSQRTResult(){

    var result = Math.sqrt(eval(document.getElementById("result").value));
    document.getElementById("result").value = result;
}



// trying to use display size to limit the size of calculator


var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

var maxWidth = windowWidth *0.8;
var maxHeight = windowHeight *0.8;

document.querySelector(".calculator").getElementsByClassName.maxWidth = maxWidth + "px";
document.querySelector(".calculator").getElementsByClassName.maxHeight = maxHeight + "px";