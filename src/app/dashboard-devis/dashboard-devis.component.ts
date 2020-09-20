import { Component, OnInit } from '@angular/core';
import { AuthService } from '../espace-client/shared/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, pluck } from 'rxjs/operators';
import { DevisService } from '../demande-devis/shared/devis.service';

@Component({
  selector: 'app-dashboard-devis',
  templateUrl: './dashboard-devis.component.html',
  styleUrls: ['./dashboard-devis.component.css']
})
export class DashboardDevisComponent implements OnInit {


  user$: Observable<any>
  UserQuotations$: Observable<any>
  user
  constructor(
    private auth: AuthService, 
    private afAuth: AngularFireAuth,
    private devis: DevisService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {

  this.user$ =   this.auth.appUser$

  this.user$.subscribe(user => {
    if(!user){
      this.auth.postToData(user)
    }
  })
  
  }



}
