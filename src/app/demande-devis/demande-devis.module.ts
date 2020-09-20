import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoordonnesComponent } from './coordonnes/coordonnes.component';
import { MapComponent } from './map/map.component';
import { FormsModule } from '@angular/forms';
import { CoordonnesProComponent } from './coordonnes-pro/coordonnes-pro.component';
import { DemandeDevisComponent } from './demande-devis.component';
import { Routes, RouterModule } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import { TranslationsModule } from '../translations/translations.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DemandeDevisCategoryComponent } from './demande-devis-category/demande-devis-category.component';
 
 
 
 

const routes: Routes = [
  { path: 'demande-devis', component: DemandeDevisComponent ,
  children:[
  { path: '', component: CoordonnesComponent },
  {path:'coordinated-pro', component:CoordonnesProComponent},
  {path:':label', component:DemandeDevisCategoryComponent}


  ],
},

 

  
  
 
 
 
 
  
 

  
];
 


 // @ts-ignore
@NgModule({
  declarations: [CoordonnesComponent, MapComponent, CoordonnesProComponent, DemandeDevisComponent, DemandeDevisCategoryComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatSelectModule,
    FormsModule,
    TranslationsModule,
     NgbModule,
  ]
})
export class DemandeDevisModule { }
