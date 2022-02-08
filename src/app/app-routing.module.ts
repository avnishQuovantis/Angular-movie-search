import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";

import { AuthGaurd } from "./auth-gaurd.service";
import { canDeactivateGaurd } from "./can-deactivate-gaurd.service";

import { HomeComponent } from "./home/home.component";

import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";

import { MoviesComponent } from "./movies/movies.component";
import { MovieComponent } from "./movies/movie/movie.component";
import { CreateMovieComponent } from "./movies/create-movie/create-movie.component";

import { SeriesComponent } from "./series/series.component";
import { SelectedSeriesComponent } from "./series/selected-series/selected-series.component";
import { CreateSeriesComponent } from "./series/create-series/create-series.component";
import { SearchComponent } from "./search/search.component";
import { MovieStartComponent } from "./movies/movie-start/movie-start.component";
import { SeriesStartComponent } from "./series/series-start/series-start.component";
import { MovieResolver } from "./movies/movie-resolver.service";
import { HomeResolverService } from "./home/home-resolver.service";
import { SeriesResolverService } from "./series/series-resolver.service";

const appRoute: Routes = [
  { path: "", component: HomeComponent, resolve: [HomeResolverService] },
  {
    path: "movies",
    component: MoviesComponent,
    resolve: { movies: MovieResolver },
    children: [
      { path: "", component: MovieStartComponent },
      {
        path: "create",
        component: CreateMovieComponent,
        pathMatch: "full",
        canDeactivate: [canDeactivateGaurd],
      },
      { path: ":id", component: MovieComponent },
    ],
  },

  {
    path: "series",
    component: SeriesComponent,
    resolve: [SeriesResolverService],
    children: [
      { path: "", component: SeriesStartComponent },
      {
        path: "create",
        component: CreateSeriesComponent,
        canActivate: [AuthGaurd],
      },
      { path: ":id", component: SelectedSeriesComponent },
    ],
  },
  { path: "search/:id", component: SearchComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
