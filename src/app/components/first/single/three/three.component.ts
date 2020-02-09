import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ValidateFormThree} from '../../../../kind/validate-form-three';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {

  validateFormThree: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.validateFormThree = this.fb.group({
      time: [null, [Validators.required]],
      claimLimit: [null, [Validators.required]],
      claimCost: [null, [Validators.required]],
      equityLimit: [null, [Validators.required]],
      equityCost: [null, [Validators.required]],
      interiorTradeLimit: [null, [Validators.required]],
      interiorTradeCost: [null, [Validators.required]],
      projectPolicyLimit: [null, [Validators.required]],
      projectPolicyCost: [null, [Validators.required]],
      timeTwo: [null, [Validators.required]],
      claimLimitTwo: [null, [Validators.required]],
      claimCostTwo: [null, [Validators.required]],
      equityLimitTwo: [null, [Validators.required]],
      equityCostTwo: [null, [Validators.required]],
      interiorTradeLimitTwo: [null, [Validators.required]],
      interiorTradeCostTwo: [null, [Validators.required]],
      projectPolicyLimitTwo: [null, [Validators.required]],
      projectPolicyCostTwo: [null, [Validators.required]],
      timeThree: [null, [Validators.required]],
      claimLimitThree: [null, [Validators.required]],
      claimCostThree: [null, [Validators.required]],
      equityLimitThree: [null, [Validators.required]],
      equityCostThree: [null, [Validators.required]],
      interiorTradeLimitThree: [null, [Validators.required]],
      interiorTradeCostThree: [null, [Validators.required]],
      projectPolicyLimitThree: [null, [Validators.required]],
      projectPolicyCostThree: [null, [Validators.required]],
    });
  }

  la(result: Date) {
    this.validateFormThree.patchValue({
      timeTwo:  new Date(result)
        .setFullYear((result).getFullYear() + 1),
      timeThree: new Date(result)
        .setFullYear((result).getFullYear() + 2)
    });
  }

}
