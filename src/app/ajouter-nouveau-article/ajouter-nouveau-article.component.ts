import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../models/articleScientifique';
import { Categorie } from '../models/categorie';
import { ArticleServiceService } from '../services/article-service.service';

@Component({
  selector: 'app-ajouter-nouveau-article',
  templateUrl: './ajouter-nouveau-article.component.html',
  styleUrls: ['./ajouter-nouveau-article.component.css']
})
export class AjouterNouveauArticleComponent implements OnInit {
article :Article;
categorie : Categorie ;
alert : boolean= false;
message :String;
categorieTable :Categorie[];
categorieSelected :String ;
dateSelected:Date ;
dt:Date;
title:string;

  constructor(private articleService : ArticleServiceService,

    private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {
  
    let id= this.currentRoute.snapshot.params['id'];
    console.log(id);
    if(id==null){
      //add a new Product
      this.article=new Article();
    this.title='Ajouter un article scientifique'}
    else{
      //update
      this.title='Modifier article : '+id;
      this.articleService.getById(id).subscribe(
        (data)=>this.article=data
        )};
  
  }
  save():void{
    
    this.articleService.addArticle(this.article).subscribe();
    this.alert=true;
  }

  change(val : any){
    console.log(val)
    this.categorieSelected=val;

  }



}
