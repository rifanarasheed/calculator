
// function to display numbers 
function dispBox(num){     // values passed as string
    var res=document.querySelector(".result")
    res.value+=num         // string concatination
}

// function to evaluate values in res and intializing into variable out
function print(){
    var res=document.querySelector(".result").value;
var out=eval(res)    // eval("45+67+4")  
document.querySelector(".result").value=out
}

function  del(){
    var res=document.querySelector(".result").value;
    var data=res.de
    document.querySelector(".result").value=data
}
