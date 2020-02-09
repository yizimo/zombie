import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartsSunburstComponent } from './echarts-sunburst.component';

describe('EchartsSunburstComponent', () => {
  let component: EchartsSunburstComponent;
  let fixture: ComponentFixture<EchartsSunburstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchartsSunburstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartsSunburstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
