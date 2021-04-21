console.log("Moodle Works");

var usrnam = "";
var psswrd = "";
chrome.storage.sync.get("username", function (data) {
  usrnam = data.username;
});
chrome.storage.sync.get("password", function (data) {
  psswrd = data.password;
});
window.onload = function () {
  var usu = document.getElementById("username");
  usu.setAttribute("value", usrnam);
  var pusu = document.getElementById("password");
  pusu.setAttribute("value", psswrd);

  console.log(usrnam);

  var x = document.getElementById("login").innerText;
  var splits = x.split("\n");
  var im = splits[3];
  var checker = im.split(" ");
  var inpu = document.getElementById("valuepkg3");

  if (checker[2] == "first") {
    inpu.setAttribute("value", checker[4]);
  } else if (checker[2] == "second") {
    inpu.setAttribute("value", checker[6]);
  } else if (checker[1] == "subtract") {
    inpu.setAttribute("value", parseInt(checker[2]) - parseInt(checker[4]));
  } else if (checker[1] == "add") {
    inpu.setAttribute("value", parseInt(checker[2]) + parseInt(checker[4]));
  }
  document.getElementById("loginbtn").click();
};
