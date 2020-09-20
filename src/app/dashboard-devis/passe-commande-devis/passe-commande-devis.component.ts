import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DevisService } from 'src/app/demande-devis/shared/devis.service';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/espace-client/shared/auth.service';
import { pluck, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-passe-commande-devis',
  templateUrl: './passe-commande-devis.component.html',
  styleUrls: ['./passe-commande-devis.component.css']
})
export class PasseCommandeDevisComponent implements OnInit {
  closeResult: string;
  @Input() quote

  user$: Observable<any>
  constructor(
    private modalService: NgbModal,
    private devis: DevisService,
    private auth: AuthService,
    private http: HttpClient
  ) { }

  ngOnInit() {

    this.user$ = this.auth.appUser$

  }
  open(content, quote) {
   
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'xl'}
    
    ).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
     
    });
    console.log(quote)
    return this.quote = quote
  }
  open2(content2) {
   
    this.modalService.open(content2, {ariaLabelledBy: 'modal-basic-title', size: 'md'}
    
    ).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
     
    });

  }



  myFiles:string [] = [];
  sMsg:string = '';
  uploded = []
  

  getFileDetails (e) {
    //console.log (e.target.files);
    for (var i = 0; i < e.target.files.length; i++) { 
      this.myFiles.push(e.target.files[i]);
    }
    console.log(this.myFiles)
  }

  uploadFiles (file) {
    const frmData = new FormData();
    
    for (var i = 0; i < this.myFiles.length; i++) { 
      frmData.append("file", file);
      this.http.post('https://api.btpmat.ci/api/FileSources', frmData, { reportProgress: true, observe: 'events'})
      .subscribe(  res => {
 
        if (res.type === HttpEventType.UploadProgress) {
          // this.isLoading = true;
          const percentDone = Math.round(100 * res.loaded / res.total);
        
            console.log(percentDone)
     
     
     
        }
       else if (res.type == HttpEventType.Response) {
          // this.isLoading = false;
          // this.uploadError = '';
           console.log(`File is ${(res.body as any).name}% uploaded.`);
           console.log(res.body)
      
           //image = (res.body as any)
           this.uploded.push((res.body as any).id);
          // // 
          // // // this.images.push((res.body as any).id)
          //    console.log("image is uploaded", this.images)
          if(this.uploded.length === this.myFiles.length){
            this.orderQuotation()
           
          }  
           
        }
      
      })
     
    }
  }



uploadAll(){
  let fileUploadObservables = [];

  this.myFiles.forEach(file => {

     fileUploadObservables
     .push(this.uploadFiles(file));
  });
}


message
orderQuotation(){

  let data = {
    "voucherCode": "string",
    "orderDocumentId": this.uploded[0],
    "message": this.message
  }

  this.user$.pipe(
    pluck('id'),
    switchMap(id => this.devis.submitOrder(id, this.quote.id, data))
  ).subscribe(order => console.log('order success', order))
  
}


}