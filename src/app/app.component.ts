import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { ArticleComponent } from "./article/article.component";
import { CommonModule } from '@angular/common';
import { DataService } from './service/data.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
      RouterOutlet,
      ArticleComponent,
      CommonModule,
      RouterLink,
      RouterLinkActive,
      ]
})
export class AppComponent implements OnInit {
  title = 'angularProject';
  prix1: number = 80;
  prix2: number = 100;
  prix3: number = 120;
  message: string = "";
  list: any;

  constructor(private dataService: DataService) {

  }
  ngOnInit() {
    this.list = this.dataService.listArticles;
  }
  onAffiche(arg:string) {
    return this.message = "Merci d'avoir voté pour l'article : " + arg;
  }

}
