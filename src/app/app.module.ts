import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { HomeComponent } from './home/home.component';
import { CarouselHomeComponent } from './home/carousel-home/carousel-home.component';
import { OwlCarouselComponent } from './home/owl-carousel/owl-carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ContratComponent } from './home/contrat/contrat.component';
import { PubliciteComponent } from './home/publicite/publicite.component';
import { BesoinsMateriauxComponent } from './home/besoins-materiaux/besoins-materiaux.component';
import { CommandeComponent } from './home/commande/commande.component';
import { ProvideComponent } from './home/provide/provide.component';
import { SkilledComponent } from './home/skilled/skilled.component';
import { FournitureComponent } from './home/fourniture/fourniture.component';
import { EquipeComponent } from './home/equipe/equipe.component';
import { OffringComponent } from './home/offring/offring.component';
import { ElectricityComponent } from './home/electricity/electricity.component';
import { FenetreComponent } from './home/fenetre/fenetre.component';
 
 
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { Common1Module } from './common1/common1.module';
import { NosSolutionModule } from './nos-solution/nos-solution.module';

import * as firebase from "firebase";



/* Firebase services */
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from '../environments/environment';
import { EspaceClientModule } from './espace-client/espace-client.module';


import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BoutiqueModule } from './boutique/boutique.module';
import { DestockageModule } from './destockage/destockage.module';
import { TranslationsModule } from './translations/translations.module';
import { TranslatePipe } from './translations/shared/translate.pipe';
import { ActualiteModule } from './actualite/actualite.module';







  // @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarouselHomeComponent,
    OwlCarouselComponent,
    ContratComponent,
    PubliciteComponent,
    BesoinsMateriauxComponent,
    CommandeComponent,
    ProvideComponent,
    SkilledComponent,
    FournitureComponent,
    EquipeComponent,
    OffringComponent,
    ElectricityComponent,
    FenetreComponent,

 


  

  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
 
    CarouselModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    Common1Module,
    AppRoutingModule,
    NosSolutionModule,
    EspaceClientModule,
    BoutiqueModule,
    DestockageModule,
    TranslationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FormsModule,
    BrowserModule,
    ActualiteModule,
    ReactiveFormsModule
  ],

  providers: [],
  bootstrap: [AppComponent, ]
})
export class AppModule { }
