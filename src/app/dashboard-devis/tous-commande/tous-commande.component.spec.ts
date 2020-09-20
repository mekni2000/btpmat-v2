import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TousCommandeComponent } from './tous-commande.component';

describe('TousCommandeComponent', () => {
  let component: TousCommandeComponent;
  let fixture: ComponentFixture<TousCommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TousCommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TousCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
