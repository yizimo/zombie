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

  info: any;
  id: any;
  data: any;
  zombie: any;
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
      this.getIn();
    });
  }

  goBack() {
    this.location.back();
  }

  getIn() {
    this.localStorage.setObject('la', this.data);
  }
}
