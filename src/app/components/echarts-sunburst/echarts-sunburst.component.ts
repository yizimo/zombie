import { Component, OnInit } from '@angular/core';
import {EcharMapService} from '../../services/echar-map.service';

@Component({
  selector: 'app-echarts-sunburst',
  templateUrl: './echarts-sunburst.component.html',
  styleUrls: ['./echarts-sunburst.component.css']
})
export class EchartsSunburstComponent implements OnInit {

  listSunData: any = [];
  sunChart: any;

  sunburstOption =  {
    // 背景颜色
    backgroundColor: '#FFFFFF',
    // 标题
    title: {
      text: '旭日图'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c}'
  },
    visualMap: {
      type: 'continuous',
      min: 0,
      max: 2000,
      inRange: {
        color: ['#2D5F73', '#538EA6', '#F2D1B3', '#F2B8A2', '#F28C8C']
      }
    },
    // 具体数据
    series: {
      // 图表类型
      type: 'sunburst',
      highlightPolicy: 'ancestor',
      // 数据
      data: this.listSunData,
      radius: [0, '50%'],
      sort: null,
      levels: [{}, {
        // 内圈大小
        r0: '25%',
        // 外圈大小
        r: '75%',
        itemStyle: {
          borderWidth: 2
        },
        label: {
          rotate: 'tangential'
        }
      }]
    }
  }

  constructor(private echarMapService: EcharMapService) { }

  ngOnInit() {
    this.getSunData();
  }

  getSunData() {
    this.echarMapService.getEcharBySun().subscribe(data => {
      this.listSunData = data.data.trade_sun_chart;
      console.log(this.listSunData);
      this.sunburstOption.series.data = this.listSunData;
      this.resizeChart();
    });
  }

  onChartInit(event) {
    this.sunChart = event;
  }

  resizeChart() {
    console.log(this.listSunData);
    this.sunChart.setOption(this.sunburstOption, true);
  }


}
