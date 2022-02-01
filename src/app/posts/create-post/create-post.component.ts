import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from 'src/app/app-service.service';
import {
  canComponentDeactivate,
  canDeactivateGaurd,
} from 'src/app/can-deactivate-gaurd.service';
import { PostService } from '../posts.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent
  implements OnInit, CanDeactivate<canDeactivateGaurd>
{
  title;
  summary;

  allowedEdit = false;
  constructor(private postService: PostService, private router: Router) {}

  ngOnInit(): void {}
  createPost() {
    this.postService.createPost(this.title, this.summary);
    this.title = '';
    this.summary = '';
    this.router.navigate['/posts'];
  }
  canDeactivate():
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if (this.title !== '' || this.summary !== '') {
      return confirm('do you want to leave this page');
    } else {
      return true;
    }
  }
}
