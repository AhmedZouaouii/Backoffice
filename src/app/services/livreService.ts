import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Livre } from '../models/Livre';


@Injectable({
  providedIn: 'root'
})
export class LivreService {


  url = 'http://localhost:3000/Livre/';

  constructor(private httpService: HttpClient) { }
  //form the backend Side
  getAllLivres() {
    return this.httpService.get<Livre[]>(this.url);
  }
  addLivre(livre: Livre) {
    return this.httpService.post(this.url, livre);
  }
  deleteLivre(id: number) {
    return this.httpService.delete(this.url + id);
  }
  updateLivre(livre: Livre) {
    return this.httpService.put(this.url + livre.id, livre);
  }
  getLivreById(id: number) {
    return this.httpService.get<Livre>(this.url + id);
  }
}
