import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AjouterNouveauArticleComponent } from './ajouter-nouveau-article/ajouter-nouveau-article.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
 { path: 'element', component: ContentComponent},
 { path: 'article', component: AjouterNouveauArticleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
