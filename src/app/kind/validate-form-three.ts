import {Validators} from '@angular/forms';

export class ValidateFormThree {

  constructor(
    public time: Date,
    // tslint:disable-next-line:variable-name
    public claim_limit: number,
    // tslint:disable-next-line:variable-name
    public claim_cost: number,
    // tslint:disable-next-line:variable-name
    public equity_limit: number,
    // tslint:disable-next-line:variable-name
    public equity_cost: number,
    // tslint:disable-next-line:variable-name
    public interior_trade_limit: number,
    // tslint:disable-next-line:variable-name
    public interior_trade_cost: number,
    // tslint:disable-next-line:variable-name
    public project_policy_limit: number,
    // tslint:disable-next-line:variable-name
    public project_policy_cost: number) { }


}


