import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandService } from 'src/app/boutique/shared/brand.service';
import { ProductService } from 'src/app/boutique/shared/product.service';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})
export class StoreListComponent implements OnInit {

 
  brands$: Observable<any>
  categories$: Observable<any>
  products$: Observable<any>
  promotedProduct$: Observable<any>
  currentJustify = 'justified'

  constructor(
    private brandService: BrandService,
    private productService: ProductService
  ) { }

  ngOnInit() {

    this.brands$ = this.productService.getBrands().pipe(shareReplay(1))
     this.brands$.subscribe(data => console.log('all brands', data))

    // this.products$ = this.productService.getProducts()
    //  this.products$.subscribe(data => console.log('all products', data))

    this.promotedProduct$ = this.productService.getDestockingPromotedProducts()
    this.promotedProduct$.subscribe(data => console.log('destocking promoted product', data))
 
   // this.categories$ = this.brandService.getCategories()
   // this.categories$.subscribe(data => console.log('all categories', data))




  }


}
