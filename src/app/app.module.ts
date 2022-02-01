import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeadingComponent } from './heading/heading.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { AppRoutingModule } from './app-routing.module';

import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movies/movie/movie.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { MovieService } from './movies/movie.service';

import { AppService } from './app-service.service';
import { PostComponent } from './posts/post/post.component';
import { AuthService } from './auth.service';
import { AuthGaurd } from './auth-gaurd.service';
import { PostResolver } from './posts/post/post-resolver.service';
import { CreatePostComponent } from './posts/create-post/create-post.component';
import { canDeactivateGaurd } from './can-deactivate-gaurd.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SeriesComponent } from './series/series.component';
import { SelectedSeriesComponent } from './series/selected-series/selected-series.component';
import { CreateSeriesComponent } from './series/create-series/create-series.component';
import { SeriesService } from './series/series.service';
import { PostService } from './posts/posts.service';
import { SearchComponent } from './search/search.component';
import { SearchService } from './search/search.service';
@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    HomeComponent,
    PostsComponent,
    MovieComponent,
    MoviesComponent,
    CreateMovieComponent,
    PostComponent,
    CreatePostComponent,
    LoginComponent,

    SignupComponent,
    SeriesComponent,
    SelectedSeriesComponent,
    CreateSeriesComponent,
    SearchComponent,
  ],
  imports: [ReactiveFormsModule, BrowserModule, FormsModule, AppRoutingModule],
  providers: [
    AppService,
    AuthService,
    AuthGaurd,
    PostResolver,
    canDeactivateGaurd,
    SearchService,
    // MovieService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
