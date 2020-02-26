import { Component, OnInit, ViewChild } from '@angular/core';
import {SendDataService} from '../../../services/send-data.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  current = 0;

  index = 0;
  info: any = {
    one: null,
    two: null,
    three: null,
    four: null
  };

  @ViewChild('one', {static: false})
  oneComponent: any;
  @ViewChild('two', {static: false})
  twoComponent: any;
  @ViewChild('three', {static: false})
  threeComponent: any;
  @ViewChild('four', {static: false})
  fourComponent: any;
  @ViewChild('five', {static: false})
  fiveComponent: any;
  constructor(private sendDataService: SendDataService) { }

  ngOnInit() {
  }


  // 返回上一步
  pre(): void {
    this.current -= 1;
    this.changeContent();
  }

  // 下一步
  next(): void {
    this.getInfo();
    this.current += 1;
    this.changeContent();
  }

  // 最后一步应该的操作
  done(): void {
    console.log(this.sendDataService)
    this.fourComponent.getInfo();
    console.log('done');
  }

  // 到谁就显示1-5的那个组件
  changeContent(): void {
    switch (this.current) {
      case 0: {
        this.index = 0; // 显示企业具体信息
        break;
      }
      case 1: {
        this.index = 1; // 显示商标什么的
        break;
      }
      case 2: {
        this.index = 2; // 负债
        break;
      }
      case 3: {
        this.index = 3; // 年度报表
        break;
      }
      case  4: {
        this.index = 4; // 判断结果
        break;
      }
      default: {
        this.index = -1;
      }
    }
  }

  // 获取数据
  getInfo() {
    switch (this.current) {
      case 0: {
        this.oneComponent.getInfo(); // 显示企业具体信息
        console.log(this.info);
        break;
      }
      case 1: {
        this.twoComponent.getInfo(); // 显示商标什么的
        break;
      }
      case 2: {
        this.threeComponent.getInfo(); // 负债
        break;
      }
      case 3: {
        this.fourComponent.getInfo(); // 年度报表
        break;
      }
      case  4: {
         // 判断结果
        break;
      }
    }
  }

  getChildInfo(event) {
    switch (this.index) {
      case 0: {
        this.info.one = event ; // 显示企业具体信息
        console.log(this.info);
        break;
      }
      case 1: {
        this.info.two = event; // 显示商标什么的
        console.log(this.info);
        break;
      }
      case 2: {
        this.info.three = event; // 负债
        console.log(this.info);
        break;
      }
      case 3: {
        this.info.four = event; // 年度报表
        console.log(this.info);
        this.sendDataService.getInfo(this.info).subscribe(data => {
          console.log(data);
        });
        break;
      }
      case  4: {
        // 判断结果
        break;
      }
    }
  }


}
