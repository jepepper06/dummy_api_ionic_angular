import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, filter } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class MovieServiceService implements OnInit{

  constructor(
    private http: HttpClient) { }

  ngOnInit(): void {
  }
  defaultMovie = {
    id: 0,
    movie: '',
    rating:0,
    image:'',
    imdb_url:''
  }

  selectedMovie$: BehaviorSubject<Movie> = new BehaviorSubject(this.defaultMovie);

  getMovies(){
    let result = this.http.get<Movie[]>(environment.api_base_url+'/api/movies',
    {headers:{'Access-Control-Allow-Origin':'*'}});
    return result;
  }
  // getMovieById(id: number){
  //   let result = this.http.get<Movie>('https://dummyapi.online/api/movies/'+`${id}`);
  //   result
  //     .subscribe(x => this.selectedMovie$.next(x));
  //   return result;
  // }

}

export interface Movie{
  id: number,
  movie: string,
  rating: number,
  image: string,
  imdb_url:string
}
