import { Injectable } from '@angular/core';
import { HttpService } from '../x/http/http.service';
import { environment } from '../environments/environment';


function loadUrl(path: string) {
    return environment.baseURL + path
}
const getVolumeTracking = loadUrl('volumeday/getvolumeday')
const getVolumeHour = loadUrl('volumehour/getvolumehour')
@Injectable()
export class TrackingService {
    constructor(
        private http: HttpService
    ) { }

    getVolumeTracking() {
        return this.http.Post(getVolumeTracking, { xcz: 'zxc' }).map(res => {
            return res['articles']
        })
        // return this.http.Get('http://localhost:3000/articles')
    }

    getVolumeHour() {
        return this.http.Post(getVolumeHour, { "xcz": "zxc" }).map(res => {
            return res['articles']
        })
    }
}


export class VolumeTracking {
    xcode: string;
    symbol: string;
    startTime: string;
    closeTime: string;
    open: string;
    high: string;
    low: string;
    close: string;
    volume: string;
    volumeNum: number;
    buyVolume: string;
    quoteVolume: string;
    quoteBuyVolume: string;
    closeTimeDisplay: string;
    startTimeDisplay: string;
    ratio: string;
    ratioQuote: string;
    createdAt: Date;
    updatedAt: Date;
    id: number;
    /**
     *
     */
    constructor() {
        this.volumeNum = Number.parseFloat(this.volume)
    }
}

export interface VolumeTrackingTransform {
    start_time: string
    end_time: string
    symbol: string
    price: {
        open: number
        close: number
        high: number
        low: number
    }
    buy_volume: number
    btc_volume: number
    volume: number
    btc_buy_volume: number
    percent: string
}

export interface HourTracking extends VolumeTracking {
    hourStart: string;
    hourEnd: string;
}


export interface HourTrackingTransform {
    hourStart: string;
    hourEnd: string;
    buy_volume: number
    btc_volume: number
    volume: number
    btc_buy_volume: number
}