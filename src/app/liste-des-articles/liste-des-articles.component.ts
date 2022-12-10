import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { Article } from '../models/articleScientifique';
import { ArticleServiceService } from '../services/article-service.service';

@Component({
  selector: 'app-liste-des-articles',
  templateUrl: './liste-des-articles.component.html',
  styleUrls: ['./liste-des-articles.component.css']
})
export class ListeDesArticlesComponent implements OnInit {
  public article: Article[];
  article1:Article;
  title:string;
  displayElement : boolean = false;  
  constructor(private articleService: ArticleServiceService,

    private currentRoute: ActivatedRoute,routes:Router
             
              ) { }

  ngOnInit(): void {

    this.articleService.getAllArticles().subscribe(
      (data:Article[])=>{this.article=data});

   
      }

    
  deleteArticle(id : any){
      this.articleService.deleteArticle(id).subscribe(
        ()=> this.article.splice(id,1)
      )
  }




}
