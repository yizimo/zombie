import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChainBarComponent } from './chain-bar.component';

describe('ChainBarComponent', () => {
  let component: ChainBarComponent;
  let fixture: ComponentFixture<ChainBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChainBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChainBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
