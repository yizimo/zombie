import {Validators} from '@angular/forms';

export class Company {


  constructor(
    public id: number,
    public time: Date,
    public money: number,
    public industry: number,
    public area: number,
    public type: number,
    public controllingType: number,
    public controllingShareHold: number
  ) {
  }
}
