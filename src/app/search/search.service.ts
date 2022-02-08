import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { MovieService } from "../movies/movie.service";
import { SeriesService } from "../series/series.service";
@Injectable({ providedIn: "root" })
export class SearchService {
  search = [];
  constructor(
    private seriesService: SeriesService,
    private moviesService: MovieService,
  ) {}
  searchChanged = new Subject<any>();
  searchItem(searchItem: string) {
    console.log(searchItem);
    let search = [];
    if (searchItem !== "") {
      search = this.seriesService.getAllSeries().filter((series) => {
        return series["title"].toLowerCase().includes(searchItem);
      });
      let moviesElements = this.moviesService
        .getAllMovies()
        .filter((movies) => {
          return movies["title"].toLowerCase().includes(searchItem);
        });

      for (let i = 0; i < moviesElements.length; i++) {
        if (i < moviesElements.length) {
          search.push(moviesElements[i]);
        }
      }
    }
    this.search = search;
    return search;
  }
  getSearchItem() {
    return this.search.slice();
  }
}
