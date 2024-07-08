function area(r) {
    var result = 3.14 * r * r;
    return result;
}
var output = area(5);
console.log("Area is:" + output);
//arrow function
var show = function (name) { return "Welcome:" + name; };
var result = show("Chirag");
console.log(result);
