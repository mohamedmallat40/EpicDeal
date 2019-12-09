import { Component, OnInit} from '@angular/core';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Post } from '../post.model';



@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  enteredTitle = '';
  enteredContent = '';
  private mode = 'create';
  private postId: string ;
  post: Post;
  // enteredPrice = '';
  // enteredTypes = [{
  //     value: 'Samsung',  viewValue: 'Samsung'},
  //   { value: 'Iphone',   viewValue: 'Iphone'},
  //   { value: 'Huawei',   viewValue: 'Huawei'}
  // ];

  constructor(public postsService: PostsService, public route: ActivatedRoute) {}


  onSavePost(form: NgForm) {
    if (form.invalid ) {
      return;
    }
    if (this.mode === 'create') {
      this.postsService.addPost(form.value.title, form.value.content);
    } else {
      this.postsService.updatePost(this.postId, form.value.title, form.value.content);
    }
    Swal.fire('saved !', this.enteredTitle, 'success'); // tatla3 w t9ollik jawwik behy sahby
    // this.postsService.addPost(form.value.title, form.value.content, );
    form.resetForm();
  }


  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('postId')) {
        this.mode = 'edit';
        this.postId = paramMap.get('postId');
        this.postsService.getPost(this.postId).subscribe(postData => {
          this.post = {id: postData._id, title: postData.title, content: postData.content};
        });
      } else {
        this.mode = 'create';
        this.postId = null;
      }
    });
  }
}
