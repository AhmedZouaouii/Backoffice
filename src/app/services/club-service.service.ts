import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Club } from '../models/Club';
@Injectable({
  providedIn: 'root'
})
export class ClubServiceService {


    url='http://localhost:3000/Club/'
  
    constructor(private httpService: HttpClient) { }
    //form the backend Side
    getAllClubs(){
      return this.httpService.get<Club[]>(this.url)
    }
    addClub(club: Club){
      return this.httpService.post(this.url,club)
    }
    deleteClub(id:number){
      return this.httpService.delete(this.url+id)
    }
    updateClub(club: Club){
      return this.httpService.put(this.url+club.id,club)
    }
    getClubById(id:number){
      return this.httpService.get<Club>(this.url+id)
    }
  }
  

