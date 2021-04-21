console.log("OAuth Works");

var usrnam = "";
var psswrd = "";
chrome.storage.sync.get("username", function (data) {
  usrnam = data.username;
});
chrome.storage.sync.get("password", function (data) {
  psswrd = data.password;
});



var x = document.getElementsByClassName("captcha-image")[0]
console.log(x);
var string = OCRAD(x);
console.log(string);
var inp = document.getElementsByClassName("form-control captcha-field")[0];


window.onload = function () {
    document.getElementsByClassName("form-control")[0].setAttribute("value",usrnam);
    document.getElementsByClassName("form-control")[1].setAttribute("value",psswrd);
    inp.setAttribute("value", string);
    setTimeout(function(){
      document.getElementsByClassName("btn btn-lg btn-primary btn-block")[0].click();
    },500);
    
}