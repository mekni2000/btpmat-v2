import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConseilProsComponent } from './conseil-pros/conseil-pros.component';
import { HeaderComponent } from './header/header.component';
import { LangueComponent } from './header/langue/langue.component';
import { NavComponent } from './header/nav/nav.component';
import { SousNavComponent } from './header/sous-nav/sous-nav.component';
import { FooterComponent } from './footer/footer.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { StoreComponent } from './store/store.component';
import { HomeComponent } from '../home/home.component';
 

import { CoordonnesComponent } from '../demande-devis/coordonnes/coordonnes.component';
import { Routes, RouterModule } from '@angular/router';
import { DemandeDevisModule } from '../demande-devis/demande-devis.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { NosSolutionModule } from '../nos-solution/nos-solution.module';
import { SolutionsComponent } from '../nos-solution/solutions/solutions.component';
import { NgxSmartModalModule } from 'ngx-smart-modal';

import { EspaceClientModule } from '../espace-client/espace-client.module';
import { LoginParticulierComponent } from '../espace-client/login-particulier/login-particulier.component';
import { BoutiqueComponent } from '../boutique/boutique.component';
import { BoutiqueModule } from '../boutique/boutique.module';
import { VisiteComponent } from './visite/visite.component';
import { DestockageComponent } from '../destockage/destockage.component';
import { DestockageModule } from '../destockage/destockage.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {TranslationsModule} from 'src/app/translations/translations.module'





const routes: Routes = [
  { path: '', component: HomeComponent },

 
  { path: 'nos-solutions', component: SolutionsComponent },
  { path: 'espace-client', component: LoginParticulierComponent },




];


  // @ts-ignore
@NgModule({
  declarations: [ConseilProsComponent, HeaderComponent, LangueComponent, NavComponent, SousNavComponent, FooterComponent, NewsletterComponent, StoreComponent, VisiteComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    NgxSmartModalModule.forRoot(),
    MatMenuModule,
    NosSolutionModule,
    MatButtonModule,
    EspaceClientModule,
    BoutiqueModule,
    NgbModule,
    DemandeDevisModule,
    DestockageModule,
    FormsModule,
    TranslationsModule,
    NgbModule
  ],
  exports: [
    HeaderComponent,
    LangueComponent,
    NavComponent,
    SousNavComponent,
    FooterComponent,
    NewsletterComponent,
    StoreComponent,
    VisiteComponent,
    ConseilProsComponent,

    RouterModule,
  ]
})
export class Common1Module { }
