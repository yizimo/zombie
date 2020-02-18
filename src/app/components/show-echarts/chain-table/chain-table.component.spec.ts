import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChainTableComponent } from './chain-table.component';

describe('ChainTableComponent', () => {
  let component: ChainTableComponent;
  let fixture: ComponentFixture<ChainTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChainTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChainTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
