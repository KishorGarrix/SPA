import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  public modelSel;
  colors=[
    {"id": 1, "name": "Black"},
    {"id": 2, "name": "Blue"},
    {"id": 3, "name": "White"}
]

constructor(private router:Router,private route:ActivatedRoute) { }


  ngOnInit(): void {
    let name:string=this.route.snapshot.paramMap.get('name');
    this.modelSel=name; 
  }
  onSelect(color)
  {
   
      this.router.navigate(['/color',color.name]);  
 
  }


}
