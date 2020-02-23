import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LineAndPipService {

    private name = new Subject<any>();

    public lineToPip$ = this.name.asObservable();

    constructor() {
    }

    public lineToPip(name: string) {
      this.name.next(name);
    }
}
