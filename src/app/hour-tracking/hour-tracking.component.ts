import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HourTracking, TrackingService, HourTrackingTransform } from '../tracking.service';
import * as _ from 'lodash'
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-hour-tracking',
  templateUrl: './hour-tracking.component.html',
  styleUrls: ['./hour-tracking.component.css']
})
export class HourTrackingComponent implements OnInit, AfterViewInit {

  
  hourTracking = <HourTracking>{}
  hourTrackings = <HourTrackingTransform[]>[]
  constructor(
    private trackingService: TrackingService,
    private activedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) { 
  }

  ngOnInit() {
    this.htmlSnippet = `
    <script type="text/javascript">
      new TradingView.widget(
        {
          "width": 980,
          "height": 610,
          "symbol": "BINANCE:BTGBTC",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "Light",
          "style": "1",
          "locale": "vi_VN",
          "toolbar_bg": "#f1f3f6",
          "enable_publishing": false,
          "allow_symbol_change": true,
          "container_id": "tradingview_f357f"
        }
      );
    </script>
    `
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
        console.log(this.hourTrackings)
      })
    })
  }

  ngAfterViewInit(): void {
  }

  htmlSnippet = ''
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
