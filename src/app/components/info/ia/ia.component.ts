import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ia',
  templateUrl: './ia.component.html',
  styleUrls: ['./ia.component.css']
})
export class IAComponent implements OnInit {

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
          name: '无形资产'
        },
        {
          name: '专利',
          value: 1,
          category: 0
        },
        {
          name: '商标',
          value: 1,
          category: 1
        },
        {
          name: '著作权',
          value: 1,
          category: 2
        }
      ],
      categories: [{name: '专利'},
        {name: '商标'},
        {name: '著作权'}],
      force: {
        repulsion: 1000,
        gravity: 0.2
      },
      edges: [
        {
          source: '无形资产',
          target: '专利'
        },
        {
          source: '无形资产',
          target: '商标'
        },
        {
          source: '无形资产',
          target: '著作权'
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
