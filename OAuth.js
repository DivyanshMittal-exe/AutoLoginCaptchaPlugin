var x = document.getElementsByClassName("captcha-image")[0]
console.log(x);
var string = OCRAD(x);
console.log(string);
var inp = document.getElementsByClassName("form-control captcha-field")[0];
inp.setAttribute("value", string);

document.getElementsByClassName("form-control")[0].setAttribute("value","");
document.getElementsByClassName("form-control")[1].setAttribute("value","");
document.getElementsByClassName("btn btn-lg btn-primary btn-block")[0].click();