import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livre } from '../models/Livre';
import { LivreService } from "../services/livreService";


@Component({
  selector: 'app-ajouter-livre',
  templateUrl: './ajouter-livre.component.html',
  styleUrls: ['./ajouter-livre.component.css']
})
export class AjouterLivreComponent implements OnInit {
  livre : Livre;
  alert : boolean= false;
  title:string;


  constructor(private livreService : LivreService,

    private currentRoute: ActivatedRoute, private routes:Router) { }

  ngOnInit(): void {
    
    let id= this.currentRoute.snapshot.params['id'];
    
    if(id==null){
      //add a new book
      this.livre=new Livre();
    this.title='Ajouter un livre'}
    else{
      //update
      this.title='Modifier le livre : '+id;
      this.livreService.getLivreById(id).subscribe(
        (data)=>this.livre=data
        )};
         
  }
  savelivre(): void{
    if(this.livre.id==null){
    this.livreService.addLivre(this.livre).subscribe(()=>{this.routes.navigate(['listelivre'])});
    } else {
      this.livreService.updateLivre(this.livre).subscribe(()=>{this.routes.navigate(['listelivre'])})

    }
    
    
    
    this.alert=true;
  }



  }




