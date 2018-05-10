import { Component, OnInit } from '@angular/core';
import { TrackingService, VolumeTracking, VolumeTrackingTransform } from '../tracking.service';
import * as _ from 'lodash'
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
  constructor(
    private trackingService: TrackingService
  ) { }

  ngOnInit() {
    this.trackingService.getVolumeTracking().subscribe(res => {
      this.volumeTrackings = <VolumeTracking[]>res
      let transform1 = _.groupBy(res, 'symbol')
      console.log(transform1)
      _.each(transform1, (v, k) => {
        const temp = <VolumeTracking[]>v
        let open = 0, close = 0, high = 0, low = 0, volume = 0, buy_volume = 0, btc_volume = 0, btc_buy_volume = 0, ratio = 0
        temp.forEach((v1, k) => {
          open += Number.parseFloat(v1.open)
          close += Number.parseFloat(v1.close)
          high += Number.parseFloat(v1.high)
          low += Number.parseFloat(v1.low)
          volume += Number.parseFloat(v1.volume)
          buy_volume += Number.parseFloat(v1.buyVolume)
          btc_volume += Number.parseFloat(v1.quoteVolume)
          btc_buy_volume += Number.parseFloat(v1.quoteBuyVolume)
          ratio += Number.parseFloat(v1.ratio)
        })
        this.volumeTrackingTransforms.push(
          <VolumeTrackingTransform>{
            symbol: k,
            start_time: temp[0].startTimeDisplay,
            end_time: temp[0].closeTimeDisplay,
            price: {
              open: open,
              close: close,
              high: high,
              low: low,
            },
            volume: volume,
            buy_volume: buy_volume,
            btc_volume: btc_volume,
            btc_buy_volume: btc_buy_volume,
            percent: Number.parseFloat((ratio / v.length * 100) + '').toFixed(2)
          }
        )
      })
    })
  }

  onFilter(target, filter: string) {
    this.condition = { target: target, filter: filter }
  }
}
