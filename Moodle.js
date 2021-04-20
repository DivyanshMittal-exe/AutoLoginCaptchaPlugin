console.log("works");

var x = document.getElementById("login").innerText
var splits = x.split("\n");
var im = splits[3];
var checker = im.split(" ")
var inpu = document.getElementById("valuepkg3")
for (var i = 0; i < checker.length; i++) {
    console.log(checker[i]);
}

if(checker[2]=='first'){
    inpu.setAttribute("value",checker[4])
}else if(checker[2]=='second'){
    inpu.setAttribute("value",checker[6])
}else if(checker[1]=='subtract'){
    inpu.setAttribute("value",parseInt(checker[2])-parseInt(checker[4]))
}else if(checker[1]=='add'){
    inpu.setAttribute("value",parseInt(checker[2])+parseInt(checker[4]))
}


