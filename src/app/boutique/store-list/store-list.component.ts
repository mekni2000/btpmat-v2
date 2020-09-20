import { Component, OnInit } from '@angular/core';
import { BrandService } from '../shared/brand.service';
import { ProductService } from '../shared/product.service';
import { Observable } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';
import { PaginatedList } from 'src/app/models/pagination.model';
import { OwlOptions } from 'ngx-owl-carousel-o';

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

     this.products$ = this.productService.getProducts()
    //  this.products$.subscribe(data => console.log('all products', data))

    this.promotedProduct$ = this.productService.PromotedProducts()
    this.promotedProduct$.subscribe(data => console.log('promoted product', data))
 
   // this.categories$ = this.brandService.getCategories()
   // this.categories$.subscribe(data => console.log('all categories', data))




  }
  customOptions: OwlOptions = {
    loop: false,
         stagePadding: 40,
         items: 2.5,
         dots: false,
         nav: true,
         autoplayTimeout: 2000,
         autoplay: true,
         autoplayHoverPause: true,
         navText: ["<img class='arrow-left' src='../../../assets/img/arrow-left.svg'>", "<img class='arrow-left' src='../../../assets/img/arrow-right.svg'>"],

         responsive: {
             0: {
                 items: 1,
                 stagePadding: 0,


             },
             600: {
                 items: 2,


             },
             1000: {
                 items: 2,
                 stagePadding: 60,


             },


         }
  }



}
