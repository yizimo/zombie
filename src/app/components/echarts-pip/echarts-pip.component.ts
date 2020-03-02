import { Component, OnInit } from '@angular/core';
import {EcharMapService} from '../../services/echar-map.service';
import {Subscription} from 'rxjs';
import {LineAndPipService} from '../../services/line-and-pip.service';

@Component({
  selector: 'app-echarts-pip',
  templateUrl: './echarts-pip.component.html',
  styleUrls: ['./echarts-pip.component.css']
})
export class EchartsPipComponent implements OnInit {

  name = '';
  demoName: Subscription;

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

  constructor(private echarMapService: EcharMapService, private lineAndPipService: LineAndPipService) {
    this.demoName = lineAndPipService.lineToPip$.subscribe(data => {
      this.name = data;
      this.getPipDataByName(this.name);
      console.log(this.name);
    });
  }

  ngOnInit() {
    this.getPipData();
  }

  getPipDataByName(name: string) {
    this.echarMapService.getEchartByPipAndName(name).subscribe(data => {
      console.log(data);
      this.getData(data);
    });
    this.resizeChart();
  }

  getData(data: any) {
    this.listPip = data.data.trade_pie_chart;
    this.pipOption.series = [];
    this.pipOption.series.push({
      type: 'pie',
      radius: '65%',
      center: ['50%', '50%'],
      selectedMode: 'single',
      data: this.listPip
    });
  }

  getPipData() {
    this.echarMapService.getEcharByPie().subscribe(data =>  {
      this.getData(data);
      this.resizeChart();
    });
  }

  onChartInit(event) {
    this.chartPip = event;
  }

  resizeChart() {
      this.chartPip.setOption(this.pipOption, true);
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy() {
    this.demoName.unsubscribe();
  }

}
