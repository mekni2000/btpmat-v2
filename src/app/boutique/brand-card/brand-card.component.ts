import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'brand-card',
  templateUrl: './brand-card.component.html',
  styleUrls: ['./brand-card.component.css']
})
export class BrandCardComponent implements OnInit {

  @Input() brand
  brandIndex
  currentJustify = 'justified'

  products$: Observable<any>



  constructor(
    private productService: ProductService,
    private modalService: NgbModal
    ) { }

  ngOnInit() {
    this.products$ = this.productService.getBrandProducts(this.brandIndex)
    this.products$.subscribe(brandProducts => console.log('brand products', brandProducts))
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('inside ngOnChanges', changes);
    const currentChild = changes;
    //console.log('prev value: ', currentItem.previousValue);
   // console.log('got item: ', currentItem.currentValue);
    if(currentChild.brand.currentValue){
      this.brandIndex = changes.brand.currentValue.id;
      console.log('brandId', this.brandIndex)
    }
    // this.suppliedQuantity = 0;
    
  }


  
  beforeChange(brand, $event) {

  
     
    console.log(brand, $event)
    this.products$ =  this.productService.getCategoryProducts(brand, $event)
    this.products$.subscribe(products => console.log(products))
   // // dont do anything if id matches
   // if ($event.nextId === 'tab-4') {
   //   $event.preventDefault();
   // }
 }



}


