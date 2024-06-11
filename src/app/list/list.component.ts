import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from '../article/article.component';
import { DataService } from '../service/data.service';

@Component({
    selector: 'app-list',
    standalone: true,
    templateUrl: './list.component.html',
    styleUrl: './list.component.css',
    imports: [
      RouterOutlet,
      ArticleComponent,
      CommonModule,
      ]
})
export class ListComponent implements OnInit {
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
