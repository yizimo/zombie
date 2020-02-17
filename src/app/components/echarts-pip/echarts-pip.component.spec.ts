import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartsPipComponent } from './echarts-pip.component';

describe('EchartsPipComponent', () => {
  let component: EchartsPipComponent;
  let fixture: ComponentFixture<EchartsPipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchartsPipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartsPipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
