import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EcharMapService} from './echar-map.service';

@Injectable({
  providedIn: 'root'
})
export class EcharMapImplService extends EcharMapService {

  dataUrl = 'http://localhost:8080/data';

  constructor(private http: HttpClient) {
    super();
  }

  getEcharByChinaMap() {
    return this.http.get(this.dataUrl + '/get_area_chart_data');
  }
  getEcharByPlot() {
    return this.http.get(this.dataUrl + '/get_trade_plot_chart_data');
  }
  getEcharBySun() {
    return this.http.get(this.dataUrl + '/get_trade_sun_chart_data');
  }
  getEcharByPie() {
    return this.http.get(this.dataUrl + '/get_trade_pie_chart_data');
  }
  getEcharByRelate() {
    return this.http.get(this.dataUrl + '/getRelation');
  }
}
