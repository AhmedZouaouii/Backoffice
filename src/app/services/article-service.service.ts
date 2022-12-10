import { Injectable } from '@angular/core';
import { Article } from '../models/articleScientifique';

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {


  url='http://localhost:3000/Articles/'

  constructor(private httpService: HttpClient) { }
  //form the backend Side
  getAllArticles(){
    return this.httpService.get<Article[]>(this.url)
  }
  addArticle(article: Article){
    return this.httpService.post(this.url,article)
  }
  deleteArticle(id:number){
    return this.httpService.delete(this.url+id)
  }
  updateProduct(product: Article){
    return this.httpService.put(this.url+product.id,product)
  }
  getById(id:number){
    return this.httpService.get<Article>(this.url+id)
  }
}
