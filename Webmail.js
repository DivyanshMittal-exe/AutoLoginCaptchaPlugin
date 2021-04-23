console.log("Webmail Works");

var usrnam = "";
var psswrd = "";
chrome.storage.sync.get("username", function (data) {
  usrnam = data.username;
});
chrome.storage.sync.get("password", function (data) {
  psswrd = data.password;
});





window.addEventListener('load', (event) => {


var inpis= "";


document.getElementById("layout").innerHTML += '<canvas id="todispl" width = "175px" height = "60px">  </canvas>';

setTimeout(function(){
  canvas = document.getElementById("captcha_image");
  let src = cv.imread(canvas);
  let dst = new cv.Mat();
  let ksize = new cv.Size(2, 2);
  cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY, 0);
  cv.threshold(src, src, 130, 200, cv.THRESH_BINARY);
  //cv.GaussianBlur(src, src, ksize, 0, 0, cv.BORDER_DEFAULT);
  cv.equalizeHist(src, dst);

  cv.imshow('todispl', dst);
  src.delete();
  dst.delete();


processimg = document.getElementById("todispl");

// Tesseract.recognize(
//   processimg,
//   'eng',
//   { logger: m => console.log(m) }
// ).then(({ data: { text } }) => {
//   inpis =text;
//   console.log(text);
// })

var string = OCRAD(processimg);
console.log(string);
strws = string.replace(/ /g,'')


usrnam = usrnam + "@iitd.ac.in";
console.log(usrnam);
document.getElementById("rcmloginuser").setAttribute("value",usrnam) ;
document.getElementById("rcmloginpwd").value=  psswrd;
var inp = document.getElementsByClassName(
  "cc-cpt col-md-5 col-sm-12 col-xs-12 form-control"
)[0];
inp.value=  strws;
  //console.log(usrnam);

  
  //document.getElementById("logo").click();
  //document.getElementById("rcmloginpwd").click()
document.getElementById("rcmloginsubmit").click();

}, 500);
});


