import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-publicite',
  templateUrl: './publicite.component.html',
  styleUrls: ['./publicite.component.css']
})
export class PubliciteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  customOptions: OwlOptions = {
    stagePadding: 40,
    items: 5,
    dots: false,
    nav: false,
    loop: true,
    autoplay: true,
   

    autoplayTimeout: 1500,
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 1,
            nav: true,


        },
        600: {
            items: 2,
            stagePadding: 60,
        },
        
        1000: {
            items: 5,
        }
  }
}
}
