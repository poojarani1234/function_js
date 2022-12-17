let readlineSync = require("readline-sync");
var a=readlineSync.questionInt("enter a number");
if(a>=18){
    console.log("you are eligible")
}
else{
    console.log("not eligible")
}
