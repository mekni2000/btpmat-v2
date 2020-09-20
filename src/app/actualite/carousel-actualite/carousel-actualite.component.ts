import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel-actualite',
  templateUrl: './carousel-actualite.component.html',
  styleUrls: ['./carousel-actualite.component.css',
  './carousel-actualiteR.component.css'

]
})
export class CarouselActualiteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  customOptions: OwlOptions = {
    loop: false,
    dots: false,
    nav: true,
    margin: -300,
    stagePadding: 20,
 
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
         responsive: {

          0: {
              items: 1,
              stagePadding: 50,
              margin: 20,
  
          },
          500: {
              items: 2,
              stagePadding: 50,
              margin: 10,
          },
          991: {
              items: 2,
              stagePadding: 50,
              margin: -110,
          },
          1200: {
              items: 2,
              stagePadding: 50,
              margin: -100,
          },
          1500: {
              margin: -160,
              stagePadding: 20,
              items: 2
  
  
          },
          1700: {
              items: 2,
              stagePadding: 70,
              margin: -210,
  
  
          },
          1900: {
              items: 2,
              stagePadding: 70,
              margin: -260,
          }
  
  
      }
  }
}
