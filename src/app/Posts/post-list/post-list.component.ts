import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  private postSub: Subscription;


  constructor(public postsService: PostsService) {}

  ngOnInit() {
    this.postsService.getposts();
    this.postSub = this.postsService.getPostUpdatListner()
      .subscribe( (posts: Post[] ) => {
       this.posts = posts;
      });
  }






  ngOnDestroy() {
    this.postSub.unsubscribe();
  }
}
