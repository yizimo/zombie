import { Component, OnInit } from '@angular/core';
import {LocalStorage} from '../../../utils/local-storage';

@Component({
  selector: 'app-bs',
  templateUrl: './bs.component.html',
  styleUrls: ['./bs.component.css']
})
export class BSComponent implements OnInit {

  listData: any = [];
  listDataEdge: any = [];
  ecahrtBS: any;
  bsOption = {
    backgroundColor: '#FFFFFF',
    series: [{
      type: 'graph',
      layout: 'force',
      roam: true,
      draggable: true,
      label: {
        show: true,
        position: 'right',
        // tslint:disable-next-line:only-arrow-functions
        formatter(param) {
          if (param.data.value) {
            return param.data.name + ':' + param.data.value;
          } else {
            return param.data.name ;
          }
        }
      },
      data: this.listData,
      categories: [{name: '资产总额'},
        {name: '负债总额'}],
      force: {
        repulsion: 1000,
        gravity: 0.2
      },
      edges: this.listDataEdge
    }],
  };

  constructor(private localStorage: LocalStorage) { }

  ngOnInit() {
    const parse = this.localStorage.getObject('la');
    this.listDataEdge = parse.asset_liabilities.zombieMap;
    this.listData = parse.asset_liabilities.relationMaps;
    console.log(parse);
    this.localStorage.remove('la');
    this.getData();
    this.resizeChart();
  }

  getData() {
    this.bsOption.series.push({
      type: 'graph',
      layout: 'force',
      roam: true,
      draggable: true,
      label: {
        show: true,
        position: 'right',
        // tslint:disable-next-line:only-arrow-functions
        formatter(param) {
          if (param.data.value) {
            return param.data.name + ':' + param.data.value;
          } else {
            return param.data.name ;
          }
        }
      },
      data: this.listData,
      categories: [{name: '资产总额'},
        {name: '负债总额'}],
      force: {
        repulsion: 1000,
        gravity: 0.2
      },
      edges: this.listDataEdge
    });
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
