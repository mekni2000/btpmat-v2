import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
 
@Component({
  selector: 'app-owl-carousel',
  templateUrl: './owl-carousel.component.html',
  styleUrls: ['./owl-carousel.component.css', 
              './owl-carouselR.component.css'
]  

})
export class OwlCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
         navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
         responsive: {
             0: {
                 items: 1,


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
