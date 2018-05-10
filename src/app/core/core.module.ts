import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { SpinnerService } from './spinner/spinner.service';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NavComponent,
    SpinnerComponent
  ],
  exports: [
    NavComponent,
    SpinnerComponent
  ],
  providers:[
    SpinnerService
  ]
})
export class CoreModule { }
