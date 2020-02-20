import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bc',
  templateUrl: './bc.component.html',
  styleUrls: ['./bc.component.css']
})
export class BCComponent implements OnInit {

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
          console.log(param);
          if (param.data.value) {
            return param.data.name + ':' + param.data.value;
          } else {
            return param.data.name ;
          }
        }
      },
      data: [
        {
          name: '营业情况'
        },
        {
          name: '营业总收入',
          value: 1,
          category: 1
        },
        {
          name: '主营业务收入',
          value: 1,
          category: 2
        },
        {
          name: '利润总额',
          value: 1,
          category: 3
        },
        {
          name: '净利润',
          value: 1,
          category: 4
        },
        {
          name: '纳税总额',
          value: 1,
          category: 5
        },
        {
          name: '所有者权益合计',
          value: 1,
          category: 6
        }
      ],
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
      edges: [
        {
          source: '营业情况',
          target: '所有者权益合计'
        },
        {
          source: '营业情况',
          target: '营业总收入'
        },
        {
          source: '营业情况',
          target: '主营业务收入'
        },
        {
          source: '营业情况',
          target: '利润总额'
        },
        {
          source: '营业情况',
          target: '净利润'
        },
        {
          source: '营业情况',
          target: '纳税总额'
        }
      ]
    }],
  };

  constructor() { }

  ngOnInit() {
  }

  onEchartInit(event) {

  }
}
