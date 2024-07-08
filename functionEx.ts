function area(r: number): number { // here inner number will be for specifying datatype of arg and outer is for return type of function
    let result = 3.14 * r * r;
    return result;
}
let output = area(5);
console.log("Area is:" + output);




//arrow function

let show = (name: string): string => "Welcome:" + name;
let result: string = show("Chirag");
console.log(result);
