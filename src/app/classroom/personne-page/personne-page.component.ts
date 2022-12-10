import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/profile';

@Component({
  selector: 'app-personne-page',
  templateUrl: './personne-page.component.html',
  styleUrls: ['./personne-page.component.css']
})
export class PersonnePageComponent implements OnInit {
enseignantList: Profile[];
etudiantList: Profile[];
nbrEtudiant: number=0;
  constructor() { }

  ngOnInit(): void {
    this.enseignantList=[
      {idProfile:1,nom:'Chihi',prenom:'Aymen',role:'Enseignat',img:'../assets/dist/img/avatar.png'},
      {idProfile:2,nom:'Chihi',prenom:'Yosra',role:'Enseignat',img:'../assets/dist/img/avatar3.png'}
    ];
    this.etudiantList=[
      {idProfile:1,nom:'Chihi',prenom:'Raja',role:'Enseignat',img:'../assets/dist/img/avatar2.png'},
      {idProfile:2,nom:'Chihi',prenom:'Rami',role:'Enseignat',img:'../assets/dist/img/avatar4.png'},
      {idProfile:3,nom:'Chihi',prenom:'Mohamed',role:'Enseignat',img:'../assets/dist/img/avatar5.png'},
      {idProfile:4,nom:'Chihi',prenom:'Mounir',role:'Enseignat',img:'../assets/dist/img/photo1.png'},
      {idProfile:5,nom:'Chihi',prenom:'Mounir',role:'Enseignat',img:'../assets/dist/img/photo2.png'},


    ]
    this.nbrEtudiant=this.etudiantList.length;
  }

}
