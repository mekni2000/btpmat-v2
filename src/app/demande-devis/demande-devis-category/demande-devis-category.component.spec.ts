import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeDevisCategoryComponent } from './demande-devis-category.component';

describe('DemandeDevisCategoryComponent', () => {
  let component: DemandeDevisCategoryComponent;
  let fixture: ComponentFixture<DemandeDevisCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeDevisCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeDevisCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
