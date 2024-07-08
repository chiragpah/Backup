var a = console;
var b;
function greetCustomer() {
    a.log("Welcome customer");
}

function welcomeCustomer(cust) {
    a.log("Welcome" + cust);
}
function readCustomer() {
    b = prompt("enter your emp name");
}
function display() {
    document.write("hello my name is chirag");
}
function demoFun() {
    var msg = "";
    var a = ["abc", "def", "xyz"];
    for (var i = 0; i < a.length; i++) {
        msg = msg + a[i]
    }
    document.getElementById('div1').innerHTML = msg + "<br>"

}