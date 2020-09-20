import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-besoins-materiaux',
  templateUrl: './besoins-materiaux.component.html',
  styleUrls: ['./besoins-materiaux.component.css' ,
              './besoins-materiauxR.component.css'

]
})
export class BesoinsMateriauxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  customOptions: OwlOptions = {
    loop: false,
    stagePadding: 40,
    margin:15,
    items: 2,
    dots: false,
    nav: true,
    autoplayTimeout: 200,
    autoplayHoverPause: false,
    navText: ["<img  src='../../../assets/img/left-arrow.png'>", "<img class='right-arrow' src='../../../assets/img/right-arrow.png'>"],
    responsive: {
        0: {
            items: 1,
            nav: true,


        },
        600: {
            items: 2,
            stagePadding: 60,
        },


    }
  }
}
