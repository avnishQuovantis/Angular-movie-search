import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class PostService {
  post: {}[] = [
    {
      id: 1,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      summary:
        'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      catagory: 'posts',
    },
    {
      id: 2,
      title: 'Mens Casual Premium Slim Fit T-Shirts ',
      summary:
        'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
      image:
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
      catagory: 'posts',
    },
  ];
  changePost = new Subject<any>();
  getPost(id) {
    let post = this.post.find((obj) => {
      return id == obj['id'];
    });
    return post;
  }
  createPost(title, summary) {
    let newPost = {
      id: this.post.length + 1,
      title,
      summary,
      image:
        'data:image/png;base64,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',
      catagory: 'posts',
    };
    this.post.push(newPost);
    this.changePost.next(this.post.slice());
  }
  getAllPost() {
    return this.post.slice();
  }
}
