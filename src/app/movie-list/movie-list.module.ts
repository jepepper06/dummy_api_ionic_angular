import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MovieListComponent } from './movie-list.component';



@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  declarations:[MovieListComponent],
  exports:[MovieListComponent]
})
export class MovieListModule { }
