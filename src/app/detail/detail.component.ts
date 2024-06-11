import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';
@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    
  ],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {
  id: number = 0;
  title: string = '';
  prix: number = 0;
  available: boolean = false;
  description: string = '';

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];  // Convert string to a number
      this.loadArticleDetails(id);
    });
  }

  private loadArticleDetails(id: number): void {
    const article = this.dataService.getArticles(id);
    if (article) {
      this.id = id;
      this.title = article.titleArticle;
      this.prix = article.prixArticle;
      this.available = article.available;
      this.description = article.description;
    } else {
      console.log('Article not found!');
      // Optionally handle the missing article case
    }
  }
}