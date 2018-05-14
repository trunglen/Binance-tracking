import { Component, OnInit } from '@angular/core';
import { HourTracking, TrackingService, HourTrackingTransform } from '../tracking.service';
import * as _ from 'lodash'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-hour-tracking',
  templateUrl: './hour-tracking.component.html',
  styleUrls: ['./hour-tracking.component.css']
})
export class HourTrackingComponent implements OnInit {

  public element: any;
  hourTracking = <HourTracking>{}
  hourTrackings = <HourTrackingTransform[]>[]
  constructor(
    private trackingService: TrackingService,
    private activedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.activedRoute.params.subscribe(res => {
      const id = res['id']
      this.trackingService.getVolumeHour().subscribe(res => {
        const value = <HourTracking[]>res
        let transform1 = _.groupBy(res, 'symbol')
        for (let i = 0; i < 24; i++) {
          const hourTracking = containHour(transform1[id], i)
          this.hourTrackings.push({
            hourStart: hourTracking ? hourTracking.hourStart : i + '',
            hourEnd: hourTracking ? hourTracking.hourEnd : i + 1 + '',
            volume: hourTracking ? Number.parseFloat(hourTracking.volume) : 0,
            buy_volume: hourTracking ? Number.parseFloat(hourTracking.volume) : 0,
            btc_buy_volume: hourTracking ? Number.parseFloat(hourTracking.volume) : 0,
            btc_volume: hourTracking ? Number.parseFloat(hourTracking.volume) : 0
          })
          }
      })
    })
  }
}

function containHour(param1: HourTracking[], param2: number): HourTracking {
  for (let i = 0; i < param1.length; i++) {
    const element = param1[i];
    if (element.hourStart === param2 + '') {
      return element
    }
  }
  return null
}
