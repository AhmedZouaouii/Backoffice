import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AjouterClubComponent } from './ajouter-club/ajouter-club.component';
import { AjouterLivreComponent } from './ajouter-livre/ajouter-livre.component';


import { AjouterNouveauArticleComponent } from './ajouter-nouveau-article/ajouter-nouveau-article.component';
import { CategoriesComponent } from './categories/categories.component';
import { ClassePageComponent } from './classroom/classe-page/classe-page.component';
import { CorbeillePageComponent } from './classroom/corbeille-page/corbeille-page.component';
import { CourPageComponent } from './classroom/cour-page/cour-page.component';
import { FluxPageComponent } from './classroom/flux-page/flux-page.component';
import { HomePageComponent } from './classroom/home-page/home-page.component';
import { PersonnePageComponent } from './classroom/personne-page/personne-page.component';
import { UmailPageComponent } from './classroom/umail-page/umail-page.component';
import { ContentComponent } from './content/content.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { InscriptionClubComponent } from './inscription-club/inscription-club.component';
import { ListeDesArticlesComponent } from './liste-des-articles/liste-des-articles.component';
import { ListeDesClubsComponent } from './liste-des-clubs/liste-des-clubs.component';
import { ListesDesLivresComponent } from './liste-des-livres/listes-des-livres.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { TestsComponent } from './tests/tests.component';


const routes: Routes = [
 { path: 'element', component: ContentComponent},
 { path: 'article', component: AjouterNouveauArticleComponent},
 { path:'update/:id', component: AjouterNouveauArticleComponent},
 { path: 'categorie', component: CategoriesComponent},
 { path: 'tests', component: TestsComponent},
 { path: 'listeArticles', component: ListeDesArticlesComponent},
 { path: 'statistics', component: StatisticsComponent},
 { path: 'detail', component: DetailArticleComponent},
 { path: 'classroom/home', component: HomePageComponent},
 { path: 'classroom/cour', component: CourPageComponent},
 { path: 'classroom/flux', component: FluxPageComponent},
 { path: 'classroom/umail', component: UmailPageComponent},
 { path: 'classroom/classe', component: ClassePageComponent},
 { path: 'classroom/personne', component: PersonnePageComponent},
 { path: 'classroom/corbeille', component: CorbeillePageComponent},
 {path:'ajoutclub',component: AjouterClubComponent},
{path: 'listeClubs', component: ListeDesClubsComponent},
{path:'updateClub/:id', component: AjouterClubComponent},
{path:'inscriptionClub', component:InscriptionClubComponent},

{ path: 'ajoutlivre', component:AjouterLivreComponent},
{path:'updateLivre/:id', component: AjouterLivreComponent},
{ path: 'listeLivres', component: ListesDesLivresComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),  FormsModule,],
  exports: [RouterModule]
})
export class AppRoutingModule { }
