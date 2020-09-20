import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/espace-client/shared/auth.service';
import { Router } from '@angular/router';
import { Observable, fromEvent, Subject } from 'rxjs';
import { map, pluck, switchMap, tap, filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ShoppingCartService } from 'src/app/espace-client/shared/shopping-cart.service';
import { ShoppingCart } from 'src/app/models/shopping.model';
import { ProductService } from 'src/app/boutique/shared/product.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css' ,
  './navR.component.css',
]
})
export class NavComponent implements OnInit {

  @Input() user
  isShown:boolean=false;

  isLoggedIn$: Observable<boolean>

  user$: Observable<any>;
  cart$: Observable<ShoppingCart>;
  @Input() searchKey

  productsSubject = new Subject();

 @ViewChild('searchInput', {static: true}) searchInput
  @Output() search = new EventEmitter<string>()
  products
  constructor(
    private auth: AuthService,
    private productService: ProductService,
    private cartService: ShoppingCartService,
    private router: Router
    ) { }

  ngOnInit() {
    this.isLoggedIn$ = this.auth.user$.pipe(map(user => user !== null))
    this.isLoggedIn$.subscribe(console.log)


   this.user$ = this.auth.appUser$
   this.user$.subscribe(user => {this.user = user})
    
  

    this.cart$ = this.user$.pipe(
      pluck('id'),
      switchMap(id => this.cartService.getCart(id))
    )

    this.cart$.subscribe(cart => console.log('user cart', cart))


   
    

    fromEvent(this.searchInput.nativeElement, 'keyup')
      .pipe(
        pluck('target', 'value'),
        filter((searchTerm: any) => searchTerm.length > 2), //avoid length < 2
        debounceTime(500), //emit last value 
        distinctUntilChanged(), //rember the previous value and emit the new value if it s deffferent
        map(searchKey =>  searchKey),
        switchMap(searchKey => this.productService.searchProduct(searchKey))

      ).subscribe(res => {
        this.products = res
        this.productsSubject.next(this.products)
        console.log(this.products)
      })

      fromEvent(this.searchInput.nativeElement, 'click')
      .pipe(
        pluck('target', 'value'),
        filter((searchTerm: any) => searchTerm.length > 2), //avoid length < 2
        debounceTime(500), //emit last value 
        distinctUntilChanged(), //rember the previous value and emit the new value if it s deffferent
        map(searchKey =>  searchKey),
        switchMap(searchKey => this.productService.searchProduct(searchKey))

      ).subscribe(res => {
        this.products = res
        console.log(this.products)
      })




  }


  onSearch(query: string) {
    if (/\S/.test(query)) {
      this.router.navigate(['/boutique', query, 'products']);
    }
  }


  
  logout(){
    this.auth.doLogout();
    this.router.navigate(['/']);

  }

}
