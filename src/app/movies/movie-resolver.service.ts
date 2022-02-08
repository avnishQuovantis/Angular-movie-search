import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";
import { MovieFetchService } from "./movie-fetch.service";
import { MovieService } from "./movie.service";
@Injectable({ providedIn: "root" })
export class MovieResolver implements Resolve<any> {
  constructor(
    private movieService: MovieService,
    private movieFetch: MovieFetchService,
  ) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const movies = this.movieService.getAllMovies();
    if (movies.length == 0) {
      return this.movieFetch.fetchMovies();
    } else {
      return movies;
    }
  }
}
