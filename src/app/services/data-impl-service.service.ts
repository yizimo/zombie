import { Injectable } from '@angular/core';
import {DataService} from './data.service';
import {HttpClient} from '@angular/common/http';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class DataImplServiceService extends DataService {

   dataUrl = 'http://47.98.46.41:800/data';

  constructor(private http: HttpClient) {
    super();
  }

  getResult(id: number) {
    return  this.http.get(this.dataUrl + '/center?id=' + id);
  }
  getResultBySearchName(searchName: number) {
    return this.http.get(this.dataUrl + '/search?id=' + searchName);
  }

}

