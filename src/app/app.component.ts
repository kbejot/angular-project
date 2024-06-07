import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleComponent } from "./article/article.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ArticleComponent]
})
export class AppComponent implements OnInit {
  title = 'angularProject';
  constructor(){}
  ngOnInit(): void {
      console.log('coucou');
  }
}
