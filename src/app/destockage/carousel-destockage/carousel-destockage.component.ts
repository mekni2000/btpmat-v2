import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel-destockage',
  templateUrl: './carousel-destockage.component.html',
  styleUrls: ['./carousel-destockage.component.css']
})
export class CarouselDestockageComponent implements OnInit {

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
