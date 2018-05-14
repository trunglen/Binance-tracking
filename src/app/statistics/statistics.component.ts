import { Component, OnInit } from '@angular/core';
import { VolumeTrackingTransform, VolumeTracking, TrackingService } from '../tracking.service';
import * as _ from 'lodash'
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  volumeTrackings = <VolumeTracking[]>[]
  volumeTrackingTransforms = <VolumeTrackingTransform[]>[]
  p = 1
  condition = { target: 'coin', filter: '' }
  rangeDates: Date[];
  startTime: string
  endTime: string
  order = 'volume'
  reverse = false
  sortedCollection: any[];

  constructor(
    private trackingService: TrackingService,
    private orderPipe: OrderPipe
  ) {
  }

  ngOnInit() {
    this.trackingService.getVolumeTracking().subscribe(res => {
      this.volumeTrackings = <VolumeTracking[]>res
      this.sortedCollection = this.orderPipe.transform(this.volumeTrackings, 'volume');
      // this.volumeTrackings.sort((a,b)=>{
      //   return Number.parseInt(a.volume) > Number.parseInt(b.volume) ? 1 : -1;
      // })
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

export function equalTime(time1: string, time2: string) {
  var tem1Date = new Date(time1)
  var tem2Date = new Date(time2)
  return tem1Date.getDate() == tem2Date.getDate() && tem1Date.getMonth() == tem2Date.getMonth() && tem1Date.getFullYear() == tem2Date.getFullYear()
}