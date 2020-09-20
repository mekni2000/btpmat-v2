import { Component, OnInit, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BrandService } from '../shared/brand.service';

@Component({
  selector: 'app-carousel-partenaire',
  templateUrl: './carousel-partenaire.component.html',
  styleUrls: ['./carousel-partenaire.component.css']
})
export class CarouselPartenaireComponent implements OnInit {

  @Input() product

  constructor(private brand: BrandService) { }

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
