import { Component, OnInit } from '@angular/core';
import {Result} from '../../../kind/result';
import {ResultSum} from '../../../kind/result-sum';

interface ParentItemData {
  key: number;
  name: string;
  platform: string;
  version: string;
  upgradeNum: number | string;
  creator: string;
  createdAt: string;
  expand: boolean;
}

interface ChildrenItemData {
  key: number;
  name: string;
  date: string;
  upgradeNum: string;
}


@Component({
  selector: 'app-tabl',
  templateUrl: './tabl.component.html',
  styleUrls: ['./tabl.component.css']
})
export class TablComponent implements OnInit {

  listOfParentResult: ResultSum[] = [];
  listOfChildrenResultSuccess: Result[] = [];
  listOfChildrenResultError: Result[] = [];
  listOfChildrenResultWait: Result[] = [];

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 3; ++i) {
      this.listOfParentResult.push({
        id: i,
        resultSuccess: i
      });
    }
    for (let i = 0; i < 3; ++i) {
      this.listOfChildrenResultError.push({
        componyId: i,
        flag: null,
        warningLevel: null,
        advice: null
      });
    }
    for (let i = 0; i < 3; ++i) {
      this.listOfChildrenResultSuccess.push({
        componyId: i,
        flag: true,
        warningLevel: 1,
        advice: 'zimo'
      });
    }
    for (let i = 0; i < 3; ++i) {
      this.listOfChildrenResultWait.push({
        componyId: i,
        flag: null,
        warningLevel: null,
        advice: null
      });
    }
  }

}
