import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cour-page',
  templateUrl: './cour-page.component.html',
  styleUrls: ['./cour-page.component.css']
})
export class CourPageComponent implements OnInit {
  flag:boolean=false;
  color:string='1px solid gray';
  colorB:string='4px solid blue';
  tab: number=1;
  constructor() { }

  ngOnInit(): void {
  }
  clicSurBouton(page: number,val: boolean){
    this.tab=page;
    this.flag=val;
    this.color='4px solid blue';

  }
}
