import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetInfoService {

  private getInfo = new Subject<any>();
  public info$ = this.getInfo.asObservable();
  constructor() { }

  public info(info: any) {
    this.getInfo.next(info);
  }

}
