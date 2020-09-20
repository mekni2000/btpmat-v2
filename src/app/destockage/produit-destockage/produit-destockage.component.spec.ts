import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitDestockageComponent } from './produit-destockage.component';

describe('ProduitDestockageComponent', () => {
  let component: ProduitDestockageComponent;
  let fixture: ComponentFixture<ProduitDestockageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitDestockageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitDestockageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
