import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/espace-client/shared/user.service';
import { AuthService } from 'src/app/espace-client/shared/auth.service';
import { Observable } from 'rxjs';
import { pluck, switchMap } from 'rxjs/operators';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product

  user$: Observable<any>

  constructor(
    private modalService: NgbModal,
    private auth: AuthService,
    private userService: UserService
    ) { }

  ngOnInit() {

    this.user$ = this.auth.appUser$
    

  }

  
 closeResult: string;
 productId
 open(content, product) {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title',size:'xl'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  });
  console.log(product)
  return this.productId = product.id
 


  
}

quantity
getQuantity(event){
  return this.quantity = event
}


onSubmit(){
 // console.log(this.quantity)
  this.user$.pipe(
    pluck('id'),
    switchMap(id => this.userService.addProductToCart(id, this.productId, this.quantity))
  ).subscribe(data => console.log('success add product to cart', data))
}


}
