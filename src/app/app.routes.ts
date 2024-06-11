import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ArticleComponent } from './article/article.component';
import { DetailComponent } from './detail/detail.component';

export const routes: Routes = [
    { path: 'list', component: ListComponent },
    { path: 'article', component: ArticleComponent },
    { path: 'detail/:id', component: DetailComponent}
];
