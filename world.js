const prompt = require('prompt-sync')();
const name = prompt("What is your name?");
console.log("Hello,"+name+"!");

function sq(x){
    let ans=0;
    ans=x*x;
    return ans;
}
console.log(sq(9));

function greet(name, cb){
    console.log("Hello," + name + "!");
    cb();
}

function gdb(){
    console.log("Goodbye!");

}
greet("Aakash",gdb);