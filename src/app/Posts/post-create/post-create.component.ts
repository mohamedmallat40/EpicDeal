import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  enteredTitle = '';
  enteredContent = '';
 @Output() postCreated = new EventEmitter();

  onAddPost() {
    // this.newPost = this.enteredValue;
    const post = {
      title: this.enteredTitle,
      content: this.enteredContent
    };
    Swal.fire('saved !', this.enteredTitle, 'success'); // tatla3 w t9ollik jawwik behy sahby
    this.postCreated.emit(post);
  }
  constructor() {
   }

  ngOnInit() {


  }
}
