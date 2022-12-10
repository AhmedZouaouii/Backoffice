import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Club } from '../models/Club';
import { ClubServiceService } from '../services/club-service.service';
@Component({
  selector: 'app-ajouter-club',
  templateUrl: './ajouter-club.component.html',
  styleUrls: ['./ajouter-club.component.css']
})
export class AjouterClubComponent implements OnInit {
club :Club;
alert : boolean= false;


title:string;
  constructor(private clubService :ClubServiceService ,
    private currentRoute:ActivatedRoute,
    private routes:Router) { }

  ngOnInit(): void {
    
    let id= this.currentRoute.snapshot.params['id'];
   
    if(id==null){
      //add a new Product
      this.club=new Club();
    this.title='Ajouter un club'}
    else{
      //update
      this.title='Modifier club : '+id;
      this.clubService.getClubById(id).subscribe(
        (data)=>this.club=data
        )};

  }

  
  save():void{
    if(this.club.id==null){
      this.clubService.addClub(this.club).subscribe(()=>{this.routes.navigate(['listeClub'])});
    }  
    
    else{
      this.clubService.updateClub(this.club).subscribe(()=>{this.routes.navigate(['listeClub'])})
  
  }
    
    this.alert=true;


  }

}
