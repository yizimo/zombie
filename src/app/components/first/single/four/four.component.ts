import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.css']
})
export class FourComponent implements OnInit {

  validateFormFour: FormGroup
  // tslint:disable-next-line:no-output-rename
  @Output('getInfo') info = new EventEmitter<any>();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.validateFormFour = this.fb.group({
      time: [null, [Validators.required]],
      employees: [null, [Validators.required]],
      totalAssets: [null, [Validators.required]],
      totalLiabilities: [null, [Validators.required]],
      grossRevenue: [null, [Validators.required]],
      mainBusinessIncome: [null, [Validators.required]],
      totalProfit: [null, [Validators.required]],
      retainedProfit: [null, [Validators.required]],
      totalTax: [null, [Validators.required]],
      ownersEquity: [null, [Validators.required]],
      timeTwo: [null, [Validators.required]],
      employeesTwo: [null, [Validators.required]],
      totalAssetsTwo: [null, [Validators.required]],
      totalLiabilitiesTwo: [null, [Validators.required]],
      grossRevenueTwo: [null, [Validators.required]],
      mainBusinessIncomeTwo: [null, [Validators.required]],
      totalProfitTwo: [null, [Validators.required]],
      retainedProfitTwo: [null, [Validators.required]],
      totalTaxTwo: [null, [Validators.required]],
      ownersEquityTwo: [null, [Validators.required]],
      timeThree: [null, [Validators.required]],
      employeesThree: [null, [Validators.required]],
      totalAssetsThree: [null, [Validators.required]],
      totalLiabilitiesThree: [null, [Validators.required]],
      grossRevenueThree: [null, [Validators.required]],
      mainBusinessIncomeThree: [null, [Validators.required]],
      totalProfitThree: [null, [Validators.required]],
      retainedProfitThree: [null, [Validators.required]],
      totalTaxThree: [null, [Validators.required]],
      ownersEquityThree: [null, [Validators.required]]
    });

  }

  la(result: Date) {
    this.validateFormFour.patchValue({
      timeTwo:  new Date(result)
        .setFullYear((result).getFullYear() + 1),
      timeThree: new Date(result)
        .setFullYear((result).getFullYear() + 2)
    });
  }

  getInfo() {
    this.info.emit(this.validateFormFour.value);
  }

}
