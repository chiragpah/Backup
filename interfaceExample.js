// function printEmpDetails(Employee: {
//     "emp-code": number,
//     "name": string,
//     "Designation": string,
//     "Salary": number
// }) {
//     console.log(Employee.name + '\n');
function printEmpDetails(Employee) {
    console.log("ID:" + Employee.emp_code + '\n' + "Name:" + Employee.name + "\n" + "Designation:" + Employee.Designation);
    Employee.Salary ? console.log("Salary:" + Employee.Salary) : console.log("Salary:" + 0);
    console.log(Employee.greet());
}
var emp = {
    'emp_code': 28877,
    'name': 'Chirag Pahlajani',
    'Designation': 'Trainee-Software Engineer',
    'Salary': 20000.04,
    greet: function () {
        return "Welcome";
    }
};
var book = {
    bookName: "OOPS Basic"
};
printEmpDetails(emp);
// printEmpDetails(book);
