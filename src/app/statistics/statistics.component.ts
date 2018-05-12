import { Component, OnInit } from '@angular/core';
import { VolumeTrackingTransform, VolumeTracking, TrackingService } from '../tracking.service';
import * as _ from 'lodash'

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
  order = 'symbol'
  rangeDates: Date[];
  startTime: string
  endTime: string
  constructor(
    private trackingService: TrackingService
  ) { }

  ngOnInit() {
    this.trackingService.getVolumeTracking().subscribe(res => {
      this.volumeTrackings = <VolumeTracking[]>res
    })
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