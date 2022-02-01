import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-selected-series',
  templateUrl: './selected-series.component.html',
  styleUrls: ['./selected-series.component.css'],
})
export class SelectedSeriesComponent implements OnInit {
  series;
  constructor(
    private route: ActivatedRoute,
    private seriesService: SeriesService
  ) {}

  ngOnInit(): void {
    let seriesName;
    this.route.params.subscribe((params: Params) => {
      seriesName = params['id'];
      this.series = this.seriesService.getSeries(seriesName);
    });
  }
}
