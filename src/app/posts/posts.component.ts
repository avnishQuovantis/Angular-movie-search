import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app-service.service';
import { PostService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [PostService],
})
export class PostsComponent implements OnInit {
  posts;
  currentelement = -1;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService
  ) {}
  ngOnInit(): void {
    this.posts = this.postService.getAllPost();
    this.postService.changePost.subscribe((post) => {
      this.posts = post;
    });
  }
  goToPost(id) {
    this.currentelement = id;
    this.router.navigate(['/posts', id]);
  }
  createPost() {
    this.router.navigate(['create'], { relativeTo: this.route });
  }
}
