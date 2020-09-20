import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../shared/categories.service';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-sous-nav',
  templateUrl: './sous-nav.component.html',
  styleUrls: ['./sous-nav.component.css',
          './sous-navR.component.css'
]
})
export class SousNavComponent implements OnInit {

  categories$: Observable<any>

  subCategories$:Observable<any>

  currentJustify = 'justified'
  
  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    // this.categoriesService.allCategories().subscribe(categories => {
    //   console.log(categories)
    // })

    this.categories$ = this.categoriesService.subCategories().pipe(shareReplay(1))

    this.categories$.subscribe(data => console.log('categories', data))

    // this.subCategories$ = this.categoriesService.categorieName()
    // this.subCategories$.subscribe(data=> console.log('subcategories' , data))
   // this.subCategories$= this.categoriesService.subCategories().pipe(shareReplay(1))
  //  this.subCategories$.subscribe(sousCategorie=>console.log('sous-categories' , sousCategorie))
  }
  isShown:boolean=false;




}
