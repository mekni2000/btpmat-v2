import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel-marque-destockage2',
  templateUrl: './carousel-marque-destockage2.component.html',
  styleUrls: ['./carousel-marque-destockage2.component.css']
})
export class CarouselMarqueDestockage2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  customOptions: OwlOptions = {
    loop: false,
         stagePadding: 0,
         items: 2.5,
         dots: false,
         nav: true,
         autoplayTimeout: 2000,
         autoplay: true,
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
}
