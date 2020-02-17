import { Component, OnInit } from '@angular/core';
import {EcharMapService} from '../../services/echar-map.service';

@Component({
  selector: 'app-echarts-pip',
  templateUrl: './echarts-pip.component.html',
  styleUrls: ['./echarts-pip.component.css']
})
export class EchartsPipComponent implements OnInit {

  listPip: any = [];
  chartPip: any;

  pipOption = {
    backgroundColor: '#FFFFFF',
    title: {
      text: '行业占比图'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c} ({d}%)'
    },
    legend: {
      bottom: 10,
      left: 'center',
      data: ['服务业', '工业', '交通运输业', '商品服务业', '社区服务', '零售业']
    },
    series: [
      {
        type: 'pie',
        radius: '65%',
        center: ['50%', '50%'],
        selectedMode: 'single',
        data: this.listPip
      }
    ]
  }

  constructor(private echarMapService: EcharMapService) { }

  ngOnInit() {
    this.getPipData();
  }

  getPipData() {
    this.echarMapService.getEcharByPie().subscribe(data =>  {
      this.listPip = data.data.trade_pie_chart;
      this.pipOption.series.push({
        type: 'pie',
        radius: '65%',
        center: ['50%', '50%'],
        selectedMode: 'single',
        data: this.listPip
      });
    });
    this.resizeChart()
  }

  onChartInit(event) {
    this.chartPip = event;
  }

  resizeChart() {
    if (this.chartPip) {
      this.chartPip.setOption(this.pipOption, true);
    }
  }

}
