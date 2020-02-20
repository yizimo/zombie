import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fc',
  templateUrl: './fc.component.html',
  styleUrls: ['./fc.component.css']
})
export class FCComponent implements OnInit {

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
          name: '融资渠道'
        },
        {
          name: '债卷融资额度',
          value: 1,
          category: 0
        },
        {
          name: '债卷融资成本',
          value: 1,
          category: 1
        },
        {
          name: '股权融资额度',
          value: 1,
          category: 2
        },
        {
          name: '股权融资成本',
          value: 1,
          category: 3
        },
        {
          name: '内部融资和贸易融资额度',
          value: 1,
          category: 4
        },
        {
          name: '内部融资和贸易融资成本',
          value: 1,
          category: 5
        },
        {
          name: '项目融资和政策融资额度',
          value: 1,
          category: 6
        },
        {
          name: '项目融资和政策融资成本',
          value: 1,
          category: 7
        }
      ],
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
      links: [
        {
          source: '融资渠道', target: '债卷融资额度',
        },
        {
          source: '融资渠道', target: '债卷融资成本',
        },
        {
          source: '融资渠道', target: '股权融资额度',
        },
        {
          source: '融资渠道', target: '股权融资成本',
        },
        {
          source: '融资渠道', target: '内部融资和贸易融资额度',
        },
        {
          source: '融资渠道', target: '内部融资和贸易融资成本',
        },
        {
          source: '融资渠道', target: '项目融资和政策融资额度',
        },
        {
          source: '融资渠道', target: '项目融资和政策融资成本',
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
