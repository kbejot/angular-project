import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
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

  @Input() titleArticle: string = "";
  @Input() prixArticle: number = 0;
  @Input() available: boolean = false;
  like: boolean = true;
  @Output() info = new EventEmitter<string>();
  

  constructor(){

  }

  onLike() {
    if(this.like) {
      this.totalNbLike += 1;
      this.like = false;
    } else {
      this.totalNbLike -= 1;
      this.like = true;
    }
    this.info.emit(this.titleArticle);
  }

  getColor(){
    if(this.available){
      return "green";
    }
    else{
      return "red";
    }
  }

}
