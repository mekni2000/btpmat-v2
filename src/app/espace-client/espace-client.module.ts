import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselStoreComponent } from './carousel-store/carousel-store.component';
 
import { Routes, RouterModule } from '@angular/router';
import { LoginProComponent } from './login-pro/login-pro.component';
import { LoginParticulierComponent } from './login-particulier/login-particulier.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DashboardDevisComponent } from '../dashboard-devis/dashboard-devis.component';
import { DashboardDevisModule } from '../dashboard-devis/dashboard-devis.module';
import { EspaceClientComponent } from './espace-client.component';
import { AuthService } from '../sepace-client/shared/auth.service';
 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterParticulierComponent } from './register-particulier/register-particulier.component';
import { AuthGuard } from './shared/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './shared/token.interceptor';
import { UserService } from './shared/user.service';


const routes: Routes = [
  
    {path:'login-particulier',component:LoginParticulierComponent},
    {path:'Professionnel',component:LoginProComponent},
    {path:'espace-client',component:LoginParticulierComponent},
    {path:'register',component:RegisterParticulierComponent},
       
        {path:'dashboard-devis',component:DashboardDevisComponent}
     
 
 
  
  
 
];

  // @ts-ignore
@NgModule({
  declarations: [
    CarouselStoreComponent,  
    LoginProComponent,
    LoginParticulierComponent, 
    EspaceClientComponent, 
    RegisterParticulierComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardDevisModule
  ],
  exports: [
 
    LoginParticulierComponent,
    RouterModule
  ],
  providers:[
    AuthService,
    UserService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
    
  ]
})
export class EspaceClientModule { }
