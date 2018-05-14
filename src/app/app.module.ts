import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { OrderModule } from 'ngx-order-pipe';
import { StatisticsComponent } from './statistics/statistics.component';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    VolumeTrackingComponent,
    VolumeTrackingDetailComponent,
    HourTrackingComponent,
    VolumeFilterPipe,
    StatisticsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    OrderModule,
    CoreModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    CalendarModule,
  ],
  providers: [
    HttpService,
    TrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
