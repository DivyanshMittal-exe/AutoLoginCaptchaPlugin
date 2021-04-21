console.log("Webmail Works");

var usrnam = "";
var psswrd = "";
chrome.storage.sync.get("username", function (data) {
  usrnam = data.username;
});
chrome.storage.sync.get("password", function (data) {
  psswrd = data.password;
});



var x = document.getElementById("captcha_image")
var string = OCRAD(x);
console.log(string);
var inp = document.getElementsByClassName("cc-cpt col-md-5 col-sm-12 col-xs-12 form-control")[0];


window.onload = function () {
  console.log(usrnam);
usrnam = usrnam + "@iitd.ac.in";
console.log(usrnam);
document.getElementById("rcmloginuser").setAttribute("value",usrnam);
document.getElementById("rcmloginpwd").setAttribute("value",psswrd);
inp.setAttribute("value", string);
document.getElementById("rcmloginsubmit").click();
}