import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie, MovieServiceService } from '../services/movie-service.service';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent  implements OnInit {

  constructor(public _service: MovieServiceService) { }
  movieList$: Observable<Movie[]> = new Observable();

  ngOnInit() {
    this.movieList$ = this._service.getMovies();
    this._service.getMovies().subscribe();
  }
  onClick(movie: Movie){
    this._service.selectedMovie$.next(movie);
    this._service.selectedMovie$.subscribe(console.log);
  }

}
