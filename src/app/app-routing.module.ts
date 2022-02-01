import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthGaurd } from './auth-gaurd.service';
import { CreatePostComponent } from './posts/create-post/create-post.component';
import { canDeactivateGaurd } from './can-deactivate-gaurd.service';

import { HomeComponent } from './home/home.component';

import { PostResolver } from './posts/post/post-resolver.service';
import { PostComponent } from './posts/post/post.component';
import { PostsComponent } from './posts/posts.component';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movies/movie/movie.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { SeriesComponent } from './series/series.component';
import { SelectedSeriesComponent } from './series/selected-series/selected-series.component';
import { CreateSeriesComponent } from './series/create-series/create-series.component';
import { SearchComponent } from './search/search.component';

const appRoute: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'movies',
    component: MoviesComponent,
    children: [
      {
        path: 'create',
        component: CreateMovieComponent,
        pathMatch: 'full',
        canDeactivate: [canDeactivateGaurd],
      },
      { path: ':id', component: MovieComponent },
    ],
  },
  {
    path: 'posts',
    component: PostsComponent,
    canActivateChild: [AuthGaurd],
    children: [
      {
        path: 'create',
        component: CreatePostComponent,
        canDeactivate: [canDeactivateGaurd],
        pathMatch: 'full',
      },
      {
        path: ':id',
        component: PostComponent,
        resolve: { post: PostResolver },
      },
    ],
  },
  {
    path: 'series',
    component: SeriesComponent,
    children: [
      { path: 'create', component: CreateSeriesComponent },
      { path: ':id', component: SelectedSeriesComponent },
    ],
  },
  { path: 'search/:id', component: SearchComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
