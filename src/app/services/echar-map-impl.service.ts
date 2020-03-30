import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EcharMapService} from './echar-map.service';

@Injectable({
  providedIn: 'root'
})
export class EcharMapImplService extends EcharMapService {

  dataUrl = 'http://47.98.46.41:80/data';

  constructor(private http: HttpClient) {
    super();
  }

  getEcharByChinaMap() {
    return this.http.get(this.dataUrl + '/get_area_chart_data');
  }
  getChainMapByCard() {
    return this.http.get(this.dataUrl + '/get_area_chart_cart');
  }
  getChainMapByAdvice() {
    return this.http.get(this.dataUrl + '/get_area_chart_advice');
  }
  getEchartByChinaTable() {
    return this.http.get(this.dataUrl + '/get_chart_china_table');
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
  getEchartByPipAndName(name: string) {
    return this.http.get(this.dataUrl + '/get_echart_pip_name?year=' + name);
  }
  getEchartByPipByAdvice() {
    return this.http.get(this.dataUrl + '/get_echart_pip_advice');
  }
}
