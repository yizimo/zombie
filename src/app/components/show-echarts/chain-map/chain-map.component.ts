import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EcharMapService} from '../../../services/echar-map.service';
import {ShowEchartsComponent} from '../show-echarts.component';
import {ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-chain-map',
  templateUrl: './chain-map.component.html',
  styleUrls: ['./chain-map.component.css']
})
export class ChainMapComponent implements OnInit {

  flag = 0;
  chinaMapList: any = [];
  echartInstance: any;
  barMapList: any = [];

  // 地图
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
    toolbox: {
      feature: {
        myTool2:  {
          show: true,
          title: '柱状图',
          // tslint:disable-next-line:max-line-length
          icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.' +
            '567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.' +
            '45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,' +
            '5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,' +
            '424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,' +
            '1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,' +
            '593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
          // tslint:disable-next-line:only-arrow-functions
          onclick: () => {
            this.getFlag(1);
          }
        }
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

  // 柱状图
  barOption = {
    backgroundColor: '#FFFFFF',
    title: {
      text: '分布数量图 '
    },
    toolbox: {
      feature: {
        myTool2:  {
          show: true,
          title: '地图',
          // tslint:disable-next-line:max-line-length
          icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.' +
          '567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.' +
          '45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,' +
          '5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,' +
          '424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,' +
          '1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,' +
          '593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
          // tslint:disable-next-line:only-arrow-functions
          onclick: () => {
            this.getFlag(0);
          }
        }
      }
    },
    color: ['#3398DB'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
        label: {
          show: true
        }
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        // tslint:disable-next-line:only-arrow-functions
        data: null,
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '僵尸企业',
        type: 'bar',
        barWidth: '30%',
        // tslint:disable-next-line:only-arrow-functions
        data: null
      }
    ]
  };

  constructor(private echarMapService: EcharMapService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.getChinaMap();
    console.log(11111);
  }

  getChinaMap() {
    this.echarMapService.getEcharByChinaMap().subscribe(data => {
      this.chinaMapList = data.data.area_chart;
      this.barMapList = data.data.area_chart;
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
      this.barOption.xAxis.push({
        axisTick: undefined, type: 'category',
        // tslint:disable-next-line:only-arrow-functions
        data:  this.barMapList.map(function(a) {
          return a.name;
        })
      });
      this.barOption.series.push({
        name: '僵尸企业',
        type: 'bar',
        barWidth: '30%',
        // tslint:disable-next-line:only-arrow-functions
        data: this.barMapList.map(function(a) {
          return a.value;
        })
      });
    });
    this.resizeChart();
  }

  onChartInit(event) {
    this.echartInstance = event;
  }

  resizeChart() {
      console.log('更新视图');
      this.echartInstance.setOption(this.chartOption, true);
  }
  resizeByChainOrBar(flag) {
    if (this.echartInstance) {
    //  console.log(flag % 2 === 0);
      if (flag % 2 === 0) {
        this.echartInstance.setOption(this.chartOption, true);
      } else if (flag % 2 === 1) {
        this.echartInstance.setOption(this.barOption, true);
      }
    }
  }

  getFlag(flag) {
    this.flag++;
    this.resizeByChainOrBar(this.flag);
  }

}
