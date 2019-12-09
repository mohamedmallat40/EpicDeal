import { Injectable } from '@angular/core';
import { Subject} from 'rxjs';
import { Post} from './post.model';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({providedIn: 'root'})

export class PostsService {
  private posts: Post[] = [];
  private postUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient ) {}





  getposts() {
    this.http.get<{message: string, posts: any }>
     ('http://localhost:3000/api/posts')
      .pipe(map((postData) => {
        return postData.posts.map( post => {
          return {
            title: post.title,
            content: post.content,
            id: post._id
          };
        });
      }))
      .subscribe(transformedPosts => {
        this.posts = transformedPosts;
        this.postUpdated.next([...this.posts]);
      });
  }




  getPostUpdatListner() {
    return this.postUpdated.asObservable();
  }


    getPost(id: string) {
      return this.http.get<{_id: string, title: string, content: string}>
      ('http://localhost:3000/api/posts/'   + id);
    }

  addPost(title: string, content: string) {
    // tslint:disable-next-line: object-literal-shorthand
    const post: Post = {id: null, title: title, content: content};
    this.http
    .post<{message: string, postId: string}>('http://localhost:3000/api/posts', post)
    .subscribe((responseData) => {
      const id = responseData.postId;
      post.id = id;
      this.posts.push(post);
      this.postUpdated.next([...this.posts]);
    });
    }


    updatePost(id: string, title: string, content: string) {
      const post: Post = { id: id, title: title, content: content };
      this.http
      .put('http://localhost:3000/api/posts/' + id, post)
      .subscribe(response => {
        const updatedPosts = [...this.posts];
        const oldPostIndex = updatedPosts.findIndex(p => p.id === post.id);
        updatedPosts[oldPostIndex] = post;
        this.posts = updatedPosts;
        this.postUpdated.next([...this.posts]);
      });
    }

  deletPost(postId: string) {
    this.http.delete('http://localhost:3000/api/posts/' + postId)
    .subscribe(() => {
      const updatedPosts = this.posts.filter(post => post.id !== postId);
      this.posts = updatedPosts;
      this.postUpdated.next([...this.posts]);
    });
  }
}
