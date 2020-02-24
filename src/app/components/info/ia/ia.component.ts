import { Component, OnInit } from '@angular/core';
import {GetInfoService} from '../../../services/get-info.service';
import {LocalStorage} from '../../../utils/local-storage';

@Component({
  selector: 'app-ia',
  templateUrl: './ia.component.html',
  styleUrls: ['./ia.component.css']
})
export class IAComponent implements OnInit {

  listData: any = [];
  listDataEdge: any = [];
  ecahrtIA: any;
  iaOption = {
    backgroundColor: '#FFFFFF',
    series: [{
      type: 'graph',
      layout: 'force',
      roam: true,
      label: {
        show: true,
        position: 'right',
        formatter(param) {
          if (param.data.value) {
            return param.data.name + ':' + param.data.value;
          } else {
            return param.data.name ;
          }
        }
      },
      data: this.listData,
      categories: [{name: '专利'},
        {name: '商标'},
        {name: '著作权'}],
      force: {
        repulsion: 1000,
        gravity: 0.2
      },
      edges: this.listDataEdge
    }],
  };
  constructor(private localStorage: LocalStorage) {
  }

  ngOnInit() {
    const parse = this.localStorage.getObject('la');
    this.listDataEdge = parse.intangible_assets.zombieMap;
    this.listData = parse.intangible_assets.relationMaps;
    console.log(parse);
    this.localStorage.remove('la');
    this.changeEchar();
    this.resizeChart();
  }

  changeEchar() {
    this.iaOption.series.push({
      type: 'graph',
      layout: 'force',
      roam: true,
      label: {
        show: true,
        position: 'right',
        formatter(param) {
          if (param.data.value) {
            return param.data.name + ':' + param.data.value;
          } else {
            return param.data.name ;
          }
        }
      },
      data: this.listData,
      categories: [{name: '专利'},
        {name: '商标'},
        {name: '著作权'}],
      force: {
        repulsion: 1000,
        gravity: 0.2
      },
      edges: this.listDataEdge
    });
  }

  onEchartInit(event) {
    this.ecahrtIA = event;
  }

  resizeChart() {
    if (this.ecahrtIA) {
      this.ecahrtIA.setOption(this.iaOption, true);
    }
  }


}
