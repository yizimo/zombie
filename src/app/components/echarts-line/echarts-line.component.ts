import { Component, OnInit } from '@angular/core';
import {EcharMapService} from '../../services/echar-map.service';

@Component({
  selector: 'app-echarts-line',
  templateUrl: './echarts-line.component.html',
  styleUrls: ['./echarts-line.component.css']
})
export class EchartsLineComponent implements OnInit {

  plotChart: any;
  listPlot: any = [] ;

  lineOption = {
    backgroundColor: '#FFFFFF',
    title: {
      text: '行业趋势图'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: [
        '服务业', '工业', '交通运输业', '零售业', '商品服务业', '社区服务'
      ],
      textStyle: {
        fontSize: 10
      },
      bottom: 1
    },
    grid: {
      left: '20%',
      right: '15%',
      bottom: '20%',
      top: '20%',
      conditionals: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['2015', '2016', '2017', '2018']
    },
    yAxis: {
      type: 'value'
    },
    series: this.listPlot
  };

  constructor(private echarMapService: EcharMapService) { }

  ngOnInit() {
    this.getPlotData();
  }

  getPlotData() {
    this.echarMapService.getEcharByPlot().subscribe(data => {
      this.listPlot = data.data.trade_plot_chart;
      console.log(data);
      // tslint:disable-next-line:forin only-arrow-functions
      this.listPlot.map( function(obj, index) {
        obj.type = 'line';
        console.log(obj);
        return obj;
      });
      this.lineOption.series = this.listPlot;
    });
    this.resizeChart();
  }

  onChartInit(event) {
    this.plotChart = event;
  }

  resizeChart() {
    if (this.plotChart) {
      console.log(this.plotChart)
      this.plotChart.setOption(this.lineOption, true);

    }
  }

  getDemo(event) {
    console.log(event);
  }
}
