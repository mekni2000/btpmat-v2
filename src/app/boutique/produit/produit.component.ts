import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { Observable } from 'rxjs';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {



  bands$: Observable<any>

  @Input() product
  @Output() onDataChange = new EventEmitter<any>() 

  // private id
   brandName
  
  // @Input()
  // set product(product: string) {
  //  // console.log('previous item = ', this.child);
  //   console.log('currently selected item=', product);
  //   this.id = product || '<no name set>';
  // }

  // get child(): string { return this.id; }


  constructor(
    private productService: ProductService
    ) { }

  ngOnInit() {
  
  }



  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('inside ngOnChanges', changes);
  //   const currentChild = changes;
  //   //console.log('prev value: ', currentItem.previousValue);
  //  // console.log('got item: ', currentItem.currentValue);
  //   if(currentChild.product.currentValue){
  //     this.brandName = changes.product.currentValue.brandName;
  //     console.log('brandName', this.brandName)
  //   }
  //   // this.suppliedQuantity = 0;
    
  // }




  selectedProduct(event) {
    console.log('hey I am  clicked in child', event);
    this.onDataChange.emit(this.product)
}

}
