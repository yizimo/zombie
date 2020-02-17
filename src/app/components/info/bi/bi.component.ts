import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bi',
  templateUrl: './bi.component.html',
  styleUrls: ['./bi.component.css']
})
export class BIComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  private _id = 0;
  constructor() { }

  ngOnInit() {
  }

  @Input()
  set id(id: number) {
    this._id = id;
  }

  get id(): number {
    return this._id;
  }



}
