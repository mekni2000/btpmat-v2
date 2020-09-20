import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestockageComponent } from './destockage.component';
import { PartenaireDestockageComponent } from './partenaire-destockage/partenaire-destockage.component';
import { CarouselDestockageComponent } from './carousel-destockage/carousel-destockage.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CategorieDestockageComponent } from './categorie-destockage/categorie-destockage.component';
import { CarouselMarqueDestockageComponent } from './carousel-marque-destockage/carousel-marque-destockage.component';
import { ProduitDestockageComponent } from './produit-destockage/produit-destockage.component';
 
import { IndustrieDestockageComponent } from './industrie-destockage/industrie-destockage.component';
import { CategoriesDestockage2Component } from './categories-destockage2/categories-destockage2.component';
import { CarouselMarqueDestockage2Component } from './carousel-marque-destockage2/carousel-marque-destockage2.component';
import { ProduitDestockage2Component } from './produit-destockage2/produit-destockage2.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { StoreListComponent } from './store-list/store-list.component';
import { Routes, RouterModule } from '@angular/router';
import { BrandCardComponent } from './brand-card/brand-card.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';



const routes: Routes = [
  {
    path: 'destockage', 
    component: DestockageComponent,
    children: [
       { path: '', component: StoreListComponent },
      // { path: ':query/products', component: ProductSearchComponent },
    ]
  }
]


@NgModule({
  declarations: [
    DestockageComponent, 
    PartenaireDestockageComponent, 
    CarouselDestockageComponent, 
    CategorieDestockageComponent, 
    CarouselMarqueDestockageComponent, 
    ProduitDestockageComponent, 
    IndustrieDestockageComponent, 
    CategoriesDestockage2Component, 
    CarouselMarqueDestockage2Component, 
    ProduitDestockage2Component, 
    StoreListComponent, 
    BrandCardComponent, 
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(routes),
    CarouselModule,
    NgbModule,
    FormsModule
  ],
  exports:[
    DestockageComponent
  ],
})
export class DestockageModule { }
