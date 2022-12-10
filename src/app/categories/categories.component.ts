import { Component, OnInit } from '@angular/core';
import { Categorie } from '../models/categorie';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categorie:Categorie;
  constructor() { }

  ngOnInit(): void {
    this.categorie= new Categorie();
  }

}
