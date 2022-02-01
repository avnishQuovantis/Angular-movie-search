import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MovieService } from './movie.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [MovieService],
})
export class MoviesComponent implements OnInit, OnDestroy {
  allMovies: {}[];
  currentRoute: boolean = false;
  subscription: Subscription;
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.allMovies = this.movieService.getAllMovies();
    this.subscription = this.movieService.changedMovie.subscribe((movies) => {
      this.allMovies = movies;
    });
    console.log(this.allMovies);
  }
  createUser() {
    this.router.navigate(['create'], { relativeTo: this.route });
  }
  deleteMovie(index: number) {
    this.movieService.deleteMovie(index);
    this.router.navigate(['movies']);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
