import { style } from '@angular/animations';
import { CssSelector } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/profile';

@Component({
  selector: 'app-cour-page',
  templateUrl: './cour-page.component.html',
  styleUrls: ['./cour-page.component.css']
})
export class CourPageComponent implements OnInit {
  flag:boolean=false;
  colorActive:string="border-bottom: 2px solid rgb(58, 39, 187);color: rgb(58, 39, 187);padding: 10px;font-weight: bold;";
  colorHover:string="border-bottom: 1px solid gray;color:gray;padding: 9px;font-weight: normal;";
  tab: number=1;
  page: number=1;
  enseignantList: Profile[];
etudiantList: Profile[];
nbrEtudiant: number=0;
  constructor() { }

  ngOnInit(): void {
    this.enseignantList=[
      {idProfile:1,nom:'Chihi',prenom:'Aymen',role:'Enseignat',img:'../assets/dist/img/avatar.png'},
      {idProfile:2,nom:'Riahi',prenom:'Salma',role:'Enseignat',img:'../assets/dist/img/avatar3.png'}
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
 
  clicSurBouton(num: number,nom: string){
    this.tab=num;
    document.querySelectorAll('.tabulation').forEach
    ((item)=>item.setAttribute("style",this.colorHover));
    document.getElementById(nom)?.setAttribute("style",this.colorActive);
  }
}
