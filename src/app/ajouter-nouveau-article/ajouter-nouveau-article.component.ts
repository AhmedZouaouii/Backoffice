import { Component, OnInit } from '@angular/core';
import { Article } from '../models/articleScientifique';
import { ArticleServiceService } from '../services/article-service.service';

@Component({
  selector: 'app-ajouter-nouveau-article',
  templateUrl: './ajouter-nouveau-article.component.html',
  styleUrls: ['./ajouter-nouveau-article.component.css']
})
export class AjouterNouveauArticleComponent implements OnInit {
article :Article;
  constructor(private articleService : ArticleServiceService) { }

  ngOnInit(): void {
    this.article=new Article();
  }
  save():void{
  
    this.articleService.addArticle(this.article).subscribe();
  }
}
