import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params } from '@angular/router';
import { AppService } from 'src/app/app-service.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  post;
  constructor(private route: ActivatedRoute, private appService: AppService) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.post = data['post'];
    });
    // this.route.params.subscribe((params: Params) => {
    //   const id = params['id'];
    //   this.post = this.appService.getPost(id);
    // });
  }
}
