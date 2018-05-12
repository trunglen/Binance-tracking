import { Component, OnInit } from '@angular/core';
import { TrackingService, VolumeTracking, VolumeTrackingTransform } from '../tracking.service';
import * as _ from 'lodash'
import { equalTime } from '../statistics/statistics.component';
@Component({
  selector: 'app-volume-tracking',
  templateUrl: './volume-tracking.component.html',
  styleUrls: ['./volume-tracking.component.css']
})
export class VolumeTrackingComponent implements OnInit {
  volumeTrackings = <VolumeTracking[]>[]
  volumeTrackingTransforms = <VolumeTrackingTransform[]>[]
  p = 1
  condition = { target: 'coin', filter: '' }
  order = 'symbol'
  constructor(
    private trackingService: TrackingService
  ) { }

  ngOnInit() {
    this.trackingService.getVolumeTracking().subscribe(res => {
      var now = new Date()
      var temp = <VolumeTracking[]>res
      this.volumeTrackings = temp.filter(c=>{
        return equalTime(c.startTimeDisplay,now.toString())
      })
    })
  }

  onFilter(target, filter: string) {
    this.condition = { target: target, filter: filter }
  }
}
