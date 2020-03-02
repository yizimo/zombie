import { Injectable } from '@angular/core';
import {SendDataService} from './send-data.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendDataImplService extends SendDataService {

  dataUrl = 'http://47.98.46.41:800/data';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded'
    })
  };

  constructor(private http: HttpClient) {
    super();
  }
  getInfo(data: any) {
   return this.http.post(this.dataUrl + '/send_data/', { ' zimo' : data}, this.httpOptions);
  }
}
