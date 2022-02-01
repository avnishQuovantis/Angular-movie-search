import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-create-series',
  templateUrl: './create-series.component.html',
  styleUrls: ['./create-series.component.css'],
})
export class CreateSeriesComponent implements OnInit {
  seriesForm: FormGroup;
  constructor(private seriesService: SeriesService) {}

  ngOnInit(): void {
    this.seriesForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      rating: new FormControl(null, Validators.required),
      genre: new FormControl(null, Validators.required),
      country: new FormControl(null, Validators.required),
      summary: new FormControl(null, Validators.required),
      language: new FormControl(null, Validators.required),
      image: new FormControl(null, Validators.required),
    });
  }
  createPost() {
    console.log(this.seriesForm.value);
    this.seriesService.addSeries(this.seriesForm.value);
  }
}
