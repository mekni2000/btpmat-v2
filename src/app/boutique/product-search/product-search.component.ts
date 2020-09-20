import { Component, OnInit, ElementRef, HostBinding, ViewChild } from '@angular/core';
import { Observable, fromEvent, from, merge } from 'rxjs';
import { ProductService } from '../shared/product.service';
import { ActivatedRoute } from '@angular/router';
import { map , switchMap, debounceTime, distinctUntilChanged, groupBy, filter, pluck} from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/espace-client/shared/auth.service';
import { UserService } from 'src/app/espace-client/shared/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {

  products$: Observable<any>
  searchKey

  closeResult: string;
  product
  user$: Observable<any>
  constructor(
    private productService: ProductService,
    private auth: AuthService,
    private userService: UserService,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private elRef: ElementRef
    ) { }

  ngOnInit() {

    this.user$ = this.auth.appUser$

    this.products$ = this.route.paramMap.pipe(
      map(params => params.get('query')),
      switchMap(query => this.productService.searchProduct(query))
    )
    this.products$.subscribe(products => console.log('searched Products', products))
 
 
 
   
  }




   counter = 1;

  openXl(content, product) {

    
    const modalRef = this.modalService.open(content, { size: 'xl', centered: true });
    
    this.product = product

    console.log(product)

    let count = document.querySelector(".js-count");
    let addButton = document.querySelector(".js-add");
    let subButton = document.querySelector(".js-sub");
    let number: any = document.querySelector(".js-number");
    let icon: any = document.querySelector(".js-add .js-icon");
  


    fromEvent(addButton, 'click').pipe(
      map(event => event),
    ).subscribe(event => {
      if(count.classList.contains('is-active')){
        this.add(number, icon)
      }else{
        count.classList.add('is-active')
      }
    })

    fromEvent(subButton, 'click').pipe(
      map(event => event),
    ).subscribe(event => {
      this.sub(number, icon);
    })

 

    fromEvent(document, 'click').pipe(
      map(event => event),
      filter((e: KeyboardEvent) => e.keyCode === 27 && count.classList.contains('is-active')),
      distinctUntilChanged((x, y) => x.type == y.type)
    ).subscribe(event => {
      console.log(event)
      count.classList.remove('is-active');
    })

    fromEvent(document, 'click').pipe(
      map(event => event),
      filter((e : any)  => !e.target.closest('.js-count'))
    ).subscribe(event => {
        count.classList.remove('is-active');
  
    })



    

  }

  
 
  
  
   add(number, icon){
    this.counter = Number(number.textContent);
    number.textContent = ++this.counter;
    icon.style.transform = 'rotate('+ 90*(this.counter-1) +'deg)';
  }

  sub(number, icon){
    if(this.counter > 1) {
      number.textContent = --this.counter;
      icon.style.transform = 'rotate('+ 90*(this.counter-1)+ 'deg)';
    }
  }


  
onSubmit(){
  // console.log(this.quantity)
   this.user$.pipe(
     pluck('id'),
     switchMap(id => this.userService.addProductToCart(id, this.product.id, this.counter))
   ).subscribe(data => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your product has been saved',
      showConfirmButton: false,
      timer: 1500
    })
   })
 }



}
