import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleService } from '../shared/article.service';

@Component({
  selector: 'app-nos-actualite',
  templateUrl: './nos-actualite.component.html',
  styleUrls: ['./nos-actualite.component.css']
})
export class NosActualiteComponent implements OnInit {

  articles$: Observable<any>

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
      this.articles$ = this.articleService.getArticles()
      this.articles$.subscribe(articles => console.log('all articles', articles))
  }
}
