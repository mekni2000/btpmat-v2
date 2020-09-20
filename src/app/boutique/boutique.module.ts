import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { BoutiqueComponent } from './boutique.component';
import { CarouselPartenaireComponent } from './carousel-partenaire/carousel-partenaire.component';
 

import { CarouselModule } from 'ngx-owl-carousel-o';
import { CategorieMarqueComponent } from './categorie-marque/categorie-marque.component';
import { CarouselMarqueComponent } from './carousel-marque/carousel-marque.component';
import { ProduitComponent } from './produit/produit.component';
import { IndustrieComponent } from './industrie/industrie.component';
import { CarouselKaisserComponent } from './carousel-kaisser/carousel-kaisser.component';
import { CategorieKaisserComponent } from './categorie-kaisser/categorie-kaisser.component';
import { ProduitKaiserComponent } from './produit-kaiser/produit-kaiser.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ModalProductComponent } from './modal-product/modal-product.component';
import {MatDialogModule} from '@angular/material/dialog';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ProductSearchComponent } from './product-search/product-search.component';
import { Routes, RouterModule } from '@angular/router';
import { StoreListComponent } from './store-list/store-list.component';
import { BrandCardComponent } from './brand-card/brand-card.component';
import { ProductCardComponent } from './product-card/product-card.component';
 
 
 

 
const routes: Routes = [
  {
    path: 'boutique', 
    component: BoutiqueComponent,
    children: [
       { path: '', component: StoreListComponent },
      { path: ':query/products', component: ProductSearchComponent },
    ]
  }
]
 
 
 
 
 
  // @ts-ignore
@NgModule({
  declarations: [
    PartenaireComponent,
    BoutiqueComponent, 
    CarouselPartenaireComponent, 
    CategorieMarqueComponent, 
    CarouselMarqueComponent, 
    ProduitComponent, 
    IndustrieComponent, 
    CarouselKaisserComponent, 
    CategorieKaisserComponent, 
    ProduitKaiserComponent, 
    ModalProductComponent, 
    ProductSearchComponent, StoreListComponent, BrandCardComponent, ProductCardComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    AngularFontAwesomeModule,
    MatDialogModule,
    NgbModule,
    NgxSmartModalModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  exports:[
    BoutiqueComponent,
    ModalProductComponent
  ],
})
export class BoutiqueModule { }
