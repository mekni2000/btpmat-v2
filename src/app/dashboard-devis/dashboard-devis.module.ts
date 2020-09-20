import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardDevisComponent } from './dashboard-devis.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ProfilComponent } from './profil/profil.component';
import { Routes, RouterModule } from '@angular/router';
import { PanierComponent } from './panier/panier.component';
import { DevisComponent } from './devis/devis.component';
import { ServiceClientComponent } from './service-client/service-client.component';
import { OffresPromosComponent } from './offres-promos/offres-promos.component';
import { PaiementComponent } from './paiement/paiement.component';
import { ValidationComponent } from './validation/validation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DevisEnCoursComponent } from './devis-en-cours/devis-en-cours.component';

import { AcceptedComponent } from './accepted/accepted.component';
import { RefusedComponent } from './refused/refused.component';
import { PasseCommandePanierComponent } from './passe-commande-panier/passe-commande-panier.component';
import { PasseCommandeDevisComponent } from './passe-commande-devis/passe-commande-devis.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { TranslationsModule } from '../translations/translations.module';
import { OrderQuoteComponent } from './order-quote/order-quote.component';
 




const routes: Routes = [
  {
    path: 'user', component: DashboardDevisComponent,
    children: [
      { path: ':userId/devis', component: DevisComponent },
      { path: ':userId/devis-en-cours', component: DevisEnCoursComponent },
      { path: ':userId/accepted', component: AcceptedComponent },
      { path: ':userId/refused', component: RefusedComponent },

      { path: ':userId/profile', component: ProfilComponent },
      { path: ':userId/panier', component: PanierComponent },
      { path: ':userId/order-quote', component: OrderQuoteComponent },
      { path: ':userId/devis-en-cours', component: DevisEnCoursComponent },

      { path: ':userId/paiement', component: PaiementComponent },
      { path: 'service-client', component: ServiceClientComponent },
      { path: 'offres', component: OffresPromosComponent },
      {
        path: 'paiement', component: PaiementComponent,
        children: [
          { path: 'validation', component: ValidationComponent }
        ]
      },
     
      
    ],
  },

];

// @ts-ignore
@NgModule({
  declarations: [
    DashboardDevisComponent, 
    SideBarComponent, 
    ProfilComponent, 
    PanierComponent, 
    DevisComponent, 
    ServiceClientComponent, 
    OffresPromosComponent, 
    PaiementComponent, 
    ValidationComponent, 
    DevisEnCoursComponent, 
    AcceptedComponent , 
    RefusedComponent, PasseCommandePanierComponent, PasseCommandeDevisComponent, ViewProductComponent, OrderQuoteComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    TranslationsModule
  ],
  exports: [
    DashboardDevisComponent,
    RouterModule,
  
    

  ]
})
export class DashboardDevisModule { }
