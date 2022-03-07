import { Component, OnInit } from '@angular/core';
import { ArticleData } from '../data';
import { Article } from '../models/article.models';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles: Article[] = [];


  constructor() { }

  ngOnInit(): void {
    this.articles = new ArticleData().getData();
  }

}
