import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  validateForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      id: [null, [Validators.required]],
      time: [null, [Validators.required]],
      money: [null, [Validators.required]],
      industry: [null, [Validators.required]],
      area: [null, [Validators.required]],
      type: [null, [Validators.required]],
      controllingType: [null, [Validators.required]],
      controllingShareHold: [null, [Validators.required]]
    });
  }

}
