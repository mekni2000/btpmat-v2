import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
 
 
import { ActualiteComponent } from './actualite/actualite.component';
 
 
 
 
 
 
 
 


const routes: Routes = [
  { path:'' , component : HomeComponent },
  
];
  // @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(routes),
 
     
  ],
  exports: [RouterModule,]
})
export class AppRoutingModule { }
