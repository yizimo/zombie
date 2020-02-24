import {Component, Input, OnInit} from '@angular/core';
import {LocalStorage} from '../../../utils/local-storage';
import {Zombie} from '../../../kind/zombie';

@Component({
  selector: 'app-bi',
  templateUrl: './bi.component.html',
  styleUrls: ['./bi.component.css']
})
export class BIComponent implements OnInit {

  zombie: Zombie;
  constructor(private localStorage: LocalStorage) { }

  ngOnInit() {
    const parse = this.localStorage.getObject('la');
    this.zombie = parse.page_head;
    console.log(this.zombie.id);
    this.localStorage.remove('la');
  }




}
