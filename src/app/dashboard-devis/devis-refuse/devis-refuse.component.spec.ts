import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevisRefuseComponent } from './devis-refuse.component';

describe('DevisRefuseComponent', () => {
  let component: DevisRefuseComponent;
  let fixture: ComponentFixture<DevisRefuseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevisRefuseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevisRefuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
