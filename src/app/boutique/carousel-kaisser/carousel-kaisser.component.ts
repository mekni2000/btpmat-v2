import { Component, OnInit, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductService } from '../shared/product.service';
import { Observable, combineLatest, Subject, BehaviorSubject } from 'rxjs';
import { switchMap, pluck, map, shareReplay } from 'rxjs/operators';
import { PaginatedList } from 'src/app/models/pagination.model';
import { Product } from 'src/app/models/product.model';
 

@Component({
  selector: 'app-carousel-kaisser',
  templateUrl: './carousel-kaisser.component.html',
  styleUrls: ['./carousel-kaisser.component.css']
})
export class CarouselKaisserComponent implements OnInit {
  
  brands$: Observable<any>
  brand1$: Observable<any>
  brand2$: Observable<any>
  categories$: Observable<any>
  products1$: Observable<any>
  products2$: Observable<any>
  products$: Observable<any>
  selectedProduct$: Observable<any>


  // Action stream
  private categorySelectedSubject = new BehaviorSubject<number>(0);
  categorySelectedAction$ = this.categorySelectedSubject.asObservable();

  constructor(private productService: ProductService) { }


  ngOnInit() {
    this.brands$ = this.productService.getBrands().pipe(shareReplay(1))

    this.brands$.subscribe(data => console.log('all brands', data))


    // this.brand1$ = this.brands$.pipe(
    //   map((data: PaginatedList<any>) => {
    //     return data.paginatedList.map(brand => brand.id)
    //   }),
    //   switchMap(id => this.productService.getBrandById(id[0]))
    // )

    // this.brand1$.subscribe(data => console.log('brand1', data))


    // this.brand2$ = this.brands$.pipe(
    //   map((data: PaginatedList<any>) => {
    //     return data.paginatedList.map(brand => brand.id)
    //   }),
    //   switchMap(id => this.productService.getBrandById(id[1]))
    // )

    // this.brand2$.subscribe(data => console.log('brand2', data))

    // this.products1$ = this.brand1$.pipe(
    //   pluck('id'),
    //   switchMap(id => this.productService.getBrandProducts(id))
    // )

    // this.products1$.subscribe(data => console.log('product 1 ', data))


   
    // this.products2$ = this.brand2$.pipe(
    //   pluck('id'),
    //   switchMap(id => this.productService.getBrandProducts(id))
    // )

    // this.products2$.subscribe(data => console.log('product 2 ', data))



    this.products$ = this.productService.getProducts()
    this.products$.subscribe(data => console.log('all products', data))
 
 

  }

  onSelected(product: string): void {
    console.log(product)
    this.categorySelectedSubject.next(+product);
  }

  customOptions: OwlOptions = {
    loop: false,
         stagePadding: 0,
         items: 2.5,
         dots: false,
         nav: true,
         autoplayTimeout: 2000,
         autoplay: false,
         autoplayHoverPause: true,
       //  navText: ["<img class='arrow-left' src='../../../assets/img/arrow-left.svg'>", "<img class='arrow-left' src='../../../assets/img/arrow-right.svg'>"],

       responsive: {
        0: {
            items: 1,


        },
        500: {
            items: 2,
        },
        700: {
            items: 2,
        },
        999: {
            items: 2,
        },
        1000: {
            items: 1,
        },
        1250: {
            items: 1,
        },
    }
  }
  carouselProduits = ['',''];
  produits=['','','','','','','',''];


  productAction = new Subject<Product>()
  productActon$ = this.productAction.asObservable()
  onSelectedProduct(event){
    console.log(event)

  }

}

