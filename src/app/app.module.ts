import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ArticleServiceService } from './services/article-service.service';
import { AjouterNouveauArticleComponent } from './ajouter-nouveau-article/ajouter-nouveau-article.component';
import { HomePageComponent } from './classroom/home-page/home-page.component';
import { CourPageComponent } from './classroom/cour-page/cour-page.component';
import { FluxPageComponent } from './classroom/flux-page/flux-page.component';
import { UmailPageComponent } from './classroom/umail-page/umail-page.component';
import { ClassePageComponent } from './classroom/classe-page/classe-page.component';
import { PersonnePageComponent } from './classroom/personne-page/personne-page.component';
import { CorbeillePageComponent } from './classroom/corbeille-page/corbeille-page.component';
import { CalendarModule, DatePickerModule, TimePickerModule, DateRangePickerModule, DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';

@NgModule({
  declarations: [
    AppComponent,
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
    CorbeillePageComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CalendarModule, DatePickerModule, TimePickerModule, DateRangePickerModule, DateTimePickerModule
  ],
  providers: [ArticleServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
