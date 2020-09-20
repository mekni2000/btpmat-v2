import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-categories-destockage2',
  templateUrl: './categories-destockage2.component.html',
  styleUrls: ['./categories-destockage2.component.css']
})
export class CategoriesDestockage2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  categories =[ 'Pompes et surpreseurs', 'Netoyeurs haute gamme' , 'Eloremipsum.Pisum.I', 'Groupe électrogène' ,'Eléctroporatif','Netoyeurs haute gamme','Groupe électrogène'];
  customOptions: OwlOptions = {
    loop: true,
         stagePadding: 40,
         items: 2.5,
         dots: false,
         nav: false,
         autoplayTimeout: 200000000,
         autoplay: true,
         autoplayHoverPause: true,
       //  navText: ["<img class='arrow-left' src='../../../assets/img/arrow-left.svg'>", "<img class='arrow-left' src='../../../assets/img/arrow-right.svg'>"],

         responsive: {
          0: {
              items: 1,
         stagePadding: 0,



          },
          500: {
              items: 2,
          },
          700: {
              items: 3,
          },

          1200: {
              items: 4,
          },
          1600: {
              items: 5,
          },
      }
  }
}
