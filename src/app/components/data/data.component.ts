import { Component, OnInit } from '@angular/core';
import {Result} from '../../kind/result';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  // 搜索框
  searchValue = '';
  // 企业列表
  listOfData: Array<Result> = [
    {
      componyId: 1,
      flag: true,
      warningLevel: 1,
      advice: 'zimo'
    },
    {
      componyId: 2,
      flag: true,
      warningLevel: 1,
      advice: 'zimo'
    },
    {
      componyId: 3,
      flag: true,
      warningLevel: 1,
      advice: 'zimo'
    },
    {
      componyId: 4,
      flag: true,
      warningLevel: 1,
      advice: 'zimo'
    }
  ];
  listOfDisplayData = [...this.listOfData];
  constructor() { }

  ngOnInit() {
  }

}
