import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  validateFromTwo: FormGroup;
  // tslint:disable-next-line:no-output-rename
  @Output('getInfo') info = new EventEmitter<any>();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.validateFromTwo = this.fb.group({
      patent: [0, [Validators.required]],
      trademark: [0, [Validators.required]],
      book: [0, [Validators.required]]
    });
  }

  getInfo() {
    this.info.emit(this.validateFromTwo.value);
  }

}
