import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablComponent } from './tabl.component';

describe('TablComponent', () => {
  let component: TablComponent;
  let fixture: ComponentFixture<TablComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
