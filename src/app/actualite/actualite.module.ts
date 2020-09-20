import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import { NosActualiteComponent } from './nos-actualite/nos-actualite.component';
import { CarouselActualiteComponent } from './carousel-actualite/carousel-actualite.component';
import { Routes, RouterModule } from '@angular/router';
import { ActualiteComponent } from './actualite.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { Common1Module } from '../common1/common1.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
 
 

const routes: Routes = [
  { path: 'actualite', component: ActualiteComponent ,
    children:[
      {path:'',component:CarouselActualiteComponent},
      {path:':articleId',component:ArticleComponent}
    ]
},

  
];

@NgModule({
  declarations: [ArticleComponent,CarouselActualiteComponent,NosActualiteComponent,ActualiteComponent],
  imports: [
    CommonModule,
    CarouselModule ,
    Common1Module,
    NgbModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule,
    ActualiteComponent
  ]
})
export class ActualiteModule { }
