import { Component, OnInit } from '@angular/core';
import { Livre } from '../models/Livre';
import { LivreService } from '../services/livreService';

@Component({
  selector: 'app-listes-des-livres',
  templateUrl: './listes-des-livres.component.html',
  styleUrls: ['./listes-des-livres.component.css']
})
export class ListesDesLivresComponent implements OnInit {
  public livre: Livre[];
  constructor(private livreService:LivreService) { }

  ngOnInit(): void {
    this.livreService.getAllLivres().subscribe(
      (data:Livre[])=>{this.livre=data}
   );
  }
  supprimerLivre(id : number){
    this.livreService.getLivreById(id);
    this.livreService.deleteLivre(id).subscribe(
      ()=> this.livre.splice(id,1)
    );
    window.location.reload();

  
}

}
