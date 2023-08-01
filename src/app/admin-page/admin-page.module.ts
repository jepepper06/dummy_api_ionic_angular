import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AdminPageComponent } from './admin-page.component';
import { AdminPageRoutingModule } from './admin-page.routing';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AdminPageComponent],
  imports: [
    CommonModule,
    IonicModule,
    AdminPageRoutingModule,
    FormsModule,
  ],
  exports:[AdminPageComponent]
})
export class AdminPageModule { }

