import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/espace-client/shared/auth.service';
import { Observable } from 'rxjs';
import { ShoppingCart } from 'src/app/models/shopping.model';
import { ShoppingCartService } from 'src/app/espace-client/shared/shopping-cart.service';
import { pluck, switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  user$: Observable<any>;
  carts$: Observable<any>;
  product$: Observable<any>;
  checked=false

  constructor(
    private auth: AuthService,
    private cartService: ShoppingCartService
    ) { }

  ngOnInit() {

    this.user$ = this.auth.appUser$
    //this.user$.subscribe(user => console.log('currentUser', user))
     
 
 
     this.carts$ = this.user$.pipe(
       pluck('id'),
       switchMap(id => this.cartService.getCart(id))
     )
 
     this.carts$.subscribe(cart => console.log('user cart', cart))



      this.product$ = this.carts$.pipe(
        map(data =>  {return data.cartItems[0].product})
      )

      this.product$.subscribe(product => console.log('cart product', product))

  }



  selectedProduct = []
  showCommande(event){
   
       this.checked=true
       this.selectedProduct.push(event)
       console.log("this is checked" , this.selectedProduct)
  
    
   
    
   }


 
}
