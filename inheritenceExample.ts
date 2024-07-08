class Shape {

    pi: number = 3.14;
    constructor() { }
    display(ans: number): void {
        console.log("Area is:" + ans);

    }
}
class Circle extends Shape {
    constructor() {
        super();
    }
    area(r: number): number {
        return this.pi * r * r;//Inheritence
    }
}
class Triangle extends Shape {
    area(h: number, b: number): number {
        return .5 * h * b;
    }
}
let circleObj = new Circle();
let result1: number = circleObj.area(2.3)
circleObj.display(result1); //Inheritence
let triangleObj = new Triangle();
let result2: number = triangleObj.area(5, 6)
triangleObj.display(result2); //Inheritence