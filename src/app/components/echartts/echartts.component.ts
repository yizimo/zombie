import { Component, OnInit } from '@angular/core';
import {EcharMapService} from '../../services/echar-map.service';

@Component({
  selector: 'app-echartts',
  templateUrl: './echartts.component.html',
  styleUrls: ['./echartts.component.css']
})
export class EcharttsComponent implements OnInit {

  advice: any;
  constructor(private pipService: EcharMapService) { }

  ngOnInit() {
    this.getAdvice();
  }

  getAdvice() {
    this.pipService.getEchartByPipByAdvice().subscribe(data => {
      console.log(data);
      this.advice = data.data.advice.obj1;
    });
  }

}
