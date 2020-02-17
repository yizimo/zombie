import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class InfoService {

  abstract getInfo(id: number);
}
