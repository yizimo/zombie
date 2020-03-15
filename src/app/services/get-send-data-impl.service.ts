import { Injectable } from '@angular/core';
import {GetSendDataService} from './get-send-data.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetSendDataImplService extends GetSendDataService {


  constructor(private http: HttpClient) {
    super();
  }

  getData(id: number) {
    return this.http.get('/api/get_send_data?id=' + id);
  }
}
