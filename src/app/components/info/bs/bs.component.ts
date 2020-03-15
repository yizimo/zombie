import { Component, OnInit } from '@angular/core';
import {LocalStorage} from '../../../utils/local-storage';

@Component({
  selector: 'app-bs',
  templateUrl: './bs.component.html',
  styleUrls: ['./bs.component.css']
})
export class BSComponent implements OnInit {

  listData: any = [];
  ecahrtBS: any;
  bsOption =  {
    color: ['#006699', '#4cabce'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '10%',
      right: '10%',
      bottom: '3%',
      containLabel: true
    },
    legend: {
      data: ['资产总额', '负债总额']
    },
    xAxis: [
      {
        type: 'category',
        axisTick: {show: false},
        data: [ '2015', '2016', '2017']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: this.listData
  };

  constructor(private localStorage: LocalStorage) { }

  ngOnInit() {
    const parse = this.localStorage.getObject('la');
    this.listData = parse.asset_liabilities;
    console.log(parse);
    this.localStorage.remove('la');
    this.getData();
    this.resizeChart();
  }

  getData() {
    this.bsOption.series = this.listData;
  }

  onEchartInit(event) {
    this.ecahrtBS = event;
  }

  resizeChart() {
    if (this.ecahrtBS) {
      this.ecahrtBS.setOption(this.bsOption, true);
    }
  }
}
