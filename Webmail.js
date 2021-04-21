var x = document.getElementById("captcha_image")
var string = OCRAD(x);
console.log(string);

var inp = document.getElementsByClassName("cc-cpt col-md-5 col-sm-12 col-xs-12 form-control")[0];



var usrnam = "";
var psswrd = "";
chrome.storage.sync.get("username", function (data) {
  usrnam = data.username;
});
usrnam = usrnam + "@iitd.ac.in";
chrome.storage.sync.get("password", function (data) {
  psswrd = data.password;
});
window.onload = function () {
document.getElementById("rcmloginuser").setAttribute("value",usrnam);
document.getElementById("rcmloginpwd").setAttribute("value",psswrd);
inp.setAttribute("value", string);
document.getElementById("rcmloginsubmit").click();
}