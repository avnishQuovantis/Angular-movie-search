import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class MovieService {
  movies: {}[] = [
    {
      id: 0,
      title: 'Avatar',
      rating: 'PG-13',
      genre: 'Action, Adventure, Fantasy',
      summary:
        'A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
      language: 'English, Spanish',
      country: 'USA, UK',
      image:
        'https://i0.wp.com/newsup18.com/wp-content/uploads/2021/09/Avatar-2-Movie-2021-Poster.jpg?w=1200&ssl=1',
      catagory: 'movies',
    },
    {
      id: 1,
      title: 'I Am Legend',
      rating: 'PG-13',
      genre: 'Drama, Horror, Sci-Fi',
      summary:
        'Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.',
      language: 'English',
      country: 'USA',
      image: 'https://moviekoop.com/Images/Cover_Photos/i-am-a-legend.jpg',
      catagory: 'movies',
    },
  ];
  changedMovie = new Subject<any>();
  getAllMovies() {
    return this.movies.slice();
  }
  getMovie(id) {
    let movie = this.movies.find((obj) => {
      return id == obj['id'];
    });
    return movie;
  }
  createMovie(movie) {
    console.log(movie);
    movie['id'] = this.movies.length;
    movie['catagory'] = 'movies';
    if (movie['image'] == '') {
      movie['image'] =
        'https://www.pngitem.com/pimgs/m/516-5167304_transparent-background-white-user-icon-png-png-download.png';
    }
    this.movies.push(movie);
    this.changedMovie.next(this.movies.slice());
  }
  deleteMovie(index: number) {
    this.movies.splice(index, 1);
    this.changedMovie.next(this.movies.slice());
  }
}
