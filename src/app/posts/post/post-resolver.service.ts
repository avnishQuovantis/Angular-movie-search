import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from 'src/app/app-service.service';
import { PostService } from '../posts.service';

interface Post {
  id: number;
  title: string;
  description: string;
  image: string;
}
@Injectable()
export class PostResolver implements Resolve<Post> {
  constructor(private postService: PostService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): any | Observable<Post> | Promise<Post> {
    return this.postService.getPost(+route.params['id']);
  }
}
