import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit
{

  titleArticle: string = "Titre de l'article";
  prixArticle: number = 12;
  textAltImg: string = "Titre Alternatif"
  urlImg: string = "https://loremflickr.com/640/360";
  totalNbLike: number = 0;
  comment: string = "";

  constructor(){

  }
  ngOnInit(): void {
      
  }

  onLike() {
    this.totalNbLike += 1;
  }

}
