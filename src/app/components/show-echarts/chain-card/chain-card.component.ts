import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {EcharMapService} from '../../../services/echar-map.service';

@Component({
  selector: 'app-chain-card',
  templateUrl: './chain-card.component.html',
  styleUrls: ['./chain-card.component.css']
})
export class ChainCardComponent implements OnInit {

  data: any;
  constructor(private router: Router, private mapService: EcharMapService) { }

  ngOnInit() {
    this.getDataInfo();
  }
  goto(id: number) {
    console.log(id);
    this.router.navigateByUrl('/data/' + id);
  }

  getDataInfo() {
    this.mapService.getChainMapByCard().subscribe( data => {
      console.log(data);
      console.log(data.data.map_chart_cart);
      this.data = data.data.map_chart_cart;
    });
  }
}
