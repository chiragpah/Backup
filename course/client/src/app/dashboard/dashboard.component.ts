
import { Component, ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  course: any;
  totalValue: number = 0;
  productSales: any[] = [];
  filteredCourses: any[] = [];
  searchTerm: string = '';

  view: [number, number] = [400, 370];
  showLegend: boolean = true;
  showLabels: boolean = true;
  gradient: boolean = false;
  isDoughnut: boolean = true;
  @ViewChild('searchInput', { static: false }) searchInputRef!: ElementRef;


  constructor(private courseService: UserService) { }

  ngOnInit(): void {
    this.courseService.getUserCourses().subscribe(data => {
      this.course = data;
      this.filteredCourses = this.course?.matchedCourses || [];
      this.updateProductSales();
    });
  }

  updateProductSales(): void {
    this.productSales = this.filteredCourses.map(course => ({
      name: course.name,
      value: course.courseData.length
    }));
    this.totalValue = this.filteredCourses.reduce((acc, course) => acc + course.courseData.length, 0) / this.filteredCourses.length * 10;
  }

  searchCourses(): void {
    // const searchTerm = this.searchInputRef.nativeElement.value;
    // console.log('Search term:', searchTerm);
    this.searchTerm = this.searchInputRef.nativeElement.value;
    if (!this.searchTerm) {
      console.log("we have text to search " + this.searchTerm)

      this.filteredCourses = this.course?.matchedCourses || [];
    } else {
      this.filteredCourses = this.course?.matchedCourses?.filter(course =>
        course.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    this.updateProductSales();
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  generateRange(n: number): number[] {
    return Array.from({ length: n }, (_, i) => i + 1);
  }
}