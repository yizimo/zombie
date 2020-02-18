import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Sun} from '../../echart/sun';
import * as echarts from 'echarts';
import { EChartOption } from 'echarts';
import 'echarts/map/js/china.js';
import {EcharMapService} from '../../services/echar-map.service';

@Component({
  selector: 'app-show-echarts',
  templateUrl: './show-echarts.component.html',
  styleUrls: ['./show-echarts.component.css']
})
export class ShowEchartsComponent implements OnInit {

  flag: number;

  ngOnInit(): void {
    this.flag = 0;
  }

  changFlag() {
    // tslint:disable-next-line:triple-equals
   this.flag ++;
   alert(this.flag);
  }
}
