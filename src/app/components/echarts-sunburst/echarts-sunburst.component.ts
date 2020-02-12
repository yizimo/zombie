import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-echarts-sunburst',
  templateUrl: './echarts-sunburst.component.html',
  styleUrls: ['./echarts-sunburst.component.css']
})
export class EchartsSunburstComponent implements OnInit {

  sunburstOption =  {
    // 背景颜色
    backgroundColor: '#FFFFFF',
    // 标题
    title: {
      text: '旭日图'
    },
    tooltip: {
    trigger: 'item',
    formatter: '{b}: {c}'
  },
    visualMap: {
      type: 'continuous',
      min: 0,
      max: 100,
      inRange: {
        color: ['#2D5F73', '#538EA6', '#F2D1B3', '#F2B8A2', '#F28C8C']
      }
    },
    // 具体数据
    series: {
      // 图表类型
      type: 'sunburst',
      highlightPolicy: 'ancestor',
      // 数据
      data: [{
        name: '服务业',
        // 值
        value: 30
      }, {
        name: '工业',
        value: 30,
        children: [{
          name: '是僵尸企业',
          value: 15
        }, {
          name: '不是僵尸企业',
          value: 15
        }]
      }, {
        name: '交通运输业',
        value: 30
      }, {
        name: '零售业',
        value: 30
      }, {
        name: '商品服务业',
        value: 30
      }, {
        name: '社区服务',
        value: 30
      }],
      radius: [0, '50%'],
      sort: null,
      levels: [{}, {
        // 内圈大小
        r0: '25%',
        // 外圈大小
        r: '75%',
        itemStyle: {
          borderWidth: 2
        },
        label: {
          rotate: 'tangential'
        }
      }]
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
