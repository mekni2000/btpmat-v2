import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

   
  constructor(private http:HttpClient) {}

  allCategories(): Observable<any>{
    return this.http.get(environment.endpoint + 'Categories?PageIndex=1&PageSize=16')
  }
  subCategories() : Observable<any>{
    return  this.http.get(environment.endpoint +'v1/Quotation/Categories')
  }


  //https://api.btpmat.ci/api/v1/Quotation/Categories
}
