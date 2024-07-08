var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape() {
        this.pi = 3.14;
    }
    Shape.prototype.display = function (ans) {
        console.log("Area is:" + ans);
    };
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super.call(this) || this;
    }
    Circle.prototype.area = function (r) {
        return this.pi * r * r; //Inheritence
    };
    return Circle;
}(Shape));
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Triangle.prototype.area = function (h, b) {
        return .5 * h * b;
    };
    return Triangle;
}(Shape));
var circleObj = new Circle();
var result1 = circleObj.area(2.3);
circleObj.display(result1); //Inheritence
var triangleObj = new Triangle();
var result2 = triangleObj.area(5, 6);
triangleObj.display(result2); //Inheritence
