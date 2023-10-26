// alert("hello World");


// read numbers in the program
        
const num1 = parseFloat(prompt('Enter nr1:'));// 10 >> '10'
        
const num2 = parseFloat(prompt('Enter nr2:')); //abc, '', null NaN

// read operator

const operator = prompt('Enter operator (+, -, /, *)');
let result = 0 ;
if(isNaN(num1) || isNaN(num2)){
    alert('worng input ! refresh the page again and privide data !');
}else{
    if(operator == '+'){
        result = num1 + num2;
    }else if(operator == '-'){
        result = num1 - num2;
    }else if(operator == '*'){
        result = num1 * num2;
    }else if(operator == '/'){
        result = num1 / num2;
}
document.write(num1 + operator + num2 + '=' + result);
}