import { Component, OnInit} from '@angular/core';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';



@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  enteredTitle = '';
  enteredContent = '';
  enteredPrice = '';
  enteredTypes = [{
      value: 'Samsung',  viewValue: 'Samsung'},
    { value: 'Iphone',   viewValue: 'Iphone'},
    { value: 'Huawei',   viewValue: 'Huawei'}
  ];

  constructor(public postsService: PostsService) {}


  onAddPost(form: NgForm) {
    if (form.invalid ) {
      return;
    }
    Swal.fire('saved !', this.enteredTitle, 'success'); // tatla3 w t9ollik jawwik behy sahby
    this.postsService.addPost(form.value.title, form.value.content, );
    form.resetForm();
  }


  ngOnInit() {


  }
}
