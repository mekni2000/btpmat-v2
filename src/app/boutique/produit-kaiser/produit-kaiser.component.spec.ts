import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitKaiserComponent } from './produit-kaiser.component';

describe('ProduitKaiserComponent', () => {
  let component: ProduitKaiserComponent;
  let fixture: ComponentFixture<ProduitKaiserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitKaiserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitKaiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
