import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitDestockage2Component } from './produit-destockage2.component';

describe('ProduitDestockage2Component', () => {
  let component: ProduitDestockage2Component;
  let fixture: ComponentFixture<ProduitDestockage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitDestockage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitDestockage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
