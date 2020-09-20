import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { TranslateService } from 'src/app/translations/shared/translate.service';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { map, switchMap, pluck } from 'rxjs/operators';
import { CacheService } from 'src/app/translations/shared/cache.service';
@Component({
  selector: 'app-langue',
  templateUrl: './langue.component.html',
  styleUrls: ['./langue.component.css',
  './langueR.component.css'
]
})
export class LangueComponent implements OnInit {

  languages$: Observable<any>
  keys$: Observable<any>
  entries
  // Action stream
  private languageSelectedSubject = new BehaviorSubject<number>(0);
  languageSelectedAction$ = this.languageSelectedSubject.asObservable();

  language

  constructor(
    public ngxSmartModalService: NgxSmartModalService,
    private translateService: TranslateService,
    private cacheService: CacheService
    ) { }

  ngOnInit() {

    this.languages$ = this.translateService.getLanguages()
    this.languages$.subscribe(languages => console.log('all languages', languages))

  }




  onSelected(lang: any): void {
    console.log(lang.languageCode)
    localStorage.setItem('lang', lang.languageCode)
    // this.keys$ = this.translateService.changeLanguage(lang.languageCode)
    // this.keys$.subscribe(keys => {
    //   this.entries = keys.entries
    //   console.log('languge key', keys.entries)
    // })

   // this.languageSelectedSubject.next(lang.languageCode);
      location.reload();
  }



  isCurrentLang(lang: string) {
    // check if the selected lang is current lang
    return lang === this.language;
}



}
