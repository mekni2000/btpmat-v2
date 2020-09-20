import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesDestockage2Component } from './categories-destockage2.component';

describe('CategoriesDestockage2Component', () => {
  let component: CategoriesDestockage2Component;
  let fixture: ComponentFixture<CategoriesDestockage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesDestockage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesDestockage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
