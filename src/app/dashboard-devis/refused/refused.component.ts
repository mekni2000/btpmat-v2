import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../espace-client/shared/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { DevisService } from '../../demande-devis/shared/devis.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-refused',
  templateUrl: './refused.component.html',
  styleUrls: ['./refused.component.css']
})
export class RefusedComponent implements OnInit {


  user$: Observable<any>
  UserQuotations$: Observable<any>

  constructor(
    private auth: AuthService,
    private afAuth: AngularFireAuth,
    private devis: DevisService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.user$ = this.auth.appUser$
    this.user$.subscribe(user => console.log('currentUser', user))

    this.UserQuotations$ = this.user$.pipe(
      pluck('id'),
      switchMap(id => this.devis.refused(id))
    )
    this.UserQuotations$.subscribe(quotation => console.log('all user quotation', quotation))
  }

}
