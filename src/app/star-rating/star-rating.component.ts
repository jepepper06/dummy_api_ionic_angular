import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
})
export class StarRatingComponent  implements OnInit {

  constructor() { }

  @Input()
  rating: number = 0;
  numOfStars: number = 5;
  starsFilled: number = 0;

  ratingTransformationToStars(){
    this.starsFilled = Math.floor(this.rating*0.5)
  }

  isStarFilled(n: number): string{
    if(n > this.starsFilled)
      return 'not-filled';
    return 'deafult';
  }
  ngOnInit() {
    this.ratingTransformationToStars();
  }

}
