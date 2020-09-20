import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, tap, shareReplay, filter, find } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { CacheService } from './cache.service';
import { element } from 'protractor';


export class TranslationSet {
  public languange: string;
  public values: {[key: string]: string} = {};
}

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  public languages = [];

  entries$: Observable<any>

  public language = 'FR';

  entries = []
  private dictionary = ''
  substitution : Observable<any>

    constructor(
      private http: HttpClient, 
      private cache: CacheService) { 
    
      if (localStorage.getItem('lang') == 'FR') this.language = 'FR';
      else this.language = 'EN';
    
    }

    

getLanguages(): Observable<any>{
  return this.http.get(environment.endpoint + 'Translation/Languages').pipe(
    tap(lang => {
       this.languages = Object.keys(lang).map(key => lang[key].languageCode)
      console.log('languages', lang)
      }),
      shareReplay(1),
  )
}


changeLanguage(lang): Observable<any> {
  return this.cache.get(lang, this.http.get(environment.endpoint + 'Translation/Languages/' + lang))
}


    translate(value: string): any {
      this.entries$ = this.changeLanguage(this.language).pipe(shareReplay(1))
      this.entries$.subscribe(entries => {
        this.dictionary = entries.entries.find(lang => {
        
          let dictionary : any = { 
            [this.language] : {
              language: this.language,
              values: {
                [lang.key] : lang.substitution
              }
            }  
          }
   //   console.log(dictionary)
         return dictionary[this.language].values[value] 
        })
       
      })
      
      
      return (this.dictionary as any).substitution
    //  return substitution
      
     // console.log('translate called with value ' + value + ' and language ' + this.language + ' Translated To ' + this.dictionary[this.language].values[value]);    
      

    }
}