import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demobinding',
  templateUrl: './demobinding.component.html',
  styleUrls: ['./demobinding.component.css']
})
export class DemobindingComponent implements OnInit {

  constructor() { }
  status:boolean=false
  value=()=>{
    this.data="Stephin"
    this.status=true
  }

data="Abin"
  ngOnInit(): void {
  }

}
