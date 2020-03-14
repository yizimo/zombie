import { Component, OnInit } from '@angular/core';
import {Result} from '../../kind/result';
import {DataService} from '../../services/data.service';

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

  // 搜索框
  searchValue: number ;
  // 企业列表
  listOfData: Data[] = [];
  listOfIs = [{text: '是', value: 1}, {text: '否', value: 0}];
  listOfIsName: number[] = [];
  listOfWarn = [{text: '高', value: 1}, {text: '中', value: 0.8}, {text: '低', value: 0.6}, {text: '无', value: 0.5}];
  listOfWarnName: number[] = [];
  copyListOfData: Data[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getResult();
  }

  getResult(): void {
    this.dataService.getResult().subscribe(data => {
      console.log(data);
      this.listOfData = data.data.results;
      this.copyListOfData = this.listOfData;

    });
    console.log(this.listOfData);
  }

  getResultBySearchName(): void {
    console.log(this.searchValue);
    this.dataService.getResultBySearchName(this.searchValue).subscribe(data => {
      console.log(data);
      this.listOfData = [];
      this.listOfData[0] = data.data;
    });
  }

  filter(listOfSearchName: number[]): void {
    console.log(listOfSearchName);
    this.listOfIsName = listOfSearchName;
    this.search();
  }

  search() {
    this.listOfData = this.copyListOfData;
    console.log(this.listOfIsName)
    this.listOfData = this.listOfData.filter(item => this.listOfIsName.indexOf(item.flag) !== -1);
  }

  xuanze(num: number): boolean {
    return this.listOfWarnName.forEach(vv => {
      if (vv === 0.5) {
        return num < 0.5;
      } else if (vv === 0.6) {
        return num >= 0.5 && num < 0.6;
      } else if (vv === 0.8) {
        return num >= 0.6 && num < 0.8;
      } else if (vv === 1) {
        return num >= 0.8 && num <= 1;
      }
    });
  }
}
