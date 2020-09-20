import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordonnesProComponent } from './coordonnes-pro.component';

describe('CoordonnesProComponent', () => {
  let component: CoordonnesProComponent;
  let fixture: ComponentFixture<CoordonnesProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordonnesProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordonnesProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
