import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class EcharMapService {

  /**
   * 中国地图
   */
  abstract getEcharByChinaMap();

  /**
   * 行业趋势图
   */
  abstract getEcharByPlot();

  /**
   * 行业旭日图
   */
  abstract getEcharBySun();

  /**
   * 行业饼状图
   */
  abstract getEcharByPie();

  /**
   * 族谱
   */
  abstract getEcharByRelate();
}
