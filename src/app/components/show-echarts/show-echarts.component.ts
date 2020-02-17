import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Sun} from '../../echart/sun';
import * as echarts from 'echarts';
import { EChartOption } from 'echarts';
import 'echarts/map/js/china.js';
import {EcharMapService} from '../../services/echar-map.service';

@Component({
  selector: 'app-show-echarts',
  templateUrl: './show-echarts.component.html',
  styleUrls: ['./show-echarts.component.css']
})
export class ShowEchartsComponent implements OnInit {

  chinaMapList: any = [];

  echartInstance: any;

  chartOption = {
    backgroundColor: '#FFFFFF',
    title: {
      text: '分布地图 '
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b} {c}',
      textStyle: {
        fontSize: 8
      }
    },
    visualMap: {
      min: 0,
      max: 10000,
      text: ['High', 'Low'],
      realtime: false,
      calculable: true,
      itemWidth: 10,
      inRange: {
        color: ['lightskyblue', 'yellow', 'orangered'],
        symbolSize: [30, 30]
      },
      textStyle: {
        fontSize: 10
      }
    },
    series: [{
      name: '地图展示',
      type: 'map',
      mapType: 'china',
      label: {
        show: true
      },
      data: this.chinaMapList
    }]
  };

  constructor(private echarMapService: EcharMapService) {
  }

  ngOnInit() {
    this.getChinaMap();
  }

  getChinaMap() {
    this.echarMapService.getEcharByChinaMap().subscribe(data => {
      this.chinaMapList = data.data.area_chart;
      console.log(this.chinaMapList);
      this.chartOption.series.push({
        name: '地图展示',
        type: 'map',
        mapType: 'china',
        label: {
          show: true
        },
        data: this.chinaMapList
      });
    });
    this.resizeChart();
  }

  onChartInit(event) {
    this.echartInstance = event;
  }

  resizeChart() {
    if (this.echartInstance) {
      console.log(this.chartOption)
      this.echartInstance.setOption(this.chartOption, true);

    }
  }
}
