import { Component, OnInit } from '@angular/core';
import { Movie, MovieServiceService } from '../services/movie-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public _service: MovieServiceService) {}

  movieList$: Observable<Movie[]> = new Observable();

  ngOnInit(){
    this.movieList$ = this._service.getMovies();
    this._service.getMovies().subscribe( x => console.log(x));
  }

}
