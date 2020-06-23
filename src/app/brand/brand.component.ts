import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

brands=[
    {"id": 1, "name": "Audi"},
    {"id": 2, "name": "BMW"},
    {"id": 3, "name": "Benz"}
]
  constructor(private router:Router) {
   
   }

  ngOnInit(): void {
  }
  onSelect(brand)
  {
     this.router.navigate(['/brand',brand.name]); 
    
  }
}
