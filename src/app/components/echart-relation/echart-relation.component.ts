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
    toolbox: {
      feature: {
        myTool2:  {
          show: true,
          title: 'lala',
          // tslint:disable-next-line:max-line-length
          icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
          onclick() {
            // @ts-ignore
            new EchartRelationComponent().getBig(1);
          }
        }
      }
    },
    series: [{
      type: 'graph',
      layout: 'force',
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
        edgeLength: 5,
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
    this.router.navigateByUrl('/info');
    console.log(event.data.target);
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
          edgeLength: 5,
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
