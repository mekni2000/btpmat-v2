import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getArticles(): Observable<any>{
    return this.http.get(environment.endpoint + 'Articles?Category=-1&pageIndex=1&pageSize=8')
  }

  getArticleById(articleId): Observable<any>{
    return this.http.get(environment.endpoint + 'Articles/' + articleId)
  }

}
