import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/espace-client/shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-pro',
  templateUrl: './login-pro.component.html',
  styleUrls: ['./login-pro.component.css']
})
export class LoginProComponent implements OnInit {

  email: string;
  password: string;

  constructor(
    private auth: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  signup() {
    this.auth.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.auth.login(this.email, this.password);
    this.email = this.password = '';    
  }

  logout() {
    this.auth.logout();
  }


 

}
