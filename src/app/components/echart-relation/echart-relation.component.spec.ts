import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartRelationComponent } from './echart-relation.component';

describe('EchartRelationComponent', () => {
  let component: EchartRelationComponent;
  let fixture: ComponentFixture<EchartRelationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchartRelationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartRelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
