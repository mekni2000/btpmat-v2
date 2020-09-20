import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/espace-client/shared/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { DevisService } from 'src/app/demande-devis/shared/devis.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap, pluck, filter, find } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { element } from 'protractor';
import { PaginatedList } from 'src/app/models/pagination.model';

@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.css']
})
export class DevisComponent implements OnInit {
  closeResult: string;
  checked=false
  @Input() quotation


  user$: Observable<any>
  UserQuotations$: Observable<any>

  constructor(
    private auth: AuthService, 
    private afAuth: AngularFireAuth,
    private devis: DevisService,
    private router: Router,
    private modalService: NgbModal,
    
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

   /* this.user$ = this.route.paramMap.pipe(
      map(params => params.get('userId')),
      switchMap(id => this.auth.getUser(id))
    )
  */


    this.user$ = this.auth.appUser$
  //  this.user$.subscribe(user => console.log('currentUser', user))
  
      this.UserQuotations$ = this.user$.pipe(
        pluck('id'),
        switchMap(id => this.devis.UserQuotations(id)),
   
      )
      this.UserQuotations$.subscribe((quotation: PaginatedList<any>) => {
        console.log('all user quotation', quotation)
      
      })

  }



  quote
  showCommande(quote){

    if(quote.status == '2') {
      this.quote = quote
      this.checked = true
    }
    
     
 
  }

    open(content) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'xl'})
    }
    open2(content2) {
   
      this.modalService.open(content2, {ariaLabelledBy: 'modal-basic-title', size: 'md'}
      
      ).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
       
      });
 
    }



    onSelect(event){
      console.log(event)
    }
   
}
