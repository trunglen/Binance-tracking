import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { SpinnerService } from './spinner/spinner.service';
import { SpinnerComponent } from './spinner/spinner.component';
import { RouterModule } from '@angular/router';
import { KeepScriptPipe, SafeHtmlPipe } from './pipe/keep-script.pipe';
import { KeepHtmlPipe } from './pipe/keep-html.pipe';
import { SafePipe } from './pipe/safe.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    NavComponent,
    SpinnerComponent,
    KeepScriptPipe,
    KeepHtmlPipe,
    SafeHtmlPipe,
    SafePipe
  ],
  exports: [
    NavComponent,
    SpinnerComponent,
    KeepScriptPipe,
    KeepHtmlPipe,
    SafeHtmlPipe,
    SafePipe
  ],
  providers:[
    SpinnerService
  ]
})
export class CoreModule { }
