import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {GetInfoService} from '../../../services/get-info.service';
import {LocalStorage} from '../../../utils/local-storage';

@Component({
  selector: 'app-fc',
  templateUrl: './fc.component.html',
  styleUrls: ['./fc.component.css']
})
export class FCComponent implements OnInit {

  listData: any = [];
  listDataEdge: any = [];
  ecahrtFC: any;
  fcOption = {
    backgroundColor: '#FFFFFF',
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        type: 'sankey',
        left: 50.0,
        top: 20.0,
        right: 150.0,
        bottom: 25.0,
        data: this.listData,
        links: this.listDataEdge,
        lineStyle: {
          color: 'source',
          curveness: 0.5
        },
        itemStyle: {
          color: '#1f77b4',
          borderColor: '#1f77b4'
        },
        label: {
          color: 'rgba(0,0,0,0.7)',
          fontFamily: 'Arial',
          fontSize: 10
        }
      }]
  };
  constructor(private localStorage: LocalStorage) {

  }

  ngOnInit() {
    const parse = this.localStorage.getObject('la');
    this.listDataEdge = parse.financing_channels.relationMaps;
    this.listData = parse.financing_channels.zombieMap;
    this.localStorage.remove('la');
    this.changeEchar();
    // // @ts-ignore
    // let la =  echarts.init(document.getElementById('echarts'));
    // // @ts-ignore
    // la.setOption(this.fcOption);
    this.resizeChart();
  }

  changeEchar() {
    this.fcOption.series.push({
      type: 'sankey',
      left: 50.0,
      top: 20.0,
      right: 150.0,
      bottom: 25.0,
      data: this.listData,
      links: this.listDataEdge,
      lineStyle: {
        color: 'source',
        curveness: 0.5
      },
      itemStyle: {
        color: '#1f77b4',
        borderColor: '#1f77b4'
      },
      label: {
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Arial',
        fontSize: 10
      }
    });
  }

  onEchartInit(event) {
    this.ecahrtFC = event;
  }

  resizeChart() {
    if (this.ecahrtFC) {
      console.log(this.fcOption);
      this.ecahrtFC.setOption(this.fcOption, true);
    }
  }
}
