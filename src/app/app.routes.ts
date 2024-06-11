import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ArticleComponent } from './article/article.component';

export const routes: Routes = [
    { path: 'list', component: ListComponent },
    { path: 'article', component: ArticleComponent },
];
