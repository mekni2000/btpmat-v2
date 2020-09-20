import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from 'src/environments/environment'
import { Page, queryPaginated } from 'src/app/models/pagiantion.model';
import { share } from 'rxjs/operators';
import { Brand } from 'src/app/models/brand.model';

const httOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http: HttpClient) { }

  /* Brands */

  getBrands(): Observable<any>{
    return this.http.get(environment.endpoint + 'Brands?PageIndex=1&PageSize=8')
  }

  brandById(brandId): Observable<any>{
    return this.http.get(environment.endpoint + 'https://api.btpmat.ci/api/Brands/' + brandId, httOptions)
  }


  BrandCategories(brandId): Observable<any>{
    return this.http.get(environment.endpoint + 'Brands/' + brandId + '/Categories', httOptions)
  }

  BrandProducts(brandId): Observable<any>{
    return this.http.get(environment.endpoint + 'Brands/'+ brandId+ '/Products?Category=-1&Promoted=-1&Destocking=-1&pageIndex=1&pageSize=8')
  }

  
  brands(urlOrFilter?: string | object): Observable<Page<Brand>> {
    return queryPaginated<any>(this.http, environment.endpoint + 'Brands?PageIndex=1&PageSize=8', urlOrFilter);
  }

  brandSearch(brando): Observable<any>{
    return this.http.get(`${'https://api.btpmat.ci/api/Products'}?SearchTerm=${brando}&BrandId=0&CategoryId=0&Promoted=-1&Destocking=-1&pageIndex=1&pageSize=8&Randomize=false`)
  }






  /* Categories */
  getCategories(): Observable<any>{
    return this.http.get(environment.endpoint + 'Categories?PageIndex=1&PageSize=16')
  }


  /* Products */
  getProducts(): Observable<any>{
    return this.http.get(environment.endpoint + 'Products?BrandId=0&pageIndex=1&pageSize=8')
  }




  //get Countries
  getCountries(): Observable<any>{
    return this.http.get(environment.endpoint + 'v1/Countries')
  }
}
