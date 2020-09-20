import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/espace-client/shared/auth.service';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user$: Observable<any>


  constructor(private auth: AuthService, private fauth: AngularFireAuth) { }

  ngOnInit() {

    
   
    
  }






}
