// node Bin2DecArray.js [100101,1111,1011011]
const input = JSON.parse(process.argv[2]);

if (typeof input == 'object') {
    objectToString(input);
}else if (typeof input == 'number') {
    if (sanitization(input.toString())['status']) {
        console.log(bin2Dec(input.toString()));
    }else{
        console.log(sanitization(input.toString())['error']);
    }
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
function objectToString(object){
    object.forEach(element => {
        if (sanitization(element.toString())['status']) {
            console.log(bin2Dec(element.toString()));
        }else{
            console.log(sanitization(element.toString())['error']);
        }
    });
}