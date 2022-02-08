import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap } from "rxjs";
import { MovieService } from "./movie.service";

@Injectable({ providedIn: "root" })
export class MovieFetchService {
  constructor(private http: HttpClient, private movieService: MovieService) {}
  storeMovies() {
    const movies = this.movieService.getAllMovies();
    console.log(movies);
    this.http
      .put<{}[]>(
        "https://movie-search-app-62123-default-rtdb.firebaseio.com/data/movies.json",
        movies,
      )
      .subscribe((res) => {});
  }
  fetchMovies() {
    return this.http
      .get<any>(
        "https://movie-search-app-62123-default-rtdb.firebaseio.com/data/movies.json",
      )
      .pipe(
        tap((movie) => {
          this.movieService.setMovies(movie);
        }),
      );
  }
}
