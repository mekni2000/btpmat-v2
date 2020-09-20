import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

const httOptions = {
  headers: new HttpHeaders({
    'mimeType': 'multipart/form-data',
    'contentType': 'false',
  })
}




interface ApiUploadResult {
	url: string;
}
 
export interface UploadResult {
	name: string;
	type: string;
	size: number;
	url: string;
}

@Injectable({
  providedIn: 'root'
})
export class DevisService {

  constructor(private http: HttpClient) { }

  public uploadImage(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);

    return this.http.post(environment.endpoint + 'FileSources', formData, { reportProgress: true, observe: 'events'})
    

}


addQuotation(userId, data): Observable<any>{
  return this.http.post(environment.endpoint + 'v1/Quotation/'+ userId +'/ProRequestForQuotation', data)
}


//https://api.btpmat.ci/api/v1/Quotation/XlJPVkEvhwWLkSzB1k4sQNkyjBo1/RequestForQuotation?Failed=true&Processing=true&Succeeded=true&PageIndex=1&PageSize=8
UserQuotations(userId): Observable<any>{
  return this.http.get(environment.endpoint + 'v1/Quotation/' + userId + '/RequestForQuotation?Failed=true&Processing=true&Succeeded=true&PageIndex=1&PageSize=8')
  }

  enCours(userId): Observable<any> {
    return this.http.get(environment.endpoint + 'v1/Quotation/' + userId + '/RequestForQuotation?Failed=false&Processing=true&Succeeded=false&PageIndex=1&PageSize=8')
  }
 

  accepted(userId): Observable<any> {
    return this.http.get(environment.endpoint + 'v1/Quotation/' + userId + '/RequestForQuotation?Failed=false&Processing=false&Succeeded=true&PageIndex=1&PageSize=8')
  }

  refused(userId): Observable<any> {
    return this.http.get(environment.endpoint + 'v1/Quotation/' + userId + '/RequestForQuotation?Failed=true&Processing=false&Succeeded=false&PageIndex=1&PageSize=8')
  }


  //https://api.btpmat.ci/api/v1/Quotation/XlJPVkEvhwWLkSzB1k4sQNkyjBo1/RequestForQuotation/12"
  quatationInformations(userId, quotationId): Observable<any>{
    return this.http.get(environment.endpoint + 'v1/Quotation/' + userId + '/RequestForQuotation/' + quotationId)
  }

//https://api.btpmat.ci/api/v1/Quotation/XlJPVkEvhwWLkSzB1k4sQNkyjBo1/RequestForQuotation/18/Order
  submitOrder(userId, documentId, message): Observable<any>{
    return this.http.post(environment.endpoint + 'v1/Quotation/' + userId + '/RequestForQuotation/' + documentId + '/Order', message)
  }



  getOrderQuotes(userId, documentId): Observable<any>{
    return this.http.get(environment.endpoint + 'v1/Quotation/' + userId + '/RequestForQuotation/' + documentId + '/Order')
  }

}
