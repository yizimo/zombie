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
   * 地图上面的卡片
   */
  abstract getChainMapByCard();

  /**
   * 地图的建议
   */
  abstract  getChainMapByAdvice();

  /**
   * 地图下面的图表
   */
  abstract getEchartByChinaTable();

  /**
   * 查找年份的
   */
  abstract getEchartByPipAndName(name: string);

  /**
   * 年份的建议
   */
  abstract getEchartByPipByAdvice();

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
