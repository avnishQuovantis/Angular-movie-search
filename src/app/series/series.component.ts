import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SeriesService } from './series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css'],
})
export class SeriesComponent implements OnInit, OnDestroy {
  subsription: Subscription;
  allSeries;
  constructor(
    private seriesService: SeriesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.allSeries = this.seriesService.getAllSeries();
    console.log(this.allSeries);
    this.subsription = this.seriesService.seriesChange.subscribe((series) => {
      this.allSeries = series;
    });
  }
  deleteSeries(index) {
    this.seriesService.deleteSeries(index);
    this.router.navigate(['series']);
  }
  ngOnDestroy(): void {
    this.subsription.unsubscribe();
  }
}
