import { Injectable, OnInit } from "@angular/core";
import { ActivatedRoute, Data } from "@angular/router";
import { Subject } from "rxjs";
import { MovieFetchService } from "./movie-fetch.service";
@Injectable({ providedIn: "root" })
export class MovieService implements OnInit {
  movies: {}[] = [];
  changedMovie = new Subject<any>();
  constructor(private route: ActivatedRoute) {}
  getAllMovies() {
    return this.movies.slice();
  }

  ngOnInit(): void {}
  getMovie(id) {
    let movie = this.movies.find((obj) => {
      return id == obj["id"];
    });
    return movie;
  }
  setMovies(movies) {
    if (movies != null) {
      this.movies = movies;
      console.log("inside setMovies", movies);
      this.changedMovie.next(this.movies.slice());
    }
  }
  createMovie(movie) {
    console.log(movie);
    movie["id"] = this.movies.length;
    movie["catagory"] = "movies";
    if (movie["image"] == "") {
      movie["image"] =
        "https://www.pngitem.com/pimgs/m/516-5167304_transparent-background-white-user-icon-png-png-download.png";
    }
    this.movies.push(movie);
    this.changedMovie.next(this.movies.slice());
  }
  deleteMovie(index: number) {
    this.movies.splice(index, 1);
    this.changedMovie.next(this.movies.slice());
  }
}
