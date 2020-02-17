import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {InfoService} from '../../services/info.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  info: any;

  constructor(private activatedRoute: ActivatedRoute,
              private infoService: InfoService) { }

  ngOnInit() {
    // let id = 123;
    // this.activatedRoute.params.subscribe(data => {
    //   console.log(data);
    //   id = data.id;
    //   console.log(id);
    // });
    this.getInfo(123);
  }

  getInfo(id: number) {
    this.infoService.getInfo(id).subscribe(data => {
      console.log(data);
      this.info = data.data.company.id;
    });
  }

}
