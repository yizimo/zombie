import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgainComponent } from './again.component';

describe('AgainComponent', () => {
  let component: AgainComponent;
  let fixture: ComponentFixture<AgainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
