import { Pipe, PipeTransform } from '@angular/core';
import { VolumeTrackingTransform, VolumeTracking } from './tracking.service';
import { filter } from 'rxjs/operators';
import { equalTime } from './statistics/statistics.component';

@Pipe({
  name: 'volumeFilter',
  pure: false
})
export class VolumeFilterPipe implements PipeTransform {

  transform(value: VolumeTracking[], args?: { target: string, filter: string }): any {
    if (args.target === 'coin') {
      return value.filter(c => {
        return c.symbol.toUpperCase().includes(args.filter.toUpperCase())
      })
    } else if (args.target === 'min') {
      console.log(args.filter)
      return value.filter(c => {
        return Number.parseFloat(c.quoteVolume) >= Number.parseFloat(args.filter)
      })
    } else if (args.target === 'max'){
      return value.filter(c => {
        return Number.parseFloat(c.quoteVolume) <= Number.parseFloat(args.filter)
      })
    } else  if (args.target === 'start_time'){
      return value.filter(c => {
        return equalTime(c.startTimeDisplay, args.filter)
      })
    } else if (args.target === 'end_time') {
      return value.filter(c => {
        return equalTime(c.closeTimeDisplay, args.filter)
      })
    }
  }

}
