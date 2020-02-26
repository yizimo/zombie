import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class SendDataService {

  abstract getInfo(data: any);
  constructor() { }
}
