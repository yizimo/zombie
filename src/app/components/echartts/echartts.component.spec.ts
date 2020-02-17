import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcharttsComponent } from './echartts.component';

describe('EcharttsComponent', () => {
  let component: EcharttsComponent;
  let fixture: ComponentFixture<EcharttsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcharttsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcharttsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
