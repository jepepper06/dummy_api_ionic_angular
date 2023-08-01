import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { LandingViewComponent } from './landing-view.component';
import { StarRatingModule } from '../star-rating/star-rating.module';



@NgModule({
  declarations: [LandingViewComponent],
  imports: [
    CommonModule,
    IonicModule,
    StarRatingModule
  ],
  exports:[LandingViewComponent]
})
export class LandingViewModule { }
