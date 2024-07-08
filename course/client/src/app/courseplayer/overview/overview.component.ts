import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {
  @Input() description: string | undefined;
//  console.log(description);
ngOnInit(){
  console.log(this.description);
}
  

 
}
