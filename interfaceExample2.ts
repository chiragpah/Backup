interface Employee_Type {
    name: string,
    designation: string,
    no_hrs: number,
    hrs_sal: number,
    salary: number,
    printDetail(): void;
    calSal(): void;
}
class Employee implements Employee_Type {
    name: string;
    designation: string;
    no_hrs: number;
    hrs_sal: number;
    salary: number;
    constructor(name: string, designation: string, hrs_sal: number, no_hrs: number) {
        this.name = name;
        this.designation = designation;
        this.hrs_sal = hrs_sal;
        this.no_hrs = no_hrs;
    }
    printDetail(): void {
        console.log("Name:" + this.name + '\t' + "Designation:" + this.designation + '\t' + "Salary:" + this.salary);
    }
    calSal(): void {
        this.salary = this.hrs_sal * this.no_hrs;
    }
}
let emp2 = new Employee("chirag", "QA", 500, 20)
emp2.calSal();
emp2.printDetail();