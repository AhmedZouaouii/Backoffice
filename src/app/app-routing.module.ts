import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AjouterNouveauArticleComponent } from './ajouter-nouveau-article/ajouter-nouveau-article.component';
import { ClassePageComponent } from './classroom/classe-page/classe-page.component';
import { CorbeillePageComponent } from './classroom/corbeille-page/corbeille-page.component';
import { CourPageComponent } from './classroom/cour-page/cour-page.component';
import { FluxPageComponent } from './classroom/flux-page/flux-page.component';
import { HomePageComponent } from './classroom/home-page/home-page.component';
import { PersonnePageComponent } from './classroom/personne-page/personne-page.component';
import { UmailPageComponent } from './classroom/umail-page/umail-page.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
 { path: 'element', component: ContentComponent},
 { path: 'article', component: AjouterNouveauArticleComponent},
 { path: 'classroom/home', component: HomePageComponent},
 { path: 'classroom/cour', component: CourPageComponent},
 { path: 'classroom/flux', component: FluxPageComponent},
 { path: 'classroom/umail', component: UmailPageComponent},
 { path: 'classroom/classe', component: ClassePageComponent},
 { path: 'classroom/personne', component: PersonnePageComponent},
 { path: 'classroom/corbeille', component: CorbeillePageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
