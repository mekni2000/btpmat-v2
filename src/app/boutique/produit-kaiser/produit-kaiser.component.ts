import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgbCarousel, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-produit-kaiser',
  templateUrl: './produit-kaiser.component.html',
  styleUrls: ['./produit-kaiser.component.css']
})

export class ProduitKaiserComponent implements OnInit {
  imgProducts=['','','']
  closeResult: string;
  @ViewChild('ngcarousel', { static: true }) ngCarousel: NgbCarousel;

 //@Input() product
 
  @Input() productIndex

  @Output('selectedProduct') onDataChange = new EventEmitter<any>() 


  constructor(
    private modalService: NgbModal
    
    ) { }
 
  ngOnInit() {
  }

  @Input()
  set product(product: string) {
   // console.log('previous item = ', this.child);
    console.log('currently selected item=', product);
    this.productIndex = product || '<no name set>';
  }

  get product(): string { return this.productIndex; }

  
 
  displayProduct(count) {
    console.log(count);
}
 

 

 

 

  selectedProduct(event) {
    console.log('hey I am  clicked in child', event);
    this.onDataChange.emit(this.product)
}


  





//modal product
open(content) {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title',size:'xl'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  });
  console.log('hey I am  clicked in child', content);
  this.onDataChange.emit(this.product)
}
}
