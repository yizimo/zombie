import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {InfoService} from '../../services/info.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  info: any;
  id: any;

  constructor(private activatedRoute: ActivatedRoute,
              private infoService: InfoService, private location: Location) { }

  ngOnInit() {
    this.getUrlParam();
    this.getInfo(this.id);
  }

  getUrlParam() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id;
      console.log(params);
    });
  }

  getInfo(id: any) {
    this.infoService.getInfo(id).subscribe(data => {
      console.log(data);
      this.info = data.data.company.id;
    });
  }

  goBack() {
    this.location.back();
  }

}
