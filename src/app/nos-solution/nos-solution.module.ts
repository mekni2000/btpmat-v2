import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolutionsComponent } from './solutions/solutions.component';
 
import { InternationalComponent } from './international/international.component';
import { Routes, RouterModule } from '@angular/router';
import { TravauxAluminiumComponent } from './travaux-aluminium/travaux-aluminium.component';
import { FenetreComponent } from './fenetre/fenetre.component';
import { SiteCommerceComponent } from './site-commerce/site-commerce.component';
 


const routes: Routes = [
  
    {path:"international",component:InternationalComponent  },
    {path:'travaux-aluminium',component:TravauxAluminiumComponent},
    {path:'equipe-aluminium',component:FenetreComponent},
    {path:'site-commerce',component:SiteCommerceComponent}
  
 
 
];
@NgModule({
  declarations: [SolutionsComponent,  InternationalComponent, TravauxAluminiumComponent, FenetreComponent, SiteCommerceComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports:[
    RouterModule
  ]
})
export class NosSolutionModule { }
