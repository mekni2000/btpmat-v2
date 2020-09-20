import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { DevisService } from 'src/app/demande-devis/shared/devis.service';
import { AuthService } from 'src/app/espace-client/shared/auth.service';
import { pluck, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  closeResult: string;
  
  @Input() quote
  @Output() onDataChange = new EventEmitter()


  user$: Observable<any>
  quoteInfo$: Observable<any>

  constructor( 
    private modalService: NgbModal, 
    private devisService: DevisService,
    private auth: AuthService
    ) { }

  ngOnInit() {

    this.user$ = this.auth.appUser$

  }


  open(content) {
   
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'xl'}
    
    ).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
     
    });

  }




  onSelect(){
    console.log('from modal', this.quote)
    this.onDataChange.emit(this.quote)

    this.quoteInfo$ = this.user$.pipe(
      pluck('id'),
      switchMap(id => this.devisService.quatationInformations(id, this.quote.id))
    )
    this.quoteInfo$.subscribe(quote => console.log('quoteInfo', quote))

  }

}
