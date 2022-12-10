import { Component, OnInit } from '@angular/core';
import { ClasseEtudiant } from 'src/app/models/classe';

@Component({
  selector: 'app-classe-page',
  templateUrl: './classe-page.component.html',
  styleUrls: ['./classe-page.component.css']
})
export class ClassePageComponent implements OnInit {
  classeList: ClasseEtudiant[];
  constructor() { }

  ngOnInit(): void {
    this.classeList=[
      {nomClasse:'SIL',niveau:'2ème',nbrEtudiant:27,nbrGroupe:2,img:'../assets/dist/img/photo1.png'},
      {nomClasse:'MSI',niveau:'1ème',nbrEtudiant:30,nbrGroupe:2,img:'../assets/dist/img/photo1.png'},

    ]
  }

}
