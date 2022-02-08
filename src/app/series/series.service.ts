import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
@Injectable({ providedIn: "root" })
export class SeriesService {
  series = [];
  seriesChange = new Subject<any>();
  getAllSeries() {
    return this.series.slice();
  }
  getSeries(id) {
    let series = this.series.find((obj) => {
      return obj.id == id;
    });
    return series;
  }
  setSeries(series) {
    this.series = series;
    this.seriesChange.next(series.slice());
  }
  addSeries(seriesObj) {
    let newSeries = seriesObj;
    newSeries["id"] = this.series.length;
    newSeries["catagory"] = "series";
    this.series.push(newSeries);
    this.seriesChange.next(this.series.slice());
  }
  deleteSeries(index: number) {
    this.series.splice(index, 1);
    this.seriesChange.next(this.series.slice());
  }
}
