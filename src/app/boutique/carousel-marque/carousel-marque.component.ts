import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Observable } from 'rxjs';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-carousel-marque',
  templateUrl: './carousel-marque.component.html',
  styleUrls: ['./carousel-marque.component.css']
})
export class CarouselMarqueComponent implements OnInit {
    products$: Observable<any>
 
    constructor(private productService: ProductService) { }

  ngOnInit() {

    this.products$ = this.productService.getProducts()
    // this.products$.subscribe(data => console.log('all products', data))
  }

  customOptions: OwlOptions = {
    loop: false,
         stagePadding: 0,
         items: 2,
         
         nav: true,
        
         autoplay: false,
         autoplayHoverPause: true,
          navText: ["<img class='arrow-left' src='../../../assets/img/arrow-left.svg'>", "<img class='arrow-left' src='../../../assets/img/arrow-right.svg'>"],

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

}
