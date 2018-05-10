import { Pipe, PipeTransform } from '@angular/core';
import { VolumeTrackingTransform } from './tracking.service';

@Pipe({
  name: 'volumeFilter',
  pure: false
})
export class VolumeFilterPipe implements PipeTransform {

  transform(value: VolumeTrackingTransform[], args?: { target: string, filter: string }): any {
    if (args.target === 'coin') {
      console.log(args)
      return value.filter(c => {
        return c.symbol.toUpperCase().includes(args.filter.toUpperCase())
      })
    } else if (args.target === 'min') {
      return value.filter(c => {
        return c.btc_volume >= Number.parseFloat(args.filter)
      })
    } else {
      return value.filter(c => {
        return c.btc_volume <= Number.parseFloat(args.filter)
      })
    }
  }

}
