import { Component, OnInit } from '@angular/core';
import {GetSendDataService} from '../../services/get-send-data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  id: any;
  listData: any = [];
  constructor(private activatedRoute: ActivatedRoute, private getSendDataService: GetSendDataService) { }

  ngOnInit() {
    this.getUrlParam();

  }
  getUrlParam() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id;
      console.log('url_id: ' + this.id);
    });
  }
  getListData() {
    this.getSendDataService.getData(this.id).subscribe(data => {
      console.log(data);
      this.listData = data.data;
    });
  }
}
