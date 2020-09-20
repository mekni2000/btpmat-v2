import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{environment} from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }


  //get All brands
  getBrands():  Observable<any>{
    return this.http.get(environment.endpoint + 'Brands?PageIndex=1&PageSize=8')
  }


  getBrandById(brandId): Observable<any>{
    return this.http.get('https://api.btpmat.ci/api/Brands/' + brandId)
  }


  //get brand category
  getBrandProducts(brandId): Observable<any>{
    return this.http.get(environment.endpoint + 'Brands/'+ brandId +'/Products?pageIndex=1&pageSize=8')
  }


  PromotedProducts(brandId?): Observable<any>{
    return this.http.get(environment.endpoint + 'Products?BrandId=0&CategoryId=0&Promoted=1&Destocking=-1&pageIndex=1&pageSize=8&Randomize=true')
  }


  //get all products
  getProducts():  Observable<any>{
    return this.http.get(environment.endpoint + 'Products?BrandId=0&pageIndex=1&pageSize=8')
  }


  getCategoryProducts(brandId?, categoryId?): Observable<any>{
    return this.http.get(`${environment.endpoint + 'Products' }?BrandId=${brandId}&CategoryId=${categoryId}`)
  }


  searchProduct(query): Observable<any>{
    return this.http.get(`${'https://api.btpmat.ci/api/Products'}?SearchTerm=${query}&BrandId=0&CategoryId=0&Promoted=-1&Destocking=-1&pageIndex=1&pageSize=8&Randomize=false`)
  }


  
  getDestockingBrandProducts(brandId): Observable<any>{
    return this.http.get(`${'https://api.btpmat.ci/api/Products'}?&BrandId=${brandId}&CategoryId=${0}&Promoted=-1&Destocking=1&pageIndex=1&pageSize=8&Randomize=false`)
  }

  getDestockingCategoryProducts(brandId, categoryId): Observable<any>{
    return this.http.get(`${'https://api.btpmat.ci/api/Products'}?&BrandId=${brandId}&CategoryId=${categoryId}&Promoted=-1&Destocking=1&pageIndex=1&pageSize=8&Randomize=false`)
  }

  getDestockingPromotedProducts(): Observable<any>{
    return this.http.get(`${'https://api.btpmat.ci/api/Products'}?&BrandId=${0}&CategoryId=${0}&Promoted=1&Destocking=1&pageIndex=1&pageSize=8&Randomize=false`)
  }


}
