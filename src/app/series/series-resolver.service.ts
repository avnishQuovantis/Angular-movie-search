import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";
import { SeriesFetchService } from "./series-fetch.service";
import { SeriesService } from "./series.service";
@Injectable({ providedIn: "root" })
export class SeriesResolverService implements Resolve<any> {
  constructor(
    private seriesService: SeriesService,
    private seriesFetch: SeriesFetchService,
  ) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const series = this.seriesService.getAllSeries();
    if (series.length == 0) {
      return this.seriesFetch.fetchSeries();
    } else {
      return series;
    }
  }
}
