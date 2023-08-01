import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HeaderModule } from '../header/header.module';
import { StarRatingModule } from '../star-rating/star-rating.module';
import { MovieListModule } from '../movie-list/movie-list.module'
import { LandingViewModule } from '../landing-view/landing-view.module';
import { MenuModule } from '../menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HeaderModule,
    StarRatingModule,
    MovieListModule,
    LandingViewModule,
    MenuModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
