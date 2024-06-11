import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ArticleComponent } from './article/article.component';
import { DetailComponent } from './detail/detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddComponent } from './add/add.component';

export const routes: Routes = [
    { path: "", component: ListComponent },
    { path: "list", redirectTo: ""},
    { path: 'article', component: ArticleComponent },
    { path: 'detail/:id', component: DetailComponent},
    { path: "add", component: AddComponent},
    { path: "**", component: PageNotFoundComponent}
];
