import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VolumeTrackingComponent } from './volume-tracking/volume-tracking.component';

const routes: Routes = [
    { path: '', component: VolumeTrackingComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
