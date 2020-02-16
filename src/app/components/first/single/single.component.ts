import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  current = 0;

  index = 0;



  // 返回上一步
  pre(): void {
    this.current -= 1;
    this.changeContent();
  }

  // 下一步
  next(): void {
    this.current += 1;
    this.changeContent();
  }

  // 最后一步应该的操作
  done(): void {
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

  constructor() { }

  ngOnInit() {
  }

}
