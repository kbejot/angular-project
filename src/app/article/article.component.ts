import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent
{

  textAltImg: string = "Titre Alternatif"
  urlImg: string = "https://loremflickr.com/640/360";
  totalNbLike: number = 0;
  comment: string = "";

  @Input() titleArticle: string | undefined;
  @Input() prixArticle: number | undefined;
  @Output() info = new EventEmitter<string>();

  constructor(){

  }

  onLike() {
    this.totalNbLike += 1;
    this.info.emit(this.titleArticle);
  }

}
