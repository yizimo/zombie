import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FCComponent } from './fc.component';

describe('FCComponent', () => {
  let component: FCComponent;
  let fixture: ComponentFixture<FCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
