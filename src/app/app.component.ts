import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleComponent } from "./article/article.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
      RouterOutlet,
      ArticleComponent,
      CommonModule,
      ]
})
export class AppComponent {
  title = 'angularProject';
  prix1: number = 80;
  prix2: number = 100;
  prix3: number = 120;
  message: string = "";

  onAffiche(arg:string) {
    return this.message = "Merci d'avoir voté pour l'article : " + arg;
  }

  list = [
  {
    titleArticle: "Vélo", 
    prixArticle:230,
    available:false
  },
  {
    titleArticle: "Voiture", 
    prixArticle:50,
    available:true
  },
  {
    titleArticle: "Bus", 
    prixArticle:1000,
    available:false
  },
  {
    titleArticle: "Trotinette", 
    prixArticle:75,
    available:true
  },
  {
    titleArticle: "Skateboard", 
    prixArticle:10,
    available:true
  },
]

}
