import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { map } from "rxjs";
import { SeriesService } from "./series.service";
@Injectable({ providedIn: "root" })
export class SeriesFetchService {
  constructor(private http: HttpClient, private seriesService: SeriesService) {}
  saveSeries() {
    const series = this.seriesService.getAllSeries();
    this.http
      .put(
        "https://movie-search-app-62123-default-rtdb.firebaseio.com/data/series.json",
        series,
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
  fetchSeries() {
    return this.http
      .get(
        "https://movie-search-app-62123-default-rtdb.firebaseio.com/data/series.json",
      )
      .pipe(
        map((series) => {
          this.seriesService.setSeries(series);
        }),
      );
  }
}
