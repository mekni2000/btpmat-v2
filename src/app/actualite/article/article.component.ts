import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../shared/article.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article$: Observable<any>

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.article$ = this.route.paramMap.pipe(
      map(params => params.get('articleId')),
      switchMap(id => this.articleService.getArticleById(id))
    )
    this.article$.subscribe(article => console.log(article))
  }

}
