import { Injectable } from '@angular/core';
import { MovieService } from './movies/movie.service';
import { MovieComponent } from './movies/movie/movie.component';
import { PostService } from './posts/posts.service';
import { SeriesComponent } from './series/series.component';
import { SeriesService } from './series/series.service';

@Injectable({ providedIn: 'root' })
export class AppService {}
