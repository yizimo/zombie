import { Injectable } from '@angular/core';
import {DataService} from './data.service';
import {HttpClient} from '@angular/common/http';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class DataImplServiceService extends DataService {

   dataUrl = 'http://localhost:8080/data';

  constructor(private http: HttpClient) {
    super();
  }

  getResult() {
    return  this.http.get(this.dataUrl + '/center');
  }
  getResultBySearchName(searchName: number) {
    return this.http.post(this.dataUrl + '/search', searchName);
  }

}

