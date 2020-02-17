import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEchartsComponent } from './show-echarts.component';

describe('ShowEchartsComponent', () => {
  let component: ShowEchartsComponent;
  let fixture: ComponentFixture<ShowEchartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowEchartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowEchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
