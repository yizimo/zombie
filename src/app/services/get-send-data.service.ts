import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class GetSendDataService {

  constructor() { }

  abstract getData(id: number);
}
