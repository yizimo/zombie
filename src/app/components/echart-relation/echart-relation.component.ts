import { Component, OnInit } from '@angular/core';
import {EcharMapService} from '../../services/echar-map.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-echart-relation',
  templateUrl: './echart-relation.component.html',
  styleUrls: ['./echart-relation.component.css']
})
export class EchartRelationComponent implements OnInit {

  echartRelation: any;
  listRelation: any = []; // 具体对象
  listEdge: any = []; // 关系

  relationOption = {
    backgroundColor: '#FFFFFF',
    title: {
      text: '企业关系图'
    },
    legend: {
      data: [{name: '服务业'},
        {name: '工业'},
        {name: '交通运输业'},
        {name: '零售业'},
        {name: '商品服务业'},
        {name: '社区服务'}]
    },
    series: [{
      type: 'graph',
      layout: 'force',
      animation: false,
      roam: true,
      focusNodeAdjacency: true,
      label: {
        position: 'right',
        formatter: '{b}:{c}',
        normal: {
          show: true,
          // tslint:disable-next-line:max-line-length
          position: 'inside',
          textStyle: {
            fontSize: 16
          }
        }
      },
      draggable: true,
      data: this.listRelation,
      categories: [{name: '服务业'},
        {name: '工业'},
        {name: '交通运输业'},
        {name: '零售业'},
        {name: '商品服务业'},
        {name: '社区服务'}],
      force: {
        repulsion: 1000,
        gravity: 0.2
      },
      edges: this.listEdge
    }],
  };

  constructor(private echarMapService: EcharMapService, private router: Router) { }

  ngOnInit() {
    this.getInfo();
  }

  getBig(event) {
    console.log(event.data.id);
    this.router.navigateByUrl('/info');
  }
  getInfo() {
    this.echarMapService.getEcharByRelate().subscribe(data => {
      this.listRelation = data.data.relationMap;
      console.log(this.listRelation);
      this.listRelation[0].symbolSize = 30;
      this.listEdge = data.data.edgeMaps;
      this.relationOption.series.push({
        type: 'graph',
        layout: 'force',
        focusNodeAdjacency: true,
        roam: true,
        animation: false,
        label: {
          position: 'right',
          formatter: '{b}:{c}',
          normal: {
            show: true,
            // tslint:disable-next-line:max-line-length
            position: 'inside',
            textStyle: {
              fontSize: 16
            }
          }
        },
        draggable: true,
        data: this.listRelation,
        categories: [{name: '服务业'},
          {name: '工业'},
          {name: '交通运输业'},
          {name: '零售业'},
          {name: '商品服务业'},
          {name: '社区服务'}],
        force: {
          repulsion: 1000,
          gravity: 0.2
        },
        edges: this.listEdge
      }) ;
    });
    this.resizeChart();
  }

  onEchartInit(event) {
    this.echartRelation = event;
  }

  resizeChart() {
    if (this.echartRelation) {
      this.echartRelation.setOption(this.relationOption, true);
    }
  }


}
