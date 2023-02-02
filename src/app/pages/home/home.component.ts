import { Component, OnInit } from '@angular/core';

import { PostService } from '../../services/post/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  posts: any;

  constructor(private service: PostService) {}

  ngOnInit() {
    this.service.getPosts().subscribe((response) => {
      this.posts = response;
    });
  }
}
