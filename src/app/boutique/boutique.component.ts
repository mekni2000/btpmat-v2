import { Component, OnInit, ViewEncapsulation, Input, ViewChild } from '@angular/core';
import { ProductService } from './shared/product.service';
import { Observable, forkJoin, Subject, pipe, BehaviorSubject } from 'rxjs';
import { shareReplay, switchMap, tap, map, pluck, mergeMap, filter } from 'rxjs/operators';
import { PaginatedList } from '../models/pagination.model';
import { BrandService } from './shared/brand.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { combineLatest } from 'rxjs';
import { NgbTabChangeEvent, NgbTabset } from '@ng-bootstrap/ng-bootstrap';
import { Categories } from '../models/categories.model';


@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.css'],

})

export class BoutiqueComponent implements OnInit {
  @Input() product

  brands$: Observable<any>
  categories$: Observable<any>
  products$: Observable<any>
  productsCategory$: Observable<any>
  brandCategories$: Observable<any>

  promotedProduct$: Observable<any>
  currentJustify = 'justified'

  results$: Observable<any>
  products = []
 

  // Action stream
  private categorySelectedSubject = new BehaviorSubject<number>(0);
  categorySelectedAction$ = this.categorySelectedSubject.asObservable();


  private brnadSelectedSubject = new BehaviorSubject<any>(0)
  brandSelectedAction$  = this.brnadSelectedSubject.asObservable()



  constructor(
    private brandService: BrandService,
    private productService: ProductService
    ) { }


  ngOnInit() {
    this.brands$ = this.productService.getBrands().pipe(shareReplay(1))
    this.brands$.subscribe(data => console.log('all brands', data))

    this.products$ = this.productService.getProducts().pipe(
      map((products: PaginatedList<any>) => products.paginatedList),
    )
    // this.products$.subscribe(data => console.log('all products', data))

    this.promotedProduct$ = this.productService.PromotedProducts()
    this.promotedProduct$.subscribe(data => console.log('promoted product', data))
 
    this.categories$ = this.brandService.getCategories()
   // this.categories$.subscribe(data => console.log('all categories', data))



    this.productsCategory$ = combineLatest(
      this.brands$,
      this.categories$,
      this.products$
    ).pipe(
      map(([brands, categories, products]) => {
        return {brands,  categories, products}
      })
    )
    this.productsCategory$.subscribe(results => {
     
     console.log( results)
    }) 







    // this.results$ = combineLatest(
    //   this.brands$,
    //   this.categories$,
    //   this.products$ 
    // ).pipe(
    //   map(([brands,  categories, products]) =>
    //   ({ brands,  categories, products }))
    // )
    // this.results$.subscribe(data => console.log('all data', data))

    
    // this.products$.pipe(
    //   map(data => {return  data.id}),
    //  switchMap(id => this.productService.getCategoryProducts(id))
    //   )
      
    
    // this.products$.subscribe(productsCategory => console.log('productsCategory', productsCategory)) 




    //brand{categories{category{products}}}




    //  let brands = this.brands$.pipe(
    //     map((brands: PaginatedList<any>) => brands.paginatedList.map(brand => brand.id))
    //  )
    //  brands.subscribe(brands => {
    //    brands.forEach(id => this.brandService.BrandCategories(id).subscribe(categories => {
    //       categories.map(category => 
    //        this.products$ =  this.productService.getCategoryProducts(id, category.id),
    //     //   this.products$.subscribe(products => console.log('products', products))
    //         )
    //    }))
    //  })


    
    //  let brands = this.brands$.pipe(
    //     map((brands: PaginatedList<any>) => brands.paginatedList.map(brand => brand.id))
    //  )

    // let categories = this.brands$.pipe(
    //   map((brands : PaginatedList<any>) => brands.paginatedList.map(brand => brand.categories.map(category => {
    //     return  {brand: brand.id, category: category.id}
        
    //   })))
    //  )

    //  this.products$ =  categories.pipe(
    //    map(data => data.map(data => {
    //      return this.productService.getCategoryProducts(data.brand, data.category).subscribe(
    //       products => console.log('category Products', products)
    //      )
    //    })),
       
    //  )
     
    // this.products$.subscribe(products => console.log('category Products', products))


  }
  brand
  onSelected(event): void {
    this.brand = event
    // this.brnadSelectedSubject.next(+brandId)
    // this.categorySelectedSubject.next(+categoryId);   
  }

  @ViewChild(NgbTabset, {static : true}) public ngbTabset: NgbTabset;

 
  getProducts(){
    this.products$ = combineLatest(
      this.categorySelectedAction$,
      this.brandSelectedAction$
    ).pipe(
      map(data => {return  data}),
     switchMap(data => this.productService.getCategoryProducts(data[0], data[1]))
      )
      
    
    this.products$.subscribe(productsCategory => console.log('productsCategory', productsCategory)) 
  }


  beforeChange(brand, $event: NgbTabChangeEvent) {

  
     
     console.log(brand, $event)
     this.products$ =  this.productService.getCategoryProducts(brand, $event)
     this.products$.subscribe(products => console.log(products))
    // // dont do anything if id matches
    // if ($event.nextId === 'tab-4') {
    //   $event.preventDefault();
    // }
  }







  countChange(event) {
    console.log('boutique', event)    
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
