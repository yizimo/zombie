import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {InfoService} from '../../services/info.service';
import {Location} from '@angular/common';
import {GetInfoService} from '../../services/get-info.service';
import {LocalStorage} from '../../utils/local-storage';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  color = 'red';
  info: any;
  id: any;
  data: any;
  zombie: any;
  advice: any;
  constructor(private activatedRoute: ActivatedRoute,
              private infoService: InfoService, private location: Location, private localStorage: LocalStorage) { }

  ngOnInit() {
    this.getUrlParam();
    this.getInfo(this.id);
  }

  getUrlParam() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id;
    });
  }

  getInfo(id: any) {
    this.infoService.getInfo(id).subscribe(data => {
      console.log(data);
      this.data = data.data;
      this.zombie = this.data.page_head;
      this.advice = this.data.page_company_all;
      if (this.advice.probability >= 80) {
        this.color = 'red';
      } else if (this.advice.probability >= 60) {
        this.color = 'orange';
      } else if (this.advice.probability >= 50) {
        this.color = 'yellow';
      } else {
        this.color = 'green';
      }
      this.getIn();
    });
  }

  goBack() {
    this.location.back();
  }

  getIn() {
    this.localStorage.setObject('la', this.data);
    console.log(this.localStorage.getObject('la'));
  }
}
