import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";
import { tap } from "rxjs";
import { MovieService } from "../movies/movie.service";
import { SeriesService } from "../series/series.service";
@Injectable({ providedIn: "root" })
export class HomeResolverService implements Resolve<any> {
  constructor(
    private http: HttpClient,
    private movieService: MovieService,
    private seriesService: SeriesService,
  ) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.http
      .get(
        "https://movie-search-app-62123-default-rtdb.firebaseio.com/data.json",
      )
      .pipe(
        tap((data) => {
          if (data["movies"] && this.movieService.movies.length == 0)
            this.movieService.setMovies(data["movies"]);
          if (data["series"] && this.seriesService.series.length == 0) {
            this.seriesService.setSeries(data["series"]);
          }
        }),
      );
  }
}
