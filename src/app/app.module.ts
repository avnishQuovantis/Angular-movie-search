import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { HeadingComponent } from "./heading/heading.component";
import { HomeComponent } from "./home/home.component";
import { AppRoutingModule } from "./app-routing.module";

import { MoviesComponent } from "./movies/movies.component";
import { MovieComponent } from "./movies/movie/movie.component";
import { CreateMovieComponent } from "./movies/create-movie/create-movie.component";
import { MovieService } from "./movies/movie.service";

import { AppService } from "./app-service.service";
import { AuthService } from "./auth.service";
import { AuthGaurd } from "./auth-gaurd.service";
import { canDeactivateGaurd } from "./can-deactivate-gaurd.service";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SeriesComponent } from "./series/series.component";
import { SelectedSeriesComponent } from "./series/selected-series/selected-series.component";
import { CreateSeriesComponent } from "./series/create-series/create-series.component";
import { SearchComponent } from "./search/search.component";
import { SearchService } from "./search/search.service";
import { MovieStartComponent } from "./movies/movie-start/movie-start.component";
import { SeriesStartComponent } from "./series/series-start/series-start.component";
import { AlertComponent } from "./alert/alert.component";
import { PlaceholderDirective } from "./alert/placeholder.directive";
@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    HomeComponent,
    MovieComponent,
    MoviesComponent,
    CreateMovieComponent,

    LoginComponent,

    SignupComponent,
    SeriesComponent,
    SelectedSeriesComponent,
    CreateSeriesComponent,
    SearchComponent,
    MovieStartComponent,
    SeriesStartComponent,
    AlertComponent,
    PlaceholderDirective,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    AppService,
    AuthService,
    AuthGaurd,
    canDeactivateGaurd,
    SearchService,
    // MovieService
  ],
  bootstrap: [AppComponent],
  entryComponents: [AlertComponent],
})
export class AppModule {}
