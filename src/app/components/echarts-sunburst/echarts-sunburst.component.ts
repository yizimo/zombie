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
      text: '1'
    },
    // 具体数据
    series: {
      // 图表类型
      type: 'sunburst',
      highlightPolicy: 'ancestor',
      // 数据
      data: [{
        name: '服务业',
        // 样式
        itemStyle: {
          color: 'orange'
        },
        // 值
        value: 1
      }, {
        name: '工业',
        itemStyle: {
          color: '#da1d23'
        },
        value: 1
      }, {
        name: '交通运输业',
        itemStyle: {
          color: '#ebb40f'
        },
        value: 1
      }, {
        name: '零售业',
        itemStyle: {
          color: '#187a2f'
        },
        value: 1
      }, {
        name: '商品服务业',
        itemStyle: {
          color: '#0aa3b5'
        },
        value: 1
      }, {
        name: '社区服务',
        itemStyle: {
          color: '#c94930'
        },
        value: 1
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
