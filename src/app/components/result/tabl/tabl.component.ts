import { Component, OnInit } from '@angular/core';
import {Result} from '../../../kind/result';
import {ResultSum} from '../../../kind/result-sum';
import {GetSendDataService} from '../../../services/get-send-data.service';




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
  id: any = 1;

  constructor(private getSendDataService: GetSendDataService) { }

  ngOnInit() {
    for (let i = 0; i < 3; ++i) {
      this.listOfParentResult.push({
        id: 0,
        resultSuccess: i
      });
    }
    this.getData();
  }
  getData() {
    this.getSendDataService.getData(this.id).subscribe(data => {
      console.log(data);
      this.listOfChildrenResultSuccess = data.data.success;
      this.listOfParentResult.push({
        id: this.listOfChildrenResultSuccess.length,
        resultSuccess: 0
      });
    });
  }

}
