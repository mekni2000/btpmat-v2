import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-categorie-marque',
  templateUrl: './categorie-marque.component.html',
  styleUrls: ['./categorie-marque.component.css']
})
export class CategorieMarqueComponent implements OnInit {

  @Input() brand
  @Output('selectedProduct') onDataChange = new EventEmitter<any>() 
  constructor() { }

  ngOnInit() {
  }

  selectedProduct(event) {
    console.log('hey I am  clicked in child', event);
    this.onDataChange.emit(this.brand)
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





  count
  @Output('update')
  change: EventEmitter<number> = new EventEmitter<number>();

  increment() {
    this.count++;
    this.change.emit(this.count);
  }

  decrement() {
    this.count--;
    this.change.emit(this.count);
  }













}
