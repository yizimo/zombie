import { Component, OnInit } from '@angular/core';
import {GetInfoService} from '../../../services/get-info.service';
import {LocalStorage} from '../../../utils/local-storage';

@Component({
  selector: 'app-ia',
  templateUrl: './ia.component.html',
  styleUrls: ['./ia.component.css']
})
export class IAComponent implements OnInit {

  data: any ;

  constructor(private localStorage: LocalStorage) {
  }

  ngOnInit() {
    const parse = this.localStorage.getObject('la');
    this.localStorage.remove('la');
    this.data = parse.intangible_assets;
  }

}
