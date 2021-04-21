console.log("Works");
var usrn = "";
var pass = "";
window.onload = function(){ 
    document.getElementById('bttn').onclick = function() {
        console.log("Got the data");
        usrn = document.getElementById('usrnm').value;
        pass = document.getElementById('pass').value;
        chrome.storage.sync.set({'username': usrn},function() {});
        chrome.storage.sync.set({'password': pass},function() {});
        location.reload();
        };
};