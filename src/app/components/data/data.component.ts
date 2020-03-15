import { Component, OnInit } from '@angular/core';
import {Result} from '../../kind/result';
import {DataService} from '../../services/data.service';
import {ActivatedRoute} from '@angular/router';

interface Data {
  advice: string;
  companyId: number;
  flag: number;
  warningLevel: number;
}
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  id: number;
  // 搜索框
  searchValue: number ;
  // 企业列表
  listOfData: Data[] = [];
  listOfIs = [{text: '是', value: 1}, {text: '否', value: 0}];
  listOfIsName: number[] = [];
  listOfWarn = [{text: '高', value: 1}, {text: '中', value: 0.8}, {text: '低', value: 0.6}, {text: '无', value: 0.5}];
  listOfWarnName: number[] = [];
  copyListOfData: Data[] = [];
  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.getUrl();
    this.getResult();
  }

  getResult(): void {
    this.dataService.getResult(this.id).subscribe(data => {
      console.log(data);
      this.listOfData = data.data.results;
      this.copyListOfData = this.listOfData;

    });
    console.log(this.listOfData);
  }

  // 解析url
  getUrl() {
    this.activatedRoute.params.subscribe(data => {
      this.id = data.id;
      console.log(this.id);
    });
  }

  // 搜索框
  getResultBySearchName(): void {
    console.log(this.searchValue);
    this.dataService.getResultBySearchName(this.searchValue).subscribe(data => {
      console.log(data);
      this.listOfData = [];
      this.listOfData[0] = data.data;
    });
  }

  // 筛选条件
  filter(listOfSwrnName: number[], listOfSearchName: number[]): void {
    console.log(listOfSearchName);
    console.log(listOfSwrnName);
    this.listOfIsName = listOfSearchName;
    this.listOfWarnName = listOfSwrnName;
    this.search();
  }

  // 筛选结果
  search() {
    this.listOfData = this.copyListOfData;
    console.log(this.listOfIsName);
    this.listOfData = this.listOfData.filter(item => {
      return (this.listOfIsName.length === 0 ? true : this.listOfIsName.indexOf(item.flag) !== -1 ) && this.xuanze(item.warningLevel);
    });
  }

  // 选择预警级别
  xuanze(num: number) {
    if (this.listOfWarnName.length === 0) {
      return true;
    }
    let flag1 = false;
    this.listOfWarnName.forEach(vv => {
      if (vv === 0.5) {
         if (num < 0.5) {
           flag1 = true;
         }
      }
      if (vv === 0.6) {
        if (num >= 0.5 && num < 0.6) {
          flag1 = true;
        }
      }
      if (vv === 0.8) {
        if (num >= 0.6 && num < 0.8) {
          flag1 = true;
        }
      }
      if (vv === 1) {
        if (num >= 0.8 && num <= 1) {
          flag1 = true;
        }
      }
    });
    return flag1;
  }
}
