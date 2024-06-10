import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleComponent } from "./article/article.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
      RouterOutlet,
      ArticleComponent
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

}
