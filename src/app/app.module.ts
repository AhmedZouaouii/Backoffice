import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';

import { ArticleServiceService } from './services/article-service.service';
import { AjouterNouveauArticleComponent } from './ajouter-nouveau-article/ajouter-nouveau-article.component';
import { CategoriesComponent } from './categories/categories.component';
import { TestsComponent } from './tests/tests.component';
import { ListeDesArticlesComponent } from './liste-des-articles/liste-des-articles.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { HomePageComponent } from './classroom/home-page/home-page.component';
import { CourPageComponent } from './classroom/cour-page/cour-page.component';
import { FluxPageComponent } from './classroom/flux-page/flux-page.component';
import { UmailPageComponent } from './classroom/umail-page/umail-page.component';
import { ClassePageComponent } from './classroom/classe-page/classe-page.component';
import { PersonnePageComponent } from './classroom/personne-page/personne-page.component';
import { CorbeillePageComponent } from './classroom/corbeille-page/corbeille-page.component';
import { CalendarModule, DatePickerModule, DateRangePickerModule, DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';

import { AjouterClubComponent } from './ajouter-club/ajouter-club.component';
import { ListeDesClubsComponent } from './liste-des-clubs/liste-des-clubs.component';
import { DetailClubComponent } from './detail-club/detail-club.component';
import { InscriptionClubComponent } from './inscription-club/inscription-club.component';
import { AjouterLivreComponent } from './ajouter-livre/ajouter-livre.component';
import { ListesDesLivresComponent } from './liste-des-livres/listes-des-livres.component';


// Added automatically when the component was created with Angular CLI,
// but you need to import them manually in StackBlitz.

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SideBarComponent,
    FooterComponent,
    ContentComponent,
    AjouterNouveauArticleComponent,
    CategoriesComponent,
    TestsComponent,
    ListeDesArticlesComponent,
    DetailArticleComponent,
    StatisticsComponent,
    TopBarComponent,
    SideBarComponent,
    FooterComponent,
    ContentComponent,
    AjouterNouveauArticleComponent,
    HomePageComponent,
    CourPageComponent,
    FluxPageComponent,
    UmailPageComponent,
    ClassePageComponent,
    PersonnePageComponent,
    CorbeillePageComponent,

    AjouterClubComponent,
    ListeDesClubsComponent,
    DetailClubComponent,
    InscriptionClubComponent,
  
    AjouterLivreComponent,
    ListesDesLivresComponent,
  
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CalendarModule, 
    DatePickerModule, 
    DateRangePickerModule, 
    DateTimePickerModule
  ],
  providers: [ArticleServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
