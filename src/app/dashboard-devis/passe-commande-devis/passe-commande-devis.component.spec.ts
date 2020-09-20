import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasseCommandeDevisComponent } from './passe-commande-devis.component';

describe('PasseCommandeDevisComponent', () => {
  let component: PasseCommandeDevisComponent;
  let fixture: ComponentFixture<PasseCommandeDevisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasseCommandeDevisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasseCommandeDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
