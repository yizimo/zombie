import { Injectable } from '@angular/core';
import {InfoService} from './info.service';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoImplService extends InfoService {

  dataUrl = 'http://47.98.46.41:800/data';
  constructor(private http: HttpClient) {
    super();
  }
  getInfo(id: number) {
    return this.http.get(this.dataUrl + '/detail?id=' + id);
  }
}
