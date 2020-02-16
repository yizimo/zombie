import { Component, OnInit } from '@angular/core';
import {Result} from '../../kind/result';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  // 搜索框
  searchValue: number ;
  // 企业列表
  listOfData: any = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getResult();
  }

  getResult(): void {
    this.dataService.getResult().subscribe(data => {
      console.log(data);
      this.listOfData = data.data.results;
    });
    console.log(this.listOfData);
  }

  getResultBySearchName(): void {
    console.log(this.searchValue);
    this.dataService.getResultBySearchName(this.searchValue).subscribe(data => {
      this.listOfData = data;
    });
  }
}
