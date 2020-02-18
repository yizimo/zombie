import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChainMapComponent } from './chain-map.component';

describe('ChainMapComponent', () => {
  let component: ChainMapComponent;
  let fixture: ComponentFixture<ChainMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChainMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChainMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
