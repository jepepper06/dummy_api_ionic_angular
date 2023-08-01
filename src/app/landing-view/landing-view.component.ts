import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../services/movie-service.service';

@Component({
  selector: 'landing-view',
  templateUrl: './landing-view.component.html',
  styleUrls: ['./landing-view.component.scss'],
})
export class LandingViewComponent  implements OnInit {

  constructor() { }

  @Input()
  movie: Movie | null = null;

  ngOnInit() {
    this.movie = {id:0,movie:'The Witcher',image:'images/the-witcher.jpg',imdb_url:'',rating:7}
  }

}
