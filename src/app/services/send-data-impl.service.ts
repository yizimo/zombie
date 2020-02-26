import { Injectable } from '@angular/core';
import {SendDataService} from './send-data.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendDataImplService extends SendDataService {

  dataUrl = 'http://localhost:8080/data';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json; charset=UTF-8'
    })
  };

  constructor(private http: HttpClient) {
    super();
  }
  getInfo(data: any) {
   return this.http.post(this.dataUrl + '/send_data', data, this.httpOptions);
  }
}
