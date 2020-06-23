import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public colorSel;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    let name:string=this.route.snapshot.paramMap.get('name');
    this.colorSel=name; 
  }

}
