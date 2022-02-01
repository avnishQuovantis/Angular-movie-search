import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  movie;
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}
  ngOnInit(): void {
    let movieName;
    this.route.params.subscribe((params: Params) => {
      movieName = params['id'];
      this.movie = this.movieService.getMovie(movieName);
    });
  }
}
