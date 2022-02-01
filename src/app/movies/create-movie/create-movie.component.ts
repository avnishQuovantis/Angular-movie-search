import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovieService } from '../movie.service';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from 'src/app/app-service.service';
import { canDeactivateGaurd } from 'src/app/can-deactivate-gaurd.service';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css'],
  // providers:[MovieService]
})
export class CreateMovieComponent
  implements OnInit, CanDeactivate<canDeactivateGaurd>
{
  @ViewChild('movieForm') movieForm: NgForm;

  constructor(private movieService: MovieService) {}
  ngOnInit(): void {}
  createPost() {
    let movieObj = {
      title: this.movieForm.value.title,
      rating: this.movieForm.value.rating,
      genre: this.movieForm.value.genre,
      summary: this.movieForm.value.plot,
      language: this.movieForm.value.language,
      country: this.movieForm.value.country,
      picture: this.movieForm.value.picture,
    };
    this.movieService.createMovie(movieObj);

    this.movieForm.reset();
    console.log(this.movieForm.value);
  }
  canDeactivate():
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if (
      this.movieForm.value.title !== '' ||
      this.movieForm.value.rating !== '' ||
      this.movieForm.value.rating !== '' ||
      this.movieForm.value.genre !== '' ||
      this.movieForm.value.summary !== '' ||
      this.movieForm.value.language !== '' ||
      this.movieForm.value.country !== ''
    ) {
      console.log(this.movieForm.value);
      return confirm('do you want to continnue');
    } else {
      return true;
    }
  }
}
