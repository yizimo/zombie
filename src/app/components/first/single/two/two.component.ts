import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  validateFromTwo: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.validateFromTwo = this.fb.group({
      patent: [0, [Validators.required]],
      trademark: [0, [Validators.required]],
      book: [0, [Validators.required]]
    });
  }

}
