var x = document.getElementById("captcha_image")
var string = OCRAD(x);
console.log(string);

var inp = document.getElementsByClassName("form-control captcha-field")[0];
inp.setAttribute("value", string);

document.getElementById("rcmloginuser").setAttribute("value","");
document.getElementById("rcmloginpwd").setAttribute("value","");
document.getElementsByClassName("btn btn-lg btn-primary btn-block")[0].click();