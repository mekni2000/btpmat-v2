import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-carousel-store',
  templateUrl: './carousel-store.component.html',
  styleUrls: ['./carousel-store.component.css']
})
export class CarouselStoreComponent implements OnInit {

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
