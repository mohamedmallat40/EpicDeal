import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './Posts/post-list/post-list.component';
import { PostCreateComponent } from './Posts/post-create/post-create.component';

const  routes: Routes = [
  {path: '', component: PostListComponent},
  {path: 'create', component: PostCreateComponent},
  {path: 'edite/:postId', component: PostCreateComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]


})
export class AppRoutingModule {}
