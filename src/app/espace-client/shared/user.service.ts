import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



const httOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }



 // `${'https://api.btpmat.ci/api/Products'}?SearchTerm=${brando}&BrandId=0&CategoryId=0&Promoted=-1&Destocking=-1&pageIndex=1&pageSize=8&Randomize=false`

    //api/Users/{UserId}/Cart/Add/{ProductID}
    addProductToCart(userId, productId, Quantity = 1): Observable<any>{
      return this.http.patch(`${environment.endpoint + 'Users/' + userId + '/Cart/Add/' + productId}?Quantity=${Quantity}`, httOptions)
    }

}
