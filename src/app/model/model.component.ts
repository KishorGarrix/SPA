import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {
  models=[
    {"id": 1, "name": "Audi A6"},
    {"id": 2, "name": "BMW X3"},
    {"id": 3, "name": "Benz AMG"}
]
public BrandId;
constructor(private router:Router ,private route:ActivatedRoute) { }


  ngOnInit(): void {
   /*   let id=parseInt(this.route.snapshot.paramMap.get('id'));
    this.BrandId=id;  */
   let name:string=this.route.snapshot.paramMap.get('name');
    this.BrandId=name; 
  }
  onSelect(model)
  {
     this.router.navigate(['/model',model.name]); 

  }

}
