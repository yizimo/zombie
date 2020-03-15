import { Component, OnInit } from '@angular/core';
import {LocalStorage} from '../../../utils/local-storage';

@Component({
  selector: 'app-bc',
  templateUrl: './bc.component.html',
  styleUrls: ['./bc.component.css']
})
export class BCComponent implements OnInit {

  listData: any = [];
  ecahrtBC: any;
  bcOption = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['营业总收入', '利润总额', '净利润', '纳税总额', '所有者权益']
    },
    grid: {
      left: '10%',
      right: '10%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['2015', '2016', '2017']
    },
    yAxis: {
      type: 'value'
    },
    series: this.listData
  };

  constructor(private localStorage: LocalStorage) { }

  ngOnInit() {
    const parse = this.localStorage.getObject('la');
    console.log(parse.business_state);
    this.listData = parse.business_state;
    this.localStorage.remove('la');
    this.getData();
    this.resizeChart();
  }

  getData() {
    this.bcOption.series = this.listData;
    console.log(this.bcOption);
  }

  onEchartInit(event) {
    this.ecahrtBC = event;
    console.log(this.ecahrtBC);
  }
  resizeChart() {
      if (this.ecahrtBC) {
        this.ecahrtBC.setOption(this.bcOption, true);
      }
  }
}
