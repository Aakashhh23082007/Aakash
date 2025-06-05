function greet(name, cb){
    console.log("Hello," + name + "!");
    cb();
}

function gdb(){
    console.log("Goodbye!");

}
greet("Aakash",gdb);