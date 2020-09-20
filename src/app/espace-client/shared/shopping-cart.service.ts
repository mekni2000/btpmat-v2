import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ShoppingCart } from 'src/app/models/shopping.model';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';


const httOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private http: HttpClient) { }

   getCart(userId): Observable<ShoppingCart> {
    return this.http.get<any>(environment.endpoint + 'Users/' + userId + '/Cart')
   
  }


  //https://api.btpmat.ci/api/Users/XlJPVkEvhwWLkSzB1k4sQNkyjBo1/Cart/Add/2?Quantity=10
  addToCart(userId, productId, Quantity): Observable<any>{
    return this.http.patch(`${environment.endpoint + 'Users' + userId + '/Cart/Add/' + productId}?Quantity=${Quantity}`, httOptions)
  }
    


}
