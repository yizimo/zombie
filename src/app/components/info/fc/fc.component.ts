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
      categories: [
        {
          name: '债卷融资额度',
        },
        {
          name: '债卷融资成本',
        },
        {
          name: '股权融资额度',
        },
        {
          name: '股权融资成本',
        },
        {
          name: '内部融资和贸易融资额度',
        },
        {
          name: '内部融资和贸易融资成本',
        },
        {
          name: '项目融资和政策融资额度',
        },
        {
          name: '项目融资和政策融资成本',
        }],
      force: {
        repulsion: 1000,
        gravity: 0.2
      },
      links: this.listDataEdge
    }],
  };
  constructor(private localStorage: LocalStorage) {

  }

  ngOnInit() {
    const parse = this.localStorage.getObject('la');
    console.log(parse);
    this.listDataEdge = parse.financing_channels.zombieMap;
    this.listData = parse.financing_channels.relationMaps;
    this.localStorage.remove('la');
    this.changeEchar();
    this.resizeChart();
  }

  changeEchar() {
    this.fcOption.series.push({
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
      categories: [
        {
          name: '债卷融资额度',
        },
        {
          name: '债卷融资成本',
        },
        {
          name: '股权融资额度',
        },
        {
          name: '股权融资成本',
        },
        {
          name: '内部融资和贸易融资额度',
        },
        {
          name: '内部融资和贸易融资成本',
        },
        {
          name: '项目融资和政策融资额度',
        },
        {
          name: '项目融资和政策融资成本',
        }],
      force: {
        repulsion: 1000,
        gravity: 0.2
      },
      links: this.listDataEdge
    });
  }

  onEchartInit(event) {
    this.ecahrtFC = event;
  }

  resizeChart() {
    if (this.ecahrtFC) {
      this.ecahrtFC.setOption(this.fcOption, true);
    }
  }
}
