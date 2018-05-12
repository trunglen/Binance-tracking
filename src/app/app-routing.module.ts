import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VolumeTrackingComponent } from './volume-tracking/volume-tracking.component';
import { VolumeTrackingDetailComponent } from './volume-tracking/volume-tracking-detail/volume-tracking-detail.component';
import { HourTrackingComponent } from './hour-tracking/hour-tracking.component';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [
    { path: 'detail/:id', component: HourTrackingComponent },
    { path: 'statistics', component: StatisticsComponent },
    { path: '', component: VolumeTrackingComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes,{useHash:true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
