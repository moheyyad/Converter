let myForm = document.getElementById('myForm');

let select = document.getElementById('select');

let input = document.getElementById('input');

let inputBox = document.getElementById('inputBox');

let resultBox = document.getElementById('resultBox');

let result = document.getElementById('result');

let mark = document.querySelector(".myMark");

let DtB = document.getElementById('DtB');
let DtH = document.getElementById('DtH');
let DtO = document.getElementById('DtO');
let OtD = document.getElementById('OtD');
let BtD = document.getElementById('BtD');

focus();
document.addEventListener('keydown', function(e) {
    if(e.key === "Enter"){
        submited();
    }
});

function submited(){


    switch(select.value){
        case "DtB": result.value =  decimacToBinary(input.value);
        break;
        
        case "DtH": result.value =  decimalToHexa(input.value);
        break;
        
        case "DtO": result.value =  decimacToOctal(input.value);
        break;
        
        case "OtD": result.value =  octalToDecimal(input.value);
        break;
        
        case "BtD": result.value =  binaryToDecimal(input.value);
        break;
        
    }

}

inputBox.addEventListener('click', focus);
function focus(){
    input.focus();
}

resultBox.addEventListener('click', () => {
    result.select();
    document.execCommand("copy");
});

function decimacToBinary(decimal){
    let binary = '';
    while (decimal > 0) {
        binary = (decimal % 2) + binary;
        decimal = Math.floor(decimal / 2);
    }
    return binary === '' ? '0': binary;
}

function decimalToHexa(decimal) {
    let hexa = '';
    while (decimal > 0) {
        let remiander = decimal % 16;
        if (remiander < 10) {
            hexa = remiander + hexa; 
        }else {
        hexa = String.fromCharCode(65 + remiander - 10) + hexa;
        }
        decimal = Math.floor(decimal / 16);
    }
    return hexa === '' ? '0': hexa;
}

function decimacToOctal(decimal){
    let octal = '';
    while (decimal > 0) {
        octal = (decimal % 8) + octal;
        decimal = Math.floor(decimal / 8);
    }
    return octal === '' ? '0': octal;
}

function octalToDecimal(octal){
    let decimal = 0;
    let placeValue = 1;
    for(let i = octal.length - 1; i >= 0; i--){
        decimal += parseInt(octal[i]) * placeValue;
        placeValue *= 8;
    }
    return decimal;
}

function binaryToDecimal(binary){
    let decimal = 0;
    for(let i = binary.length - 1; i >= 0; i--){
        decimal += parseInt(binary[i]) * Math.pow(2, binary.length -1 - i);
    }
    return decimal;
}

function deleteMe(){
    mark.classList.add("d-none");
}
