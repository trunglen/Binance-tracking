import { Component, OnInit } from '@angular/core';
import { TrackingService, VolumeTracking, VolumeTrackingTransform } from '../tracking.service';
import * as _ from 'lodash'
import { equalTime } from '../statistics/statistics.component';
import { OrderPipe } from 'ngx-order-pipe';
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
  order = 'volume'
  reverse = false
  sortedCollection: any[];
  constructor(
    private trackingService: TrackingService,
    private orderPipe: OrderPipe
  ) { }

  ngOnInit() {
    this.trackingService.getVolumeTracking().subscribe(res => {
      var now = new Date()
      var temp = <VolumeTracking[]>res
      this.volumeTrackings = temp.filter(c => {
        return equalTime(c.startTimeDisplay, now.toString())
      })
      this.sortedCollection = this.orderPipe.transform(this.volumeTrackings, 'volume');
    })
  }
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
    this.order = value;
  }

  customComparator(itemA: string, itemB: string) {
    return Number.parseInt(itemA) > Number.parseInt(itemB) ? 1 : -1;
  }

  onFilter(target, filter: string) {
    this.condition = { target: target, filter: filter }
  }
}
