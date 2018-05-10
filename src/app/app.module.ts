import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { VolumeTrackingComponent } from './volume-tracking/volume-tracking.component';
import { VolumeTrackingDetailComponent } from './volume-tracking/volume-tracking-detail/volume-tracking-detail.component';
import { HourTrackingComponent } from './hour-tracking/hour-tracking.component';
import { AppRoutingModule } from './app-routing.module';
import { TrackingService } from './tracking.service';
import { HttpService } from '../x/http/http.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { VolumeFilterPipe } from './volume-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    VolumeTrackingComponent,
    VolumeTrackingDetailComponent,
    HourTrackingComponent,
    VolumeFilterPipe
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [
    HttpService,
    TrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
