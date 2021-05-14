// node Bin2Dec.js 100101
const input = process.argv[2];

if (sanitization(input)['status']) {
    console.log(bin2Dec(input));
}else{
    console.log(sanitization(input)['error']);
}


function bin2Dec(input){
    let result = 0;
    let countInput = input.length-1;
    for (let i = countInput; i >= 0; i--) {
        result += input[i] * Math.pow(2, countInput-i);
    }
    return result;
}
function sanitization(value){
    if(isBin(value)){
        return {
            "status":false,
            "error":"Somete binario 0 e 1"
        }
    
    }
    if(isNaN(value)){
        return {
            "status":false,
            "error":"deve ser numeros"
        }
    }
    if( value.length > 8 ){
        return {
            "status":false,
            "error":"No maximo 8 digitos"
        }
    }
    return {
        "status":true
    };
}
function isBin(value){
    let result = false;
    for(let i = 2; i <=9;i++){
        if (value.search(i) > -1) {
            result = true;
        }
    }
    return result;
}