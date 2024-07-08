var Employee = /** @class */ (function () {
    function Employee(name, designation, hrs_sal, no_hrs) {
        this.name = name;
        this.designation = designation;
        this.hrs_sal = hrs_sal;
        this.no_hrs = no_hrs;
    }
    Employee.prototype.printDetail = function () {
        console.log("Name:" + this.name + '\t' + "Designation:" + this.designation + '\t' + "Salary:" + this.salary);
    };
    Employee.prototype.calSal = function () {
        this.salary = this.hrs_sal * this.no_hrs;
    };
    return Employee;
}());
var emp2 = new Employee("chirag", "QA", 500, 20);
emp2.calSal();
emp2.printDetail();
