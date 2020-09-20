import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export class PaginatedList<T>{
  previous: string;
  current: string
  next: string;
  totalPages: string;  
  resultsCount: string; // total number of items
  paginatedList: Array<T>; // items for the current page
}



// export function QueryPagination(): Observable<PaginatedList<T>>{
//     return 
// }

