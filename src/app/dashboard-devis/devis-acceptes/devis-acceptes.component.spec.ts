import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevisAcceptesComponent } from './devis-acceptes.component';

describe('DevisAcceptesComponent', () => {
  let component: DevisAcceptesComponent;
  let fixture: ComponentFixture<DevisAcceptesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevisAcceptesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevisAcceptesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
