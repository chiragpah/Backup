import { Component } from '@angular/core';
interface Employee {
  name: string;
  designation: string;
  department: string;
}
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: '../app.component.css'
})

export class EmployeeListComponent {
  list: Employee[] = [
    {
      name: 'Chirag Pahlajani',
      designation: 'Engineering',
      department: 'CSE'
    },
    {
      name: 'Shreyas Ambhaikar',
      designation: 'Soft-Engineering',
      department: 'IT'
    }
  ]
}
