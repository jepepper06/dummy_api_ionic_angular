import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Movie, MovieServiceService } from '../services/movie-service.service';
import {  ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent  implements OnInit {

  constructor(public _service: MovieServiceService) { }
  movies$: BehaviorSubject<Movie[]> = new BehaviorSubject([{id:0,image:'',imdb_url:'',rating:0,movie:''}]);
  movieList: Movie[] = [];

  ngOnInit() {
    this._service.getMovies();
    this._service.getMovies().subscribe(x => this.movies$.next(x));
  }
  @ViewChild('updateModal') modal: IonModal | undefined;
  @ViewChild('deleteModal') deleteModal: IonModal | undefined;

  message = '';
  movie: Movie = {id:0,image:'',imdb_url:'',rating:0,movie:''};

  onSelectedMovie(movie: Movie){
    this.movie = movie;
    this.modal!.isOpen = true;
  }

  onSelectToDelete(movie: Movie){
    this.movie = movie;
    this.deleteModal!.isOpen = true;
  }

  onDeleteMovie(id: number){
    // let arr: Movie[];
    // this.movies$.subscribe(x => { arr = x}).add(() => {
    //   arr.map(el => el.id == id);
    //   this.movies$.next(arr);
    // });
  }
  cancel(){
    this.deleteModal?.dismiss(null, 'cancel');
    this.deleteModal!.isOpen = false;
  }
  confirm(){
    this.onDeleteMovie(this.movie.id)
    this.deleteModal?.dismiss(this.movie, 'confirm');
    this.deleteModal!.isOpen = false;
  }
  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<Movie>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Movie was deleted!`;
      setTimeout(() => this.message = '',4000)
    }
}

  cancelUpdate() {
    this.modal?.dismiss(null, 'cancel');
    this.modal!.isOpen = false;
  }

  confirmUpdate() {
    this.modal?.dismiss(this.movie, 'confirm');
    this.modal!.isOpen = false;
  }

  onWillDismissUpdate(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<Movie>>;
    if (ev.detail.role === 'confirm') {
      this.message = `${ev.detail.data?.movie} was updated!`;
      setTimeout(() => this.message = '',4000)
    }

}
}

