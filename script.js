console.log("Welcome to Number Converter");

// Variable decleration

let numberSystemLeftInput = document.getElementById('numberSystemInputLeft');
let numberSystemRightInput = document.getElementById('numberSystemInputRight');

let numberInputLeft = document.getElementById('numberInputLeft');

let numberInputRight = document.getElementById('numberInputRight');

let errorMessage = document.getElementById('errorMessage');

// Event Listeners

numberInputLeft.addEventListener("input", theResult);
numberInputRight.addEventListener("input", theResult);
numberSystemLeftInput.addEventListener("change", theResult);
numberSystemRightInput.addEventListener("change", theResult);

// Main function

function theResult(){

    // Section Decimal

    // Decimal <=> Binary

    if(numberSystemLeftInput.value === "decimal" && numberSystemRightInput.value=== "binary"){
        numberInputLeft.placeholder = "Decimal";
        numberInputLeft.addEventListener("input", ()=>{
            if (isNaN(numberInputLeft.value)){errorMessage.innerHTML="Enter a valid input";}
            else{errorMessage.innerHTML='';}
            numberInputRight.value = parseInt(numberInputLeft.value).toString(2);
            if (isNaN(numberInputRight.value)) {numberInputRight.value = '';}
        })
        
        numberInputRight.placeholder = "Binary";
        numberInputRight.addEventListener("input", ()=>{
            if (numberInputRight.value.toString().slice(-1)==="0" || numberInputRight.value.toString().slice(-1)==="1" || numberInputRight.value.toString().slice(-1)===""){errorMessage.innerHTML="";}
            else{errorMessage.innerHTML="Enter a valid input";}
            numberInputLeft.value = parseInt(numberInputRight.value, 2);
            if (isNaN(numberInputLeft.value)) {numberInputLeft.value = '';}
        })
    }

    // Decimal <=> Decimal

    else if(numberSystemLeftInput.value === "decimal" && numberSystemRightInput.value=== "decimal"){
        numberInputLeft.placeholder = "Decimal";
        numberInputLeft.addEventListener("input", ()=>{
            if (isNaN(numberInputLeft.value)){errorMessage.innerHTML="Enter a valid input";}
            else{errorMessage.innerHTML='';}
            numberInputRight.value = parseInt(numberInputLeft.value);
            if (isNaN(numberInputRight.value)) {numberInputRight.value = '';}
        })
        
        numberInputRight.placeholder = "Decimal";
        numberInputRight.addEventListener("input", ()=>{
            if (isNaN(numberInputRight.value)){errorMessage.innerHTML="Enter a valid input";}
            else{errorMessage.innerHTML='';}
            numberInputLeft.value = parseInt(numberInputRight.value);
            if (isNaN(numberInputLeft.value)) {numberInputLeft.value = '';}
        })
    }

    // Decimal <=> Octal

    else if(numberSystemLeftInput.value === "decimal" && numberSystemRightInput.value=== "octal"){
        numberInputLeft.placeholder = "Decimal";
        numberInputLeft.addEventListener("input", ()=>{
            if (isNaN(numberInputLeft.value)){errorMessage.innerHTML="Enter a valid input";}
            else{errorMessage.innerHTML='';}
            numberInputRight.value = parseInt(numberInputLeft.value).toString(8);
            if (isNaN(numberInputRight.value)) {numberInputRight.value = '';}
        })
        
        numberInputRight.placeholder = "Octal";
        numberInputRight.addEventListener("input", ()=>{
            if (isNaN(numberInputRight.value) || numberInputRight.value.toString().slice(-1)==="8" || numberInputRight.value.toString().slice(-1)==="9"){errorMessage.innerHTML="Enter a valid input";}
            else{errorMessage.innerHTML="";}
            numberInputLeft.value = parseInt(numberInputRight.value, 8);
            if (isNaN(numberInputLeft.value)) {numberInputLeft.value = '';}
        })
    }

    // Decimal <=> Hexadecimal

    else if (numberSystemLeftInput.value === "decimal" && numberSystemRightInput.value=== "hexadecimal"){
        numberInputLeft.placeholder = "Decimal";
        numberInputLeft.addEventListener("input", ()=>{
            if (isNaN(numberInputLeft.value)){errorMessage.innerHTML="Enter a valid input";}
            else{errorMessage.innerHTML='';}
            numberInputRight.value = toHexadecimal(parseInt(numberInputLeft.value));
        })
        
        numberInputRight.placeholder = "Hexadecimal";
        numberInputRight.addEventListener("input", ()=>{
            numberInputLeft.value = parseInt(numberInputRight.value, 16);
            if (isNaN(numberInputLeft.value)) {numberInputLeft.value = '';}
        })
    }

    //Section Binary

    // Binary <=> Binary

    else if (numberSystemLeftInput.value === "binary" && numberSystemRightInput.value=== "binary"){
        numberInputLeft.placeholder = "Binary";
        numberInputLeft.addEventListener("input", ()=>{
            if (numberInputLeft.value.toString().slice(-1)==="0" || numberInputLeft.value.toString().slice(-1)==="1" || numberInputLeft.value.toString().slice(-1)===""){errorMessage.innerHTML="";}
            else{errorMessage.innerHTML="Enter a valid input";}
            numberInputRight.value = parseInt(numberInputLeft.value);
            if (isNaN(numberInputRight.value)) {numberInputRight.value = '';}
        })
        
        numberInputRight.placeholder = "Binary";
        numberInputRight.addEventListener("input", ()=>{
            if (numberInputRight.value.toString().slice(-1)==="0" || numberInputRight.value.toString().slice(-1)==="1" || numberInputRight.value.toString().slice(-1)===""){errorMessage.innerHTML="";}
            else{errorMessage.innerHTML="Enter a valid input";}
            numberInputLeft.value = parseInt(numberInputRight.value);
            if (isNaN(numberInputLeft.value)) {numberInputLeft.value = '';}
        })
    }

    // Binary <=> Decimal

    else if (numberSystemLeftInput.value === "binary" && numberSystemRightInput.value=== "decimal"){
        numberInputLeft.placeholder = "Binary";
        numberInputRight.addEventListener("input", ()=>{
            if (isNaN(numberInputRight.value)){errorMessage.innerHTML="Enter a valid input";}
            else{errorMessage.innerHTML='';}
            numberInputLeft.value = parseInt(numberInputRight.value).toString(2);
            if (isNaN(numberInputLeft.value)) {numberInputLeft.value = '';}
        })
        
        numberInputRight.placeholder = "Decimal";
        numberInputLeft.addEventListener("input", ()=>{
            if (numberInputLeft.value.toString().slice(-1)==="0" || numberInputLeft.value.toString().slice(-1)==="1" || numberInputLeft.value.toString().slice(-1)===""){errorMessage.innerHTML="";}
            else{errorMessage.innerHTML="Enter a valid input";}
            numberInputRight.value = parseInt(numberInputLeft.value, 2);
            if (isNaN(numberInputRight.value)) {numberInputRight.value = '';}
        })
    }

    // Binary <=> Octal

    else if (numberSystemLeftInput.value === "binary" && numberSystemRightInput.value=== "octal"){
        numberInputLeft.placeholder = "Binary";
        numberInputLeft.addEventListener("input", ()=>{
            if (numberInputLeft.value.toString().slice(-1)==="0" || numberInputLeft.value.toString().slice(-1)==="1" || numberInputLeft.value.toString().slice(-1)===""){errorMessage.innerHTML="";}
            else{errorMessage.innerHTML="Enter a valid input";}
            var deci = parseInt(numberInputLeft.value, 2)
            numberInputRight.value = parseInt(deci).toString(8);
            if (isNaN(numberInputRight.value)) {numberInputRight.value = '';}
        })
        
        numberInputRight.placeholder = "Octal";
        numberInputRight.addEventListener("input", ()=>{
            if (isNaN(numberInputRight.value) || numberInputRight.value.toString().slice(-1)==="8" || numberInputRight.value.toString().slice(-1)==="9"){errorMessage.innerHTML="Enter a valid input";}
            else{errorMessage.innerHTML="";}
            var bina = parseInt(numberInputRight.value, 8);
            numberInputLeft.value = bina.toString(2);
            if (isNaN(numberInputLeft.value)) {numberInputLeft.value = '';}
        })
    }

    // Binary <=> Hexadecimal

    else if (numberSystemLeftInput.value === "binary" && numberSystemRightInput.value=== "hexadecimal"){
        numberInputLeft.placeholder = "Binary";
        numberInputLeft.addEventListener("input", ()=>{
            if (numberInputLeft.value.toString().slice(-1)==="0" || numberInputLeft.value.toString().slice(-1)==="1" || numberInputLeft.value.toString().slice(-1)===""){errorMessage.innerHTML="";}
            else{errorMessage.innerHTML="Enter a valid input";}
            var deci = parseInt(numberInputLeft.value, 2)
            numberInputRight.value = toHexadecimal(parseInt(deci));
        })
        
        numberInputRight.placeholder = "Hexadecimal";
        numberInputRight.addEventListener("input", ()=>{
            if (numberInputLeft.value.toString().slice(-1)==="0" || numberInputLeft.value.toString().slice(-1)==="1" || numberInputLeft.value.toString().slice(-1)===""){errorMessage.innerHTML="";}
            else{errorMessage.innerHTML="Enter a valid input";}
            var bina =  parseInt(numberInputRight.value, 16);
            numberInputLeft.value = bina.toString(2);
            if (isNaN(numberInputLeft.value)) {numberInputLeft.value = '';}
        })
    }

    //Section Octal

    // Octal <=> Binary

    else if (numberSystemLeftInput.value === "octal" && numberSystemRightInput.value=== "binary"){
        numberInputLeft.placeholder = "Octal";
        numberInputLeft.addEventListener("input", ()=>{
            if (isNaN(numberInputLeft.value) || numberInputLeft.value.toString().slice(-1)==="8" || numberInputLeft.value.toString().slice(-1)==="9"){errorMessage.innerHTML="Enter a valid input";}
            else{errorMessage.innerHTML="";}
            var deci = parseInt(numberInputLeft.value, 8);
            numberInputRight.value = deci.toString(2);
            if (isNaN(numberInputRight.value)) {numberInputRight.value = '';}
        })
        
        numberInputRight.placeholder = "Binary";
        numberInputRight.addEventListener("input", ()=>{
            var deci =  parseInt(numberInputRight.value, 2);
            numberInputLeft.value = deci.toString(8);
            if (isNaN(numberInputLeft.value)) {numberInputLeft.value = '';}
        })
    }

    // Octal <=> Decimal

    else if (numberSystemLeftInput.value === "octal" && numberSystemRightInput.value=== "decimal"){
        numberInputLeft.placeholder = "Octal";
        numberInputLeft.addEventListener("input", ()=>{
            if (isNaN(numberInputLeft.value) || numberInputLeft.value.toString().slice(-1)==="8" || numberInputLeft.value.toString().slice(-1)==="9"){errorMessage.innerHTML="Enter a valid input";}
            else{errorMessage.innerHTML="";}
            numberInputRight.value = parseInt(numberInputLeft.value, 8);
            if (isNaN(numberInputRight.value)) {numberInputRight.value = '';}
        })
        
        numberInputRight.placeholder = "Decimal";
        numberInputRight.addEventListener("input", ()=>{
            if (isNaN(numberInputRight.value)){errorMessage.innerHTML="Enter a valid input";}
            else{errorMessage.innerHTML='';}
            numberInputLeft.value = parseInt(numberInputRight.value).toString(8);
            if (isNaN(numberInputLeft.value)) {numberInputLeft.value = '';}
        })
    }

    // Octal <=> Octal

    else if (numberSystemLeftInput.value === "octal" && numberSystemRightInput.value=== "octal"){
        numberInputLeft.placeholder = "Octal";
        numberInputLeft.addEventListener("input", ()=>{
            if (isNaN(numberInputLeft.value) || numberInputLeft.value.toString().slice(-1)==="8" || numberInputLeft.value.toString().slice(-1)==="9"){errorMessage.innerHTML="Enter a valid input";}
            else{errorMessage.innerHTML="";}
            numberInputRight.value = parseInt(numberInputLeft.value);
            if (isNaN(numberInputRight.value)) {numberInputRight.value = '';}
        })
        
        numberInputRight.placeholder = "Octal";
        numberInputRight.addEventListener("input", ()=>{
            if (isNaN(numberInputRight.value) || numberInputRight.value.toString().slice(-1)==="8" || numberInputRight.value.toString().slice(-1)==="9"){errorMessage.innerHTML="Enter a valid input";}
            else{errorMessage.innerHTML="";}
            numberInputLeft.value = parseInt(numberInputRight.value);
            if (isNaN(numberInputLeft.value)) {numberInputLeft.value = '';}
        })
    }

    // Octal <=> Hexadecimal

    else if (numberSystemLeftInput.value === "octal" && numberSystemRightInput.value=== "hexadecimal"){
        numberInputLeft.placeholder = "Octal";
        numberInputLeft.addEventListener("input", ()=>{
            if (isNaN(numberInputLeft.value) || numberInputLeft.value.toString().slice(-1)==="8" || numberInputLeft.value.toString().slice(-1)==="9"){errorMessage.innerHTML="Enter a valid input";}
            else{errorMessage.innerHTML="";}
            var deci = parseInt(numberInputLeft.value, 8)
            numberInputRight.value = toHexadecimal(parseInt(deci));
        })
        
        numberInputRight.placeholder = "Hexadecimal";
        numberInputRight.addEventListener("input", ()=>{
            var bina =  parseInt(numberInputRight.value, 16);
            numberInputLeft.value = bina.toString(8);
            if (isNaN(numberInputLeft.value)) {numberInputLeft.value = '';}
        })
    }

    // Section Hexadecimal

    // Hexadecimal <=> Binary

    else if (numberSystemLeftInput.value === "hexadecimal" && numberSystemRightInput.value=== "binary"){
        numberInputLeft.placeholder = "Hexadecimal";
        numberInputLeft.addEventListener("input", ()=>{
            var deci = parseInt(numberInputLeft.value, 16)
            numberInputRight.value = deci.toString(2);
            if (isNaN(numberInputRight.value)) {numberInputRight.value = '';}
        })
        
        numberInputRight.placeholder = "Binary";
        numberInputRight.addEventListener("input", ()=>{
            if (numberInputRight.value.toString().slice(-1)==="0" || numberInputRight.value.toString().slice(-1)==="1" || numberInputRight.value.toString().slice(-1)===""){errorMessage.innerHTML="";}
            else{errorMessage.innerHTML="Enter a valid input";}
            var bina =  parseInt(numberInputRight.value, 2);
            numberInputLeft.value = toHexadecimal(bina);
        })
    }

    // Hexadecimal <=> Decimal

    else if (numberSystemLeftInput.value === "hexadecimal" && numberSystemRightInput.value=== "decimal"){
        numberInputLeft.placeholder = "Hexadecimal";
        numberInputLeft.addEventListener("input", ()=>{
            numberInputRight.value = parseInt(numberInputLeft.value, 16);
            if (isNaN(numberInputRight.value)) {numberInputRight.value = '';}
        })
        
        numberInputRight.placeholder = "Decimal";
        numberInputRight.addEventListener("input", ()=>{
            if (isNaN(numberInputRight.value)){errorMessage.innerHTML="Enter a valid input";}
            else{errorMessage.innerHTML='';}
            numberInputLeft.value = toHexadecimal(parseInt(numberInputRight.value));
        })
    }

    // Hexadecimal <=> Octal

    else if (numberSystemLeftInput.value === "hexadecimal" && numberSystemRightInput.value=== "octal"){
        numberInputLeft.placeholder = "Hexadecimal";
        numberInputLeft.addEventListener("input", ()=>{
            var deci = parseInt(numberInputLeft.value, 16)
            numberInputRight.value = deci.toString(8);
            if (isNaN(numberInputRight.value)) {numberInputRight.value = '';}
        })
        
        numberInputRight.placeholder = "Octal";
        numberInputRight.addEventListener("input", ()=>{
            if (isNaN(numberInputRight.value) || numberInputRight.value.toString().slice(-1)==="8" || numberInputRight.value.toString().slice(-1)==="9"){errorMessage.innerHTML="Enter a valid input";}
            else{errorMessage.innerHTML="";}
            var bina =  parseInt(numberInputRight.value, 8);
            numberInputLeft.value =toHexadecimal(bina);
        })
    }

    // Hexadecimal <=> Hexadecimal

    else if (numberSystemLeftInput.value === "hexadecimal" && numberSystemRightInput.value=== "hexadecimal"){
        numberInputLeft.placeholder = "Hexadecimal";
        numberInputLeft.addEventListener("input", ()=>{
            numberInputRight.value = numberInputLeft.value;
        })
        
        numberInputRight.placeholder = "Hexadecimal";
        numberInputRight.addEventListener("input", ()=>{
            numberInputLeft.value = numberInputRight.value;
        })
    }
}




function toHexadecimal(number) {
    var result=[],i;
    for (i=number;i>0;i=parseInt(i/16)) {
        result.push(i%16);
    }
    
    for (i=0;i<result.length;i++) {
        switch(result[i]) {
            case 10:
            result[i]="A";
            break;
            
            case 11:
            result[i]="B";
            break;
            
            case 12:
            result[i]="C";
            break;
            
            case 13:
            result[i]="D";
            break;
            
            case 14:
            result[i]="E";
            break;
            
            case 15:
            result[i]="F";
            break;
        }
    }
    return result.reverse().join("");
}


