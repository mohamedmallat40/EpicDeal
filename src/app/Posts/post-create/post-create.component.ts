import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  enteredValue = '';
  newPost = 'No content';

  onAddPost() {
    this.newPost = this.enteredValue;
    Swal.fire('saved !', this.newPost, 'success'); // tatla3 w t9ollik jawwik behy sahby
  }
  constructor() {
   }

  ngOnInit() {


  }
}
