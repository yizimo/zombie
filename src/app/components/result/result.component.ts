import { Component, OnInit } from '@angular/core';
import {GetSendDataService} from '../../services/get-send-data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private getSendDataService: GetSendDataService) { }

  ngOnInit() {
  }

}
