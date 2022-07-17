// date in blog section
const d = new Date();
document.getElementById("date").innerHTML = d;
const e = new Date();
document.getElementById("date2").innerHTML = e;
const f = new Date();
document.getElementById("date3").innerHTML = f;
// date in blog section

// jquery
let userName=document.getElementById('name');
let userError=document.getElementById('name_error');
// name section

let email=document.getElementById('email');
let emailError=document.getElementById('email_error');
// email section

// number section
let number=document.getElementById('number');
let numberError=document.getElementById('number_error');
let regex=(/^(?:(?:\+|00)88|01)?\d{11}$/);

// message section
let test=document.getElementById('message');
let testError=document.getElementById('test_error');
// function start
function sub(){
    if(userName.value==''){
        userError.innerText="input your name fast";
        userName.style.border='1px solid red';
        userError.style.color='red';
        userName.focus();
        return false;
    }
    else if(email.value==''){
        emailError.innerText='email required';
        email.style.border='1px solid red';
        emailError.style.color='red';
        userName.style.border='1px solid black';
        userError.innerText='';
        email.focus();
        return false;
    }
    else if(number.value==''){
        numberError.innerText='need a number';
        number.style.border='1px solid red';
        numberError.style.color='red';
        email.style.border='1px solid black';
        emailError.innerText='';
        number.focus();
        return false;
    }
    else if(!regex.test(number.value)){
        numberError.innerText='valid number please';
        number.style.border='1px solid red';
        numberError.style.color='red';
        number.focus();
        return false;
    }
    else if (test.value==''){
        testError.innerText='we want your feedback sir';
        test.style.border='1px solid red';
        testError.style.color='red';
        numberError.innerText='';
        number.style.border='1px solid black';
        test.focus();
    }
}