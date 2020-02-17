import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartsLineComponent } from './echarts-line.component';

describe('EchartsLineComponent', () => {
  let component: EchartsLineComponent;
  let fixture: ComponentFixture<EchartsLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchartsLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartsLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
