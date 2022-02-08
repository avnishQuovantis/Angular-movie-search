import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { MovieFetchService } from "./movie-fetch.service";
import { MovieService } from "./movie.service";
@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.css"],
})
export class MoviesComponent implements OnInit, OnDestroy {
  allMovies: {}[];
  currentRoute: boolean = false;
  subscription: Subscription;
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router,
    private movieFetch: MovieFetchService,
  ) {}
  ngOnInit(): void {
    this.subscription = this.movieService.changedMovie.subscribe((movies) => {
      console.log("inside movieCOmponents ", movies);
      this.allMovies = movies;
    });
    this.allMovies = this.movieService.getAllMovies();
  }
  onSaveData() {
    this.movieFetch.storeMovies();
  }
  createUser() {
    this.router.navigate(["create"], { relativeTo: this.route });
  }
  deleteMovie(index: number) {
    this.movieService.deleteMovie(index);
    this.movieFetch.storeMovies();
    this.router.navigate(["movies"]);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
