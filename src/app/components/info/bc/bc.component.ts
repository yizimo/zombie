import { Component, OnInit } from '@angular/core';
import {LocalStorage} from '../../../utils/local-storage';

@Component({
  selector: 'app-bc',
  templateUrl: './bc.component.html',
  styleUrls: ['./bc.component.css']
})
export class BCComponent implements OnInit {

  listData: any = [];
  listDataEdge: any = [];
  ecahrtBC: any;
  bcOption = {
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
          } else if (param.data.value === 0) {
            return param.data.name + ':' + 0;
          } else {
            return param.data.name;
          }
        }
      },
      data: this.listData,
      categories: [
        {
          name: '营业总收入',
        },
        {
          name: '主营业务收入',
        },
        {
          name: '利润总额',
        },
        {
          name: '净利润',
        },
        {
          name: '纳税总额',
        },
        {
          name: '所有者权益合计',
        }],
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
    console.log(parse.business_state);
    this.listData = parse.business_state.relationMaps;
    this.listDataEdge = parse.business_state.zombieMap;
    this.localStorage.remove('la');
    this.getData();
    console.log(this.bcOption);
    this.resizeChart();
  }

  getData() {
    this.bcOption.series.push({
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
          } else if (param.data.value === 0) {
            console.log('111111');
            return param.data.name + ':' + 0;
          } else {
            return param.data.name ;
          }
        }
      },
      data: this.listData,
      categories: [
        {
          name: '营业总收入',
        },
        {
          name: '主营业务收入',
        },
        {
          name: '利润总额',
        },
        {
          name: '净利润',
        },
        {
          name: '纳税总额',
        },
        {
          name: '所有者权益合计',
        }],
      force: {
        repulsion: 1000,
        gravity: 0.2
      },
      edges: this.listDataEdge
    });
  }

  onEchartInit(event) {
    this.ecahrtBC = event;
  }
  resizeChart() {
    if (this.ecahrtBC) {
      this.ecahrtBC.setOption(this.bcOption, true);
    }
  }
}
