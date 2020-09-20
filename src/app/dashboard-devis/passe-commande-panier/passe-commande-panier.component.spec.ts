import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasseCommandePanierComponent } from './passe-commande-panier.component';

describe('PasseCommandePanierComponent', () => {
  let component: PasseCommandePanierComponent;
  let fixture: ComponentFixture<PasseCommandePanierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasseCommandePanierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasseCommandePanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
