import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel-home',
  templateUrl: './carousel-home.component.html',
  styleUrls: ['./carousel-home.component.css' ,
          './carousel-homeR.component.css',
]
})
export class CarouselHomeComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
        // customize default values of carousels used by this component tree
        config.interval = 1000;
        config.wrap = true;
        config.keyboard = true;
        config.pauseOnHover = true;
   }

  ngOnInit() {
  }
 
}
