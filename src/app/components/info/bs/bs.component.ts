import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bs',
  templateUrl: './bs.component.html',
  styleUrls: ['./bs.component.css']
})
export class BSComponent implements OnInit {

  bsOption = {
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
          name: '资产负债'
        },
        {
          name: '资产总额',
          value: 1,
          category: 0
        },
        {
          name: '负债总额',
          value: 1,
          category: 1
        }
      ],
      categories: [{name: '资产总额'},
        {name: '负债总额'}],
      force: {
        repulsion: 1000,
        gravity: 0.2
      },
      edges: [
        {
          source: '资产负债',
          target: '负债总额'
        },
        {
          source: '资产负债',
          target: '资产总额'
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
